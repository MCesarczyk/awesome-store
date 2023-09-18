interface CategoryPageProps {
  params: { categorySlug: string };
}

export default async function CategoryPage({ params: { categorySlug } }:CategoryPageProps) {
  return (
    <section className="mx-auto p-12">
      <h1 className="text-4xl font-semibold my-8">Category {categorySlug}</h1>
    </section>
  )
}
