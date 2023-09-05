import { ProductList } from "@/ui/organisms/ProductList";
import type { ProductItem } from "@/ui/types";

const products: ProductItem[] = [
	{
		id: 1,
		category: "milling",
		name: "shell mill",
		price: 200,
		image: {
			src: "/shell_mill.jpeg",
			alt: "shell mill",
		},
	},
	{
		id: 2,
		category: "milling",
		name: "porcupine mill",
		price: 200,
		image: {
			src: "/porcupine_mill.jpeg",
			alt: "porcupine mill",
		},
	},
	{
		id: 3,
		category: "milling",
		name: "form mill",
		price: 200,
		image: {
			src: "/form_mill.jpeg",
			alt: "form mill",
		},
	},
	{
		id: 4,
		category: "milling",
		name: "maxi mill",
		price: 200,
		image: {
			src: "/maxi_mill.jpeg",
			alt: "maxi mill",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
			<ProductList products={products} />
		</section>
	);
}
