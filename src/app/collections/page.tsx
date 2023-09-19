import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import { CollectionsGetListDocument } from "@/gql/graphql";
import { NavigationLink } from "@/ui/atoms/navigationLink";

export default async function CollectionsList() {
	const {collections} = await executeGraphql(CollectionsGetListDocument, {});

	if (!collections) {
		notFound();
	}

	return (
		<section className="mx-auto p-12">
			<h1 className="text-4xl font-semibold my-8">Collections</h1>
			<ul>
				{collections.map((collection) => (
					collection &&<li key={collection.id}>
						<NavigationLink href={`/collections/${collection.slug}`}>{collection.name}</NavigationLink>
					</li>
				))}
			</ul>
		</section>
	);
}
