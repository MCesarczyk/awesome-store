"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavigationLinkProps } from "@/types";

export const NavigationLink = <T extends string>({ href, children, exact }: NavigationLinkProps<T>) => {
	const pathname = usePathname();

	const isActive = exact ? pathname === href : pathname.includes(href);

	return (
		<div className="px-2 py-1 bg-blue-700 opacity-90 hover:bg-blue-600 text-white hover:text-slate-500">
			<Link
				href={href}
				aria-current={isActive ? "page" : undefined}
				className={clsx(
					"text-xl font-semibold",
					isActive && "border-b-2 border-b-white",
				)}
			>
				{children}
			</Link>
		</div>
	);
};
