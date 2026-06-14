export default function AboutMe() {
  return (
    <article className="mt-[150px] mb-20">
      <div className="flex flex-col items-center justify-start">
        <h1 className="text-[var(--color-accent)] text-5xl font-bold text-center tracking-tight">
          Md.Sujon Howlader
        </h1>
        <p className="text-slate-400 text-lg mt-2 text-center">
          Software Engineer | Full Stack Developer | Tech Enthusiast
        </p>
      </div>
      <div className="mt-8 text-slate-300 max-w-3xl mx-auto px-4 space-y-4">
        <p className="leading-relaxed text-center md:text-left">
          Hey! I'm a software engineer from Dhaka, Bangladesh. I primarily work
          with JavaScript / TypeScript and the React ecosystem.
        </p>
        <p className="leading-relaxed text-center md:text-left">
          I'm focused on Backend development with Node js, but you'll also find
          me working with Frontend like React,Next.js, MongoDB, and Express while building the
          fullstack for my personal projects.
        </p>
      </div>

      {/* Experience */}
      <div className="mt-10 max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold text-[var(--color-accent)] mb-4 text-center md:text-left">
          Experience
        </h2>
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] p-6 rounded-xl shadow-md space-y-3">
          <h3 className="text-xl font-semibold text-[var(--color-accent)] ">
            Full Stack Developer — The Tech Resolver
          </h3>
          <p className="text-slate-100">
            Working with a lean team of 4 frontend engineers to build a next-gen
            Web applications.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Working with Ecommerce frontend</li>
            <li>Maintain in-house UI component </li>
            <li>Developed website and several core UI features.</li>
          </ul>
        </div>
      </div>
      {/* Education */}
      <div className="mt-10 max-w-3xl mx-auto px-4 space-y-6">
        <h2 className="text-3xl font-bold text-[var(--color-accent)] mb-4 text-center md:text-left">
          Education
        </h2>
        <div className="bg-[var(--color-card)] border border-[var(--color-border)] p-6 rounded-xl shadow-md space-y-3">
          <h3 className="text-xl font-semibold text-[var(--color-accent)]">
            Bachelor of Science in Computer Science
          </h3>
          <p className="text-slate-300">Uttara University, 2022-2026</p>
          <ul className="list-disc list-inside space-y-1 text-slate-300">
            <li>Specialized in Software Engineering and Web Development.</li>
            <li>
              Completed multiple projects using React, Node.js, and MongoDB.
            </li>
            <li>Member of the Coding Club </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
