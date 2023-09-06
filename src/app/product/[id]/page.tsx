"use client";

import { useParams } from "next/navigation";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import { products } from "@/app/products";

export default function Product() {
	const { id } = useParams();

	document.title = `Product: ${String(id)}`;

	const product = products.find((product) => product.id === +id);

	if (!product) {
		return <h2>Product not found</h2>;
	}

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
			<header>
				<h1>Product: {id}</h1>
			</header>
			<p>
				<ProductCoverImage {...product.image} />
				<ProductDescription product={product} />
			</p>
		</section>
	);
}
