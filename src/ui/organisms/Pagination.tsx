import Link from "next/link";
import { productsApi } from "@/api/poductsApi";

interface PaginationProps {
	page?: number;
	perPage?: number;
}

export const Pagination = async ({ page = 1, perPage = 10 }: PaginationProps) => {
	const products = await productsApi.getProducts();

	const pages = Math.ceil(products.length / perPage);

	if (!pages) {
		return null;
	}

	return (
		<nav
			className="flex flex-nowrap justify-center gap-4 py-6 text-2xl font-bold text-slate-600"
			data-testid="pagination"
		>
			pagination {page}/{pages}
			{[...Array(pages).keys()].map((page, index) => (
				<Link
					key={page}
					href={`/products?page=${index + 1}`}
					className={`text-2xl font-bold text-pink-600 hover:text-pink-300`}
				>
					{index + 1}
				</Link>
			))}
		</nav>
	);
};
