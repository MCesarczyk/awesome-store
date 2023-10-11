import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { productsApi } from "@/api/poductsApi";

import { executeGraphql } from "@/api/executeGraphql";
import { 
	type CartFragment, 
	CartGetByIdDocument, 
	ProductGetDetailsDocument, 
	CartCreateDocument, 
	CartAddItemDocument,
	type Product,
	CartAddProductDocument,
	CartUpdateTotalDocument
} from "@/gql/graphql";
import { ProductCoverImage } from "@/ui/atoms/productCoverImage";
import { ProductDescription } from "@/ui/atoms/productDescription";
import { ProductsList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const products = await productsApi.getProductsByPage(1);
	return products.map((product) => ({
		productId: product.id,
	}));	
};	

interface MetadataProps {
	params: { productId: string };
}	

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	const { product } = await executeGraphql(ProductGetDetailsDocument, {
		id: params.productId,
	});	

	return {
		title: product?.name || "",
		description: product?.description || "",
	};	
}	

export default async function Product({ params: {productId} }: MetadataProps) {
	const { product } = await executeGraphql(ProductGetDetailsDocument, {
		id: productId,
	});	

	if (!product) {
		notFound();
	}	
	
	async function addProductToCartAction() {
		"use server"
	
		async function getCartById(cartId:string) {
			return executeGraphql(CartGetByIdDocument, { id: cartId, status: "PENDING" });
		}	
	
		async function createCart() {
			return executeGraphql(CartCreateDocument, { total: 555 });
		}	
	
		async function addToCart(cartId: string, productId: string) {
			console.log('cartId: ', cartId, 'productId: ', productId);
			
			const {product} = await executeGraphql(ProductGetDetailsDocument, {id: productId});
			if (!product) {
				throw new Error("Product not found");
			}

			const cart = await getCartById(cartId);
			console.log('cart total: ', cart.order?.total);
			
			if (!cart) {
				throw new Error("Cart not found");
			}

			if(cart && cart?.order &&  cart.order.orderItems && Array.isArray(cart.order.orderItems) && cart.order.orderItems?.some((item) => item.productId === productId)) {
				const selectedOrderItem = cart.order.orderItems.find((item) => item.productId === productId);
				console.log('selectedOrderItem: ', selectedOrderItem);
				
				if(!selectedOrderItem) {
					throw new Error("Order item not found");
				}
				
				const addProductToCart = async () => {
					await executeGraphql(CartAddProductDocument, { orderId: cartId, orderItemId: selectedOrderItem.id, productId: productId, quantity: selectedOrderItem.quantity + 1, total: selectedOrderItem.total + product.price});
					// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
					await executeGraphql(CartUpdateTotalDocument, { id: cartId, total: (cart.order?.total || 0) + product.price});
				};

				return addProductToCart();
			}
			
			return executeGraphql(CartAddItemDocument, { orderId: cartId, productId: productId, quantity: 5, total: 6 });
		}	
	
		async function getOrCreateCart(): Promise<CartFragment> {
			const cartId = cookies().get("cartId")?.value;
			if (cartId) {
				const cart = await getCartById(cartId);
				if(cart.order) {
					return cart.order;
				}
			} 
			
			const cart = await createCart();

			if (!cart.createOrder) {
				throw new Error("Failed to create cart");
			}

			return cart.createOrder;
		}
		
		const cart = await getOrCreateCart();
		
		cart && cookies().set("cartId", cart.id, {
			httpOnly: true,
			sameSite: "lax",
			secure: process.env.NODE_ENV === "production",
		});

		await addToCart(cart.id, productId);
	}

	return (
		<article className="flex">
			<aside className="hidden sm:block w-32 p-4 pr-0 mt-16">
				<h2 className="mb-4 text-xl font-bold">Related products</h2>
				<Suspense>
					<ProductsList testId="related-products" category={product.categories[0]?.slug as unknown as string} page={1} perPage={4} />
				</Suspense>
			</aside>
			<div className="w-full px-2 sm:px-12 py-20">
				<h1 className="text-3xl sm:text-4xl font-semibold">{product.name}</h1>
				<form className="w-full flex justify-between" action={addProductToCartAction}>
					<button type="submit" data-testid="add-to-cart-button" className="ml-auto rounded-md border bg-slate-700 px-8 py-3 text-white">
						Add to cart
					</button>
				</form>	
				<p className="m-8 flex flex-col sm:flex-row gap-8 mb-8 mx-auto max-w-md p-2 sm:p-4 sm:max-w-2xl sm:py-2">
					{product.images[0] && <ProductCoverImage key={product.images[0].id} image={product.images[0]} />}
					<ProductDescription variant="EXTENDED" product={product} />
				</p>
				<form data-testid="add-review-form" className="w-full text-right pr-12 sm:pr-24 lg:pr-48 xl:pr-96">
					<ul className="flex flex-col gap-2">
						<li>Headline <input type="text" name="headline" /></li>
						<li>Content <input type="text" name="content" /></li>
						<li>Rating <input type="text" name="rating" /></li>
						<li>Name <input type="text" name="name" /></li>
						<li>Email <input type="text" name="email" /></li>
					</ul>
				</form>
			</div>
		</article>
	);
}
