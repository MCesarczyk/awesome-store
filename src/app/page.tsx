import { ProductsList } from "@/ui/organisms/ProductList";

export default function Home() {
	return (
		<section className="mx-auto p-12">
			<h1 className="text-4xl mb-16">AWESOME SHOP</h1>
			<ProductsList page={1} perPage={4} variant="PRIMARY" />
		</section>
	);
}
