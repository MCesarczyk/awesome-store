import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import { CategoriesGetListDocument } from "@/gql/graphql";
import { NavigationLink } from "@/ui/atoms/navigationLink";

export default async function CategoriesList() {
	const {categories} = await executeGraphql(CategoriesGetListDocument, {});

	if (!categories) {
		notFound();
	}

	return (
		<section className="mx-auto p-12">
			<h1 className="text-4xl font-semibold my-8">Categories</h1>
			<ul>
				{categories.map((category) => (
					category &&<li key={category.id}>
						<NavigationLink href={`/categories/${category.slug}`}>{category.name}</NavigationLink>
					</li>
				))}
			</ul>
		</section>
	);
}
