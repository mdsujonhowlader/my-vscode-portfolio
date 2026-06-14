import Blog from "@/components/Blog";
import { blogData } from "@/static/blog-data";
export default function BlogPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-8 mt-[130px] w-full">
        <h1 className=" text-[var(--color-accent)] text-4xl font-bold tracking-tight ">
          My Blogs
        </h1>
        <p className="text-base text-pretty leading-relaxed text-slate-300 max-w-3xl text-center">
          Feel free to reach out to me through any of the social platforms
          below. I'm always open to new opportunities and connections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-20">
          {blogData.map((data) => (
            <Blog key={data.id} blog={data} />
          ))}
        </div>
      </div>
    </>
  );
}
