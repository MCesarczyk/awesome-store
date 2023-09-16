import { type Category } from "@/ui/types";

interface ProductDescriptionProps {
	product: {
		id: string;
		attributes: {
			name: string;
			categories: { data: Category[]};
			price: number;
		};
	};
}

export const ProductDescription = ({
	product
}: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{product.attributes.name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Category:</span>
					{product.attributes.categories.data[0]?.attributes.name}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Price:</span>${product.attributes.price}
			</p>
		</div>
	);
};
