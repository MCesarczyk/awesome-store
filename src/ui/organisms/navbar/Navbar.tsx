import { type ReactNode } from "react";
import { NavigationLink } from "@/ui/atoms/navigationLink";

interface NavbarProps {
	children?: ReactNode;
}

export const Navbar = ({ children }:NavbarProps) => (
	<nav className="w-full bg-blue-700 px-6 py-2 bg-opacity-50 fixed text-white">
		<ul className="flex gap-4">
			<li>
				<NavigationLink href="/" exact>Home</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/products">All</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/collections">Collections</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/categories">Categories</NavigationLink>
			</li>
			{children}
		</ul>
	</nav>
);
