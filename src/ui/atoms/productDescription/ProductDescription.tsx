import { type Category, type ProductSize, type ProductColor } from "@/types";
import { ColorSelector } from "@/ui/organisms/colorSelector";
import { SizeSelector } from "@/ui/organisms/sizeSelector";
import { formatMoney } from "@/utils";

interface ProductDescriptionProps {
	product: {
		id: string;
		name: string;
		categories: Category[] | null | undefined;
		price: number;
		description: string;
		colors: ProductColor[];
		sizes: ProductSize[];
	};
	variant?: 'DEFAULT' | 'EXTENDED';
}

export const ProductDescription = ({
	variant,
	product
}: ProductDescriptionProps) => {
	if (variant === 'EXTENDED') {
		return (
		<div className="mt-2 text-lg flex flex-col gap-4 flex-grow justify-between text-white h-full">
			<p className="flex flex-col text-gray-400">
				<span className="text-xs mr-2">Category:</span>
				{product.categories && product.categories[0]?.name}
			</p>
			<SizeSelector sizes={product.sizes}  />
			<ColorSelector colors={product.colors} />
			<p className="flex flex-col text-gray-400">
				<span className="text-xs mr-2">Price:</span>${formatMoney(product.price)}
			</p>
			<p className="text-sm">{product.description}</p>
		</div>
		);
	}

	return (
		<div className="mt-2 flex flex-col justify-between text-white">
			<div className="flex justify-between gap-2">
				<p className="text-sm text-gray-400">
					<span className="sr-only">Category:</span>
					{product.categories && product.categories[0]?.name}
				</p>
				<p className="text-sm font-medium text-gray-500 mt-auto">
					<span className="sr-only">Price:</span>${(product.price/100).toFixed(2)}
				</p>
			</div>
		</div>
	);
};
