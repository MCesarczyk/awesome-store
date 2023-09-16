import { ProductsList } from "@/ui/organisms/ProductList";

export default function Home() {
	return (
		<section className="mx-auto flex flex-wrap p-12 ">
			<h1 className="text-4xl mb-16">CNC TOOL STORE</h1>
			<ProductsList page={1} perPage={4} />
		</section>
	);
}
