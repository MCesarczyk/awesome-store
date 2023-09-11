"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
	href: string;
	children: React.ReactNode;
}

export const NavigationLink = ({ href, children }: NavigationLinkProps) => {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={clsx(
				`text-2xl font-bold text-white hover:text-slate-500`,
				pathname === href && "border-b-2 border-b-white",
			)}
		>
			{children}
		</Link>
	);
};
