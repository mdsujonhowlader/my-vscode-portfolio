export default async function BlogPage({ params }) {
  const { id } = await params;

  return (
    <div className="mt-[130px] p-4">
      <h1 className="text-2xl text-[var(--color-accent)]">Blog {id}</h1>
    </div>
  );
}
