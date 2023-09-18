import { executeGraphql } from "@/api/executeGraphql";
import { ProductsGetListDocument } from "@/gql/graphql";
import { isProductValid } from "@/typeguards";
import { ProductListItem } from "@/ui/molecules";

interface ProductsListProps {
	page: number;
	perPage?: number;
	variant?: "PRIMARY" | "SECONDARY";
}

export async function ProductsList({ page, perPage = 10, variant }: ProductsListProps) {
	const { products } = await executeGraphql(ProductsGetListDocument, {
		first: perPage,
		skip: (page - 1) * perPage,
	});

	if (!products) {
		return null;
	}

	return (
		<ul data-testid="products-list" className={`${variant === 'PRIMARY' ? "grid sm:grid-cols-2 gap-8 lg:grid-cols-4" : "flex flex-wrap flex-grow-0 flex-shrink gap-8 mx-auto"}`}>
			{products.map((product) => (
				product && isProductValid(product) ? <ProductListItem key={product.id} product={product} /> : null
			))}
		</ul>
	);
}
