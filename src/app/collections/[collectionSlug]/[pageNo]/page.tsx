import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { executeGraphql } from "@/api/executeGraphql";
import { CollectionsGetListDocument, ProductsGetByCollectionSlugDocument } from "@/gql/graphql";
import { NavigationLink } from "@/ui/atoms/navigationLink";
import { ProductListItem } from "@/ui/molecules/productListItem";
import { Pagination } from "@/ui/organisms/Pagination";

interface MetadataProps {
	params: { collectionSlug: string };
}	

export async function generateMetadata({params:{collectionSlug}}: MetadataProps): Promise<Metadata> {
	return {
		title: `Collections: ${collectionSlug.slice(0, 1).toUpperCase()}${collectionSlug.slice(1)}`,
		description: "Page contains products grpuoped by collections",
	};	
}	

interface CategoryPageProps {
  params: { collectionSlug: string, pageNo: string };
}

export default async function CollectionsList({ params: { collectionSlug, pageNo } }:CategoryPageProps) {
	const page = pageNo ? Number(pageNo) : 1;

	const {products: allProducts} = await executeGraphql(ProductsGetByCollectionSlugDocument, {collectionSlug});

	const {collections} = await executeGraphql(CollectionsGetListDocument, {});

  const {products} = await executeGraphql(ProductsGetByCollectionSlugDocument, {
    first: 4,
    skip: (page - 1) * 4,
    collectionSlug,
  });

	if (!collections || !products) {
		notFound();
	}

	return (
		<>
			<section className="mx-auto p-12">
				{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				<h1 className="text-4xl font-semibold my-8">Collections: {collections.find(({slug}: any) => slug === collectionSlug)?.name}</h1>
				<ul className="flex mb-8 gap-2">
					{collections.map((collection) => (
						collection &&<li key={collection.id} className="block">
							<NavigationLink href={`/collections/${collection.slug}/1`}>{collection.name}</NavigationLink>
						</li>
					))}
				</ul>
				<ul data-testid="products-list" className="grid sm:grid-cols-2 gap-8 lg:grid-cols-4">
          {products.map((product) => (
            product ? <ProductListItem key={product.id} product={product} /> : null
          ))}
        </ul>
			</section>
			<footer>
				{allProducts && <Pagination withSegment itemsNumber={allProducts.length} path={`/collections/${collectionSlug}`} page={page} />}
			</footer>
		</>
	);
}
