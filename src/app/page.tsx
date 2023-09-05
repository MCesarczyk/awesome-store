import Link from "next/link";

export default function Home() {
	return (
		<main className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2">
			<h1>CNC TOOL STORE</h1>
			<Link href="/products">
				<h2>Products</h2>
			</Link>
		</main>
	);
}
