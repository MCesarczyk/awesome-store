import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import { CategoriesGetListDocument, ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { NavigationLink } from "@/ui/atoms/navigationLink";
import { Pagination } from "@/ui/organisms/Pagination";
import { ProductListItem } from "@/ui/molecules/productListItem";

interface CategoriesPageProps {
  params: { categorySlug: string, pageNo: string };
}

export default async function CategoriesList({params:{categorySlug, pageNo}}:CategoriesPageProps) {
	const page = pageNo ? Number(pageNo) : 1;
	
  const { products: allProducts} = await executeGraphql(ProductsGetByCategorySlugDocument, {categorySlug});
	
	const {categories} = await executeGraphql(CategoriesGetListDocument, {});

  const {products} = await executeGraphql(ProductsGetByCategorySlugDocument, {
    first: 4,
    skip: (page - 1) * 4,
    categorySlug,
  });

  if (!products || !categories) {
    notFound();
  }

	return (
		<>
			<section className="mx-auto p-12">
				{/* 	eslint-disable-next-line @typescript-eslint/no-explicit-any */}
				<h1 className="text-4xl font-semibold my-8">Category {categories.find(({slug}: any) => slug === categorySlug)?.name}</h1>
				<ul className="flex mb-8">
					{categories.map((category) => (
						category &&<li key={category.id} className="block">
							<NavigationLink href={`/categories/${category.slug}/1`}>{category.name}</NavigationLink>
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
        {allProducts && <Pagination withSegment itemsNumber={allProducts?.length} path={`/categories/${categorySlug}`} page={page} />}
      </footer>
		</>
	);
}
