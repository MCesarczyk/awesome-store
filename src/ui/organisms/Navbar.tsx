import { NavigationLink } from "@/ui/atoms/navigationLink";

export const Navbar = () => (
	<nav className="w-full bg-blue-700 px-6 py-2 bg-opacity-50 fixed text-white">
		<ul className="flex gap-4">
			<li>
				<NavigationLink href="/">Home</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/products">All</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/categories">Categories</NavigationLink>
			</li>
		</ul>
	</nav>
);
