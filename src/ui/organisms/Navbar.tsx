import { NavigationLink } from "@/ui/atoms/NavigationLink";

export const Navbar = () => (
	<nav className="w-full bg-blue-700 px-6 py-3 text-white">
		<ul className="flex gap-4">
			<li>
				<NavigationLink href="/">Home</NavigationLink>
			</li>
			<li>
				<NavigationLink href="/products">All</NavigationLink>
			</li>
		</ul>
	</nav>
);
