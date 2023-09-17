import { executeGraphql } from "@/api/executeGraphql";
import { ProductsGetListDocument } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules";

interface ProductsListProps {
	page: number;
	perPage?: number;
}

export async function ProductsList({  }: ProductsListProps) {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		first: 4,
	});

	return (
		<ul data-testid="products-list" className="flex flex-wrap gap-8 mx-auto">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
}
