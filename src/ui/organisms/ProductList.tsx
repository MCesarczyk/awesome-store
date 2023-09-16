import { productsApi } from "@/api/poductsApi";
import { ProductListItem } from "@/ui/molecules";

interface ProductsListProps {
	page: number;
	perPage?: number;
}

export async function ProductsList({ page, perPage }: ProductsListProps) {
	const products = await productsApi.getProductsList(page, perPage);

	return (
		<ul data-testid="products-list" className="flex flex-wrap gap-8 mx-auto">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
}
