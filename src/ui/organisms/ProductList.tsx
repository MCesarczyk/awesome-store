import { ProductListItem } from "@/ui/molecules/ProductListItem";
import type { ProductItem } from "@/ui/types";

interface ProductListProps {
	products: ProductItem[];
}

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
