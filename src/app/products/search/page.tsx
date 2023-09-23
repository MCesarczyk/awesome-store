import { Pagination } from "@/ui/organisms/Pagination";
import { executeGraphql } from "@/api/executeGraphql";
import { ProductsGetListDocument } from "@/gql/graphql";
import { isProductValid } from "@/typeguards";
import { ProductListItem } from "@/ui/molecules/productListItem";

interface Props {
	params: {};
	searchParams: { [key: string]: string | undefined };
}

export default async function SearchPage({searchParams}: Props) {
  const perPage = 10;
	const page = searchParams.page ? Number(searchParams.page) : 1;
  const search = searchParams.query || "";

  const { products } = await executeGraphql(ProductsGetListDocument, {
    first: perPage,
    skip: (page - 1) * perPage,
    name: search
  });
  
	if (!products) {
    return null;
	}

	return (
		<section>
			<h1 className="mx-2 mb-8 text-4xl font-semibold">Products list</h1>
      <p>Search: {search}</p>
			<p className="border-r-12 mb-8 bg-gray-700 p-8 flex align-middle justify-center">
				<ul data-testid="filtered-products" className="grid sm:grid-cols-2 gap-8 lg:grid-cols-4">
					{products.map((product) => (
						product && isProductValid(product) ? <ProductListItem key={product.id} product={product} /> : null
					))}
				</ul>
			</p>
			<footer>
				<Pagination itemsNumber={products?.length} path="/products" page={page} perPage={10} />
			</footer>
		</section>
	);
}
