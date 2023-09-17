import { Suspense } from "react";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductsList } from "@/ui/organisms/ProductList";

interface Props {
	params: {};
	searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductsPage(props: Props) {
	const searchParams = props.searchParams;
	const page = searchParams.page ? Number(searchParams.page) : 1;

	return (
		<section>
			<h1 className="mb-4 text-3xl font-bold">Products list</h1>
			<p className="border-r-12 mb-8 bg-slate-100 px-16 py-8">
				<Suspense>
					<ProductsList page={page} perPage={8} />
				</Suspense>
			</p>
			<footer>
				<Pagination page={page} />
			</footer>
		</section>
	);
}
