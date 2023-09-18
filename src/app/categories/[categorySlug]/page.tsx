import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/executeGraphql";
import { ProductsGetByCategorySlugDocument } from "@/gql/graphql";
import { ProductListItem } from "@/ui/molecules";

interface CategoryPageProps {
  params: { categorySlug: string };
}

export default async function CategoryPage({ params: { categorySlug } }:CategoryPageProps) {
  const {products} = await executeGraphql(ProductsGetByCategorySlugDocument, {
    first: 4,
    categorySlug,
  });

  if (!products) {
    notFound();
  }

  return (
    <section className="mx-auto p-12">
      <h1 className="text-4xl font-semibold my-8">Category {categorySlug}</h1>
      <ul data-testid="products-list" className="grid sm:grid-cols-2 gap-8 lg:grid-cols-4">
        {products.map((product) => (
          product ? <ProductListItem key={product.id} product={product} /> : null
        ))}
      </ul>
    </section>
  )
}
