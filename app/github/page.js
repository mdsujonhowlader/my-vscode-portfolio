import Github from "@/components/Github";
import Repository from "@/components/Repository";
import { getGithubProfile, getSelectedRepos } from "@/queries/query";

export default async function GithubPage() {
  const profile = await getGithubProfile("mdsujonhowlader");

  const selected = await getSelectedRepos("mdsujonhowlader", [
    "the-commerce",
    "bideshgami",
    "ttr-next",
  ]);
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-8 mt-[130px] w-full">
        <h1 className=" text-[var(--color-accent)] text-4xl font-bold tracking-tight ">
          My Github
        </h1>
        <p className="text-base text-pretty leading-relaxed text-slate-300 max-w-3xl text-center">
          Feel free to reach out to me through any of the social platforms
          below. I'm always open to new opportunities and connections.
        </p>
        <div className="mb-10 w-full md:w-3/4">
          <Github profile={profile} />
        </div>
        <h1 className="text-2xl tracking-tight text-[var(--color-accent)] ">
          Public Repository
        </h1>
        <div className="mb-20 w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2">
          {selected.map((selectedRepo) => (
            <Repository key={selectedRepo.id} selectedRepo={selectedRepo} />
          ))}
        </div>
      </div>
    </>
  );
}
