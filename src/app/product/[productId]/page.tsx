import { type Metadata } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { products } from "@/app/products";

interface MetadataProps {
	params: { productId: string };
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	return {
		title: `Product ${params.productId}`,
	};
}

export default function Product({ params }: MetadataProps) {
	const product = products.find((product) => product.id === +params.productId);

	if (!product) {
		return <h2>Product not found</h2>;
	}

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
			<header>
				<h1>Product: {params.productId}</h1>
			</header>
			<p>
				<ProductCoverImage {...product.image} />
				<ProductDescription product={product} />
			</p>
		</section>
	);
}
