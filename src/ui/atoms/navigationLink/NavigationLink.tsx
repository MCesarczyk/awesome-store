"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps <T extends string>{
	href: Route<T>;
	children: React.ReactNode;
}

export const NavigationLink = <T extends string>({ href, children }: NavigationLinkProps<T>) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={clsx(
				`text-xl font-semibold text-white hover:text-slate-500`,
				pathname === href && "border-b-2 border-b-white",
			)}
		>
			{children}
		</Link>
	);
};
