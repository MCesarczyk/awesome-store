import { type Category } from "@/types";

interface ProductDescriptionProps {
	product: {
		id: string;
		name: string;
		categories: Category[] | null | undefined;
		price: number;
	};
}

export const ProductDescription = ({
	product
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{product.name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Category:</span>
					{product.categories && product.categories[0]?.name}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Price:</span>${product.price}
			</p>
		</div>
	);
};
