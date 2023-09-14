import Link from "next/link";
import { type ProductItem } from "@/ui/types";
import { ProductCoverImage } from "@/ui/atoms/productCoverImage";
import { ProductDescription } from "@/ui/atoms/productDescription";

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
