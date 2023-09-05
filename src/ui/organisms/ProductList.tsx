import { ProductListItem } from "@/ui/molecules/ProductListItem";

export const ProductList = () => {
	return (
		<ul className="grid grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
			<ProductListItem
				product={{
					category: "Accessories",
					name: "placeholder",
					price: 200,
					image: {
						src: "/placeholder.jpg",
						alt: "placeholder",
					},
				}}
			/>
			<ProductListItem
				product={{
					category: "Accessories",
					name: "placeholder",
					price: 200,
					image: {
						src: "/placeholder.jpg",
						alt: "placeholder",
					},
				}}
			/>
			<ProductListItem
				product={{
					category: "Accessories",
					name: "placeholder",
					price: 200,
					image: {
						src: "/placeholder.jpg",
						alt: "placeholder",
					},
				}}
			/>
			<ProductListItem
				product={{
					category: "Accessories",
					name: "placeholder",
					price: 200,
					image: {
						src: "/placeholder.jpg",
						alt: "placeholder",
					},
				}}
			/>
		</ul>
	);
};
