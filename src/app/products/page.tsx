import { Pagination } from "@/ui/organisms/Pagination";
import { productsApi } from "@/api/poductsApi";

export default async function Products() {
	const products = await productsApi.getProducts();

	return (
		<>
			<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
				<ul>
					{products.map((product) => (
						<li key={product.id}>{product.title}</li>
					))}
				</ul>
			</section>
			<footer>
				<Pagination />
			</footer>
		</>
	);
}
