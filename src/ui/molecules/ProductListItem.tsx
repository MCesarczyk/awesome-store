import Link from "next/link";
import { type Product } from "@/types";
import { ProductCoverImage } from "@/ui/atoms/productCoverImage";
import { ProductDescription } from "@/ui/atoms/productDescription";

interface ProductListItemProps {
	product: Product;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.id} className="w-48 xl:w-64">
			<article>
				<Link href={`/product/${product.id}`}>
					<ProductCoverImage image={product.images[0]} />
				</Link>
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
