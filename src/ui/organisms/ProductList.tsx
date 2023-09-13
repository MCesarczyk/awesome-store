import Link from "next/link";
import { wait } from "@/utils";
import { productsApi } from "@/api/poductsApi";

export async function ProductsList({ page }: { page: number }) {
	const products = await productsApi.getProductsByPage(page);

	await wait(5_000 * Math.random());

	return (
		<>
			{products.map((product) => (
				<li key={product.id}>
					<Link href={`/product/${product.id}`}>{product.title}</Link>
				</li>
			))}
		</>
	);
}
