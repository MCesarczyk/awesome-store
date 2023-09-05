import Link from "next/link";

interface NavigationLinkProps {
	href: string;
	children: React.ReactNode;
}

export const NavigationLink = ({ href, children }: NavigationLinkProps) => (
	<Link href={href}>
		<button className="text-2xl font-bold text-white hover:text-red-500">{children}</button>
	</Link>
);
