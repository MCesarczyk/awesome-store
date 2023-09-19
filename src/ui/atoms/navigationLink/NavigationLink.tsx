"use client";

import clsx from "clsx";
import { type Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps <T extends string>{
	href: Route<T>;
	children: React.ReactNode;
	exact?: boolean;
}

export const NavigationLink = <T extends string>({ href, children, exact }: NavigationLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.includes(href);

	return (
		<Link
			href={href}
			className={clsx(
				`text-xl font-semibold text-white hover:text-slate-500`,
				isActive && "border-b-2 border-b-white",
			)}
		>
			{children}
		</Link>
	);
};
