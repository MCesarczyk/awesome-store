import { APP_TITLE } from "@/constants";
import { ProductsList } from "@/ui/organisms/ProductList";

export default function Home() {
	return (
		<section className="mx-auto p-12">
			<h1 className="text-4xl font-semibold my-8">{APP_TITLE}</h1>
			<ProductsList page={1} perPage={4} variant="PRIMARY" />
		</section>
	);
}
