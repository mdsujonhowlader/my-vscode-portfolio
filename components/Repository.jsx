import { Eye, GitFork, Github, Star } from "lucide-react";
import Link from "next/link";

export default function Repository({ selectedRepo }) {
  return (
    <>
      <div className=" border border-zinc-500 rounded-md p-6 text-white space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-[var(--color-accent)]">{selectedRepo.name}</h2>
          <p className="text-[var(--color-accent)]">{selectedRepo.language}</p>
        </div>
        <p className="text-slate-200 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          beatae distinctio amet inventore ullam.
        </p>
        <div className="border-t border-t-zinc-500 flex justify-between items-center mx-4 px-1 mt-5">
          <div className="flex items-center gap-6 mt-2 ">
            <span className="inline-flex items-center gap-2 text-white">
              <Star className="size-4 stroke-[var(--color-accent)]" />
              {selectedRepo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-2 text-white">
              <GitFork className="size-4 stroke-[var(--color-accent)]" />{" "}
              {selectedRepo.forks_count}
            </span>
            <span className="inline-flex items-center gap-2 text-white">
              <Eye className="size-4 stroke-[var(--color-accent)]" />{" "}
              {selectedRepo.watchers}
            </span>
          </div>
          <Link
            className="mt-2 text-[var(--color-accent)] size-4"
            href={`https://github.com/mdsujonhowlader/${selectedRepo.name}`}
            target="_blank"
          >
            <Github />
          </Link>
        </div>
      </div>
    </>
  );
}
