import { Suspense } from "react";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductsList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	return (
		<section>
			<h2 className="mb-4 text-xl font-bold">Products list</h2>
			<ul>
				<Suspense>
					<ProductsList page={1} />
				</Suspense>
				<Suspense>
					<ProductsList page={2} />
				</Suspense>
			</ul>
			<footer>
				<Pagination />
			</footer>
		</section>
	);
}
