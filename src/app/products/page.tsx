import { Pagination } from "@/ui/organisms/Pagination";
import { ProductsList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	return (
		<section>
			<h2 className="mb-4 text-xl font-bold">Lista produktów</h2>
			<ul>
				<ProductsList page={1} />
				<ProductsList page={2} />
			</ul>
			<footer>
				<Pagination />
			</footer>
		</section>
	);
}
