import { executeGraphql } from "@/api/executeGraphql";
import { ProductsGetListDocument } from "@/gql/graphql";
import { isProductValid } from "@/typeguards";
import { ProductListItem } from "@/ui/molecules";

interface ProductsListProps {
	page: number;
	perPage?: number;
}

export async function ProductsList({ page, perPage = 10 }: ProductsListProps) {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		first: perPage,
		skip: (page - 1) * perPage,
	});

	if (!products) {
		return null;
	}

	return (
		<ul data-testid="products-list" className="flex flex-wrap gap-8 mx-auto">
			{products.map((product) => (
				product && isProductValid(product) ? <ProductListItem key={product.id} product={product} /> : null
			))}
		</ul>
	);
}
