import { Suspense } from "react";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductsList } from "@/ui/organisms/ProductList";
import { executeGraphql } from "@/api/executeGraphql";
import { ProductsGetListDocument } from "@/gql/graphql";

interface Props {
	params: {};
	searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ProductsPage({searchParams}: Props) {
	const page = searchParams.page ? Number(searchParams.page) : 1;

	const { products } = await executeGraphql(ProductsGetListDocument, {});

	return (
		<section>
			<h1 className="mx-2 mb-8 text-4xl font-semibold">Products list</h1>
			<p className="border-r-12 mb-8 bg-gray-700 p-8 flex align-middle justify-center">
				<Suspense>
					<ProductsList testId="products-list" page={page} perPage={4} variant="PRIMARY" />
				</Suspense>
			</p>
			<footer>
				{products && <Pagination itemsNumber={products?.length} path="/products" page={page} />}
			</footer>
		</section>
	);
}
