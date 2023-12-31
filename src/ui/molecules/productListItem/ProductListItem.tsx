import Link from "next/link";
import { type Product } from "@/types";
import { ProductCoverImage } from "@/ui/atoms/productCoverImage";
import { ProductDescription } from "@/ui/atoms/productDescription";

interface ProductListItemProps {
	product: Product;
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li key={product.id} className="w-full">
			<article>
				<Link href={`/product/${product.id}`}>
				<h3 role="heading" className="text-sm font-semibold">{product.name}</h3>
					<ProductCoverImage image={product.images[0]} />
				</Link>
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
