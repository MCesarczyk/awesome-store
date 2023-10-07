import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { APP_TITLE } from "@/constants";
import { Navbar } from "@/ui/organisms/navbar";
import { Footer } from "@/ui/organisms/Footer";
import { Dropdown } from "@/ui/molecules/dropdown";
import { executeGraphql } from "@/api/executeGraphql";
import { CartGetByIdDocument, CategoriesGetListDocument, CollectionsGetListDocument } from "@/gql/graphql";
import { type Collection, type Category } from "@/types";
import { Search } from "@/ui/organisms/search";
import "./globals.css";
import { NavigationLink } from "@/ui/atoms/navigationLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: APP_TITLE,
	description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const {categories} = await executeGraphql(CategoriesGetListDocument, {});

	const {collections} = await executeGraphql(CollectionsGetListDocument, {});

	const cartId = cookies().get("cartId")?.value;
	const cart = cartId
		? await executeGraphql(CartGetByIdDocument, {
				id: cartId, status: "PENDING"
			})
		: null;
 
	const count = cart?.order?.orderItems.length || 0;

	if (!categories || !collections) {
		return;
	}

	return (
		<html lang="en">
			<body className={`${inter.className} h-screen flex flex-col`}>
				<header>
					<Navbar>
						<li className="flex items-center">
							Collection:
						</li>
						<li>
							<Dropdown
								options={collections.map((collection) => ({
									href: `/collections/${(collection as Collection).slug}`,
									children: (collection as Collection).name,
								}))}
							/>
						</li>
						<li className="flex items-center">
							Category:
						</li>
						<li>
							<Dropdown
								options={categories.map((category) => ({
									href: `/categories/${(category as Category).slug}`,
									children: (category as Category).name,
								}))}
							/>
						</li>
						<Suspense>
							<Search />
						</Suspense>
						<NavigationLink href="/cart">&#x1F6D2;</NavigationLink>
						{count}
					</Navbar>
				</header>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
