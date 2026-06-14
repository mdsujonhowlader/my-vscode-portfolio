import { blogData } from "@/static/blog-data";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  const { id } = await params;
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    notFound();
  }

  const paragraphs = blog.content.split("\n\n");

  return (
    <article className="mt-[130px] px-4 pb-20 max-w-3xl mx-auto">
      <Image
        src={blog.image}
        alt={blog.title}
        className="w-full object-cover rounded-lg aspect-video"
        width={1000}
        height={800}
      />
      <h1 className="text-3xl font-bold text-[var(--color-accent)] mt-6">
        {blog.title}
      </h1>
      <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
      <div className="mt-6 space-y-4 text-[var(--color-text)] leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
