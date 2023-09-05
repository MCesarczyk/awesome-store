import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductDescription } from "@/ui/atoms/ProductDescription";

interface ProductListItemProps {
	product: {
		category: string;
		name: string;
		price: number;
		image: {
			src: string;
			alt: string;
		};
	};
}

export const ProductListItem = ({ product }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductCoverImage {...product.image} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
