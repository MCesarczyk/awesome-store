import { productsApi } from "@/api/poductsApi";
import { ProductListItem } from "@/ui/molecules";

interface ProductsListProps {
	page: number;
	perPage?: number;
}

export async function ProductsList({ }: ProductsListProps) {
	const products = await productsApi.getProductsList();

	return (
		<ul data-testid="products-list" className="flex flex-wrap gap-8 mx-auto">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
}
