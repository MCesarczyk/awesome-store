import Link from "next/link";

export const Pagination = () => {
	return (
		<label className="flex flex-nowrap justify-center gap-4 py-6 text-2xl font-bold text-white">
			pagination
			<Link
				href={`/products?page=1`}
				className={`text-2xl font-bold text-white hover:text-slate-500`}
			>
				1
			</Link>
		</label>
	);
};
