import { type ReactNode } from "react";
import { NavigationLink } from "@/ui/atoms/navigationLink";

interface NavbarProps {
	children?: ReactNode;
}

export const Navbar = ({ children }:NavbarProps) => (
	<nav className="w-full bg-blue-700 px-6 bg-opacity-50 fixed text-white align-baseline height">
		<ul className="flex gap-1 align-middle">
			<li>
				<NavigationLink href="/" exact>Home</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/products">All</NavigationLink>
			</li>
			{children}
		</ul>
	</nav>
);
