import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { productsApi } from "@/api/poductsApi";

import { executeGraphql } from "@/api/executeGraphql";
import { ProductGetDetailsDocument } from "@/gql/graphql";
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

	return (
		<article className="flex">
			<aside className="hidden sm:block w-32 p-4 pr-0 mt-16">
				<h2 className="mb-4 text-xl font-bold">Related products</h2>
				<Suspense>
					<ProductsList testId="related-products" category={product.categories[0]?.slug as unknown as string} page={1} perPage={4} />
				</Suspense>
			</aside>
			<section className="px-2 sm:px-12 py-20">
				<h1 className="text-3xl sm:text-4xl font-semibold">{product.name}</h1>
				<p className="m-8 flex flex-col sm:flex-row gap-8 mb-8 mx-auto max-w-md p-2 sm:p-4 sm:max-w-2xl sm:py-2">
					{product.images.map(image => <ProductCoverImage key={image.id} image={image} />)}
					<ProductDescription variant="EXTENDED" product={product} />
				</p>
			</section>
		</article>
	);
}
