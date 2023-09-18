import { type Category } from "@/types";

interface ProductDescriptionProps {
	product: {
		id: string;
		name: string;
		categories: Category[] | null | undefined;
		price: number;
		description: string;
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
			<h3 className="block text-4xl mb-8 font-semibold">{product.name}</h3>
			<p className="flex flex-col text-gray-400">
				<span className="text-xs mr-2">Category:</span>
				{product.categories && product.categories[0]?.name}
			</p>
			<p className="flex flex-col text-gray-400">
				<span className="text-xs mr-2">Price:</span>${(product.price/100).toFixed(2)}
			</p>
			<p className="text-sm">{product.description}</p>
		</div>
		);
	}

	return (
		<div className="mt-2 flex flex-col justify-between text-white">
			<h3 className="text-sm font-semibold">{product.name}</h3>
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
