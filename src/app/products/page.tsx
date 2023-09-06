"use client";

import { products } from "@/app/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default function Products() {
	document.title = "Product list";

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
			<ProductList products={products} />
		</section>
	);
}
