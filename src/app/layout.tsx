import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { APP_TITLE } from "@/constants";
import { Navbar } from "@/ui/organisms/navbar";
import { Footer } from "@/ui/organisms/Footer";
import { executeGraphql } from "@/api/executeGraphql";
import { CartGetByIdDocument, CategoriesGetListDocument, CollectionsGetListDocument } from "@/gql/graphql";
import { Search } from "@/ui/organisms/search";
import { NavigationLink } from "@/ui/atoms/navigationLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL('https://awesome-store-acme.vercel.app'),
  alternates: {
		canonical: '/',
    languages: {
			'en-US': '/en-US',
      'pl-PL': '/pl-PL',
    },
  },
	title: APP_TITLE,
	description: 'Awesome store - ACME - the best lorem ipsum online',
  openGraph: {
    images: '/og-image.jpeg',
  },
}

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
				<header className="flex flex-col items-end">
					<Navbar>
						<NavigationLink href={`/collections/${collections[0]?.slug}/1`}>Collections</NavigationLink>
						<NavigationLink href={`/categories/${categories[0]?.slug}/1`}>Categories</NavigationLink>
						<Suspense>
							<Search />
						</Suspense>
					</Navbar>
					<div>
						<NavigationLink href="/cart">&#x1F6D2;</NavigationLink>
						{count}
					</div>
				</header>
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
