import Image from "next/image";
import Link from "next/link";

export default function Blog({ blog }) {
  const wordCount = blog.description.split(" ").length;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className="bg-[var(--color-bg)] border border-zinc-700 text-white rounded-lg overflow-hidden shadow-md ">
      <div className="w-full ">
        <Image
          src={blog.image}
          alt={blog.title}
          className="object-cover rounded-t-lg aspect-video"
          width={1000}
          height={800}
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <Link
          href={`/blogs/${blog.id}`}
          className="text-xl font-semibold text-[var(--color-accent)] line-clamp-1 hover:underline underline-offset-2 transition-all duration-300"
        >
          {blog.title}
        </Link>
        <p className="text-gray-300 line-clamp-2">{blog.description}</p>
        <p className="text-gray-500 text-sm mt-1">{readingTime} min read</p>
      </div>
    </div>
  );
}
