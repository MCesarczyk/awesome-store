import { Suspense, type ReactNode } from "react";
import { ProductsList } from "@/ui/organisms/ProductList";

export default async function ProductsLayout({ children }: { children: ReactNode }) {
	return (
		<div className="mx-auto flex min-h-screen w-full max-w-7xl text-white bg-black pt-12">
			<aside className="hidden sm:block w-64 p-4 pr-0">
				<h2 className="mb-4 text-xl font-bold">Popular products</h2>
				<Suspense>
					<ProductsList page={1} perPage={6} />
				</Suspense>
			</aside>
			<main className="col-span-9 p-4">{children}</main>
		</div>
	);
}
