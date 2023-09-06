import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";
import type { ProductItem } from "@/ui/types";

interface ProductListItemProps {
	product: ProductItem;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<Link href={`/product/${product.id}`}>
					<ProductCoverImage {...product.image} />
				</Link>
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
