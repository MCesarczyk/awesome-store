import { type Metadata } from "next";
import { productsApi } from "@/api/poductsApi";

interface MetadataProps {
	params: { productId: string };
}

export const generateStaticParams = async () => {
	const products = await productsApi.getProductsByPage(1);
	return products.map((product) => ({
		productId: product.id,
	}));
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
	return {
		title: `Product ${params.productId}`,
	};
}

export default async function Product({ params }: MetadataProps) {
	const product = await productsApi.getProductById(params.productId);

	return (
		<section className="m-12 mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
			<header>
				<h1 className="mb-4 text-xl font-bold">{product.title}</h1>
			</header>
			<p>{product.description}</p>
		</section>
	);
}
