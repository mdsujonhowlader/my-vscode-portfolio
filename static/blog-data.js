export const blogData = [
  {
    id: 1,
    title: "How I Built a VSCode-Themed Portfolio with Next.js",
    description:
      "A walkthrough of building a developer portfolio that looks and feels like VSCode, using Next.js App Router and Tailwind CSS.",
    content: `When I first thought about building a personal portfolio, I wanted something that reflected who I am as a developer. Instead of the typical landing page, I decided to recreate the VSCode experience right in the browser.

The project uses Next.js 15 with the App Router, React 19, and Tailwind CSS v4. The sidebar, tabs, and status bar are all custom components styled to match VSCode's dark theme.

One of the most interesting challenges was the theme system. I created three themes — GitHub Dark, Ayo, and VS Code — each defined as CSS custom properties. A small inline script reads the saved theme from localStorage before React hydrates, preventing flash of unstyled content.

The syntax-highlighted code blocks on the home page are generated from JSON data, not a traditional syntax highlighter. This keeps the bundle size small while still looking authentic.

For the GitHub integration, I fetch profile and repository data directly from the GitHub API with Next.js server components and 1-hour revalidation. No auth token needed for public data.

The whole project took about two weeks of evening work. It taught me more about CSS, React Server Components, and Next.js App Router than any tutorial ever could.`,
    image: "/vscodetheme.png",
    date: "2025-10-10",
  },
  {
    id: 2,
    title: "Understanding React Server Components in Practice",
    description:
      "Real-world lessons from migrating a client-heavy app to React Server Components with Next.js App Router.",
    content: `React Server Components changed how I think about frontend architecture. After building several projects with the traditional client-side React approach, moving to server components felt like a paradigm shift.

The biggest realization was that not every component needs to be interactive. Most of my layout, data fetching, and static content can run on the server, reducing the JavaScript sent to the client.

In my portfolio project, the GitHub page is a server component that fetches profile data and repositories at request time. No useEffect, no loading states, no client-side waterfalls. The data is just there when the page renders.

The tricky part was knowing when to use "use client". I ended up with a clear rule: if a component uses useState, useEffect, or browser APIs, it needs the client directive. Everything else stays on the server.

Context providers like my ThemeContext still need to be client components, but I wrap them at the layout level so the rest of the tree can stay server-rendered.

Server Components also changed how I think about data fetching. Instead of coordinating multiple useEffect calls and managing loading states, I just await the data directly in the component. Next.js handles the streaming and loading boundaries.

The performance improvement was noticeable. My portfolio loads faster, has less JavaScript, and feels more responsive. The tradeoff is a mental model shift, but once it clicks, you won't want to go back.`,
    image: "/server-component.png",
    date: "2025-09-28",
  },
  {
    id: 3,
    title: "Tailwind CSS v4: What Changed and Why It Matters",
    description:
      "A deep dive into Tailwind CSS v4's new engine, CSS-first configuration, and how it simplifies the build process.",
    content: `Tailwind CSS v4 is a major rewrite. The biggest change? No more JavaScript config file. Configuration now happens in your CSS using @theme directives.

Instead of a tailwind.config.js, you define custom properties directly in your stylesheet:

\`\`\`css
@theme {
  --color-bg: #010d1c;
  --color-text: #c9d1d9;
  --color-accent: #ff204e;
}
\`\`\`

This means your theme tokens are standard CSS custom properties. You can use them anywhere — in Tailwind classes, in plain CSS, in inline styles. No more remembering whether to use bg-primary or bg-[var(--color-primary)].

The build engine is also faster. Tailwind v4 uses a new Rust-based compiler that processes your CSS in milliseconds. Development server restarts are nearly instant.

For PostCSS integration, the setup is minimal:

\`\`\`js
const config = {
  plugins: ["@tailwindcss/postcss"],
};
\`\`\`

No need for the old tailwindcss PostCSS plugin. The new @tailwindcss/postcss handles everything.

One thing that tripped me up was the font configuration. In v4, you set the font family through @theme inline:

\`\`\`css
@theme inline {
  --font-sans: var(--font-fira-code-sans);
}
\`\`\`

This bridges Next.js font optimization with Tailwind's font utilities.

Overall, Tailwind v4 feels like the framework matured. Less config, faster builds, and CSS-native theming make it a clear upgrade.`,
    image: "/tailwindcss.png",
    date: "2025-09-15",
  },
  {
    id: 4,
    title: "Building a Dark Mode System That Actually Works",
    description:
      "How I implemented a flash-free theme switcher using CSS custom properties, localStorage, and a tiny inline script.",
    content: `Dark mode is everywhere, but most implementations I've seen have a problem: the flash of unstyled content (FOUC) when the page loads. Here's how I solved it.

The core idea is simple. Before React even loads, a small inline script reads the saved theme from localStorage and applies it to the document. This runs synchronously in the <head>, so there's no flash.

\`\`\`javascript
(function() {
  const theme = localStorage.getItem('theme') || 'github';
  document.documentElement.setAttribute('data-theme', theme);
})()
\`\`\`

Each theme is defined as a set of CSS custom properties under a [data-theme] selector:

\`\`\`css
[data-theme="ayo"] {
  --color-bg: #22223b;
  --color-text: #f2e9e4;
  --color-accent: #c9ada7;
}
\`\`\`

The React ThemeContext then takes over after hydration. It reads the same localStorage value and provides a setTheme function to the rest of the app.

The key insight is the separation of concerns:
- The inline script handles the initial paint (no FOUC)
- CSS custom properties handle the actual styling
- React Context handles user interactions

Adding a new theme is just adding a new [data-theme] block in CSS and a new entry in the theme array. No JavaScript changes needed.

This pattern scales well too. I added a light theme variant in minutes, and it works identically because the CSS custom properties abstract away the color values entirely.`,
    image: "/darkmode.png",
    date: "2025-08-20",
  },
  {
    id: 5,
    title: "Fetching GitHub Data with Next.js Server Components",
    description:
      "A practical guide to integrating the GitHub API using server-side data fetching, revalidation, and error handling.",
    content: `Every developer portfolio needs a GitHub section. Here's how I built mine using Next.js server components and the GitHub API.

The setup is straightforward. I have two fetch functions — one for the profile and one for selected repositories:

\`\`\`javascript
export async function getGithubProfile(username) {
  const response = await fetch(\`https://api.github.com/users/\${username}\`, {
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }
  return response.json();
}
\`\`\`

The \`next: { revalidate: 3600 }\` option tells Next.js to cache the response for one hour. After that, the next request triggers a background revalidation. Users always get fast responses, and the data stays reasonably fresh.

For repositories, I fetch all public repos and filter to a curated list:

\`\`\`javascript
const repos = await repos.json();
return repos.filter((repo) => repoNames.includes(repo.name));
\`\`\`

This means I control which repos appear on my portfolio without maintaining a separate data file.

The GitHub API allows 60 requests per hour without authentication. For a portfolio site, this is usually enough. If you need more, you can add a personal access token via environment variables.

Error handling matters here. If the API is rate-limited or the username is wrong, the page should fail gracefully rather than showing a broken layout. I wrap the fetch calls in try/catch and show a fallback message.

The component side is clean because the data is already resolved by the time it renders. No loading spinners, no useEffect coordination — just props with data ready to go.`,
    image: "/githubrepo.png",
    date: "2025-08-05",
  },
  {
    id: 6,
    title: "Lessons from My First Year of Professional Development",
    description:
      "Reflections on what I learned building real projects, from code quality to debugging mindset.",
    content: `A year ago, I could write React components but struggled to build a complete application. Here's what changed.

The biggest lesson was that code quality matters more than clever solutions. Early on, I'd write complex one-liners to impress myself. Now I write code that my future self can understand without comments.

Testing was another revelation. I used to think tests were overhead. Then I spent three hours debugging a regression that a single unit test would have caught in seconds. Now I write tests first for critical logic.

Version control habits improved dramatically. I learned to write meaningful commit messages, keep commits atomic, and use branches for experimental work. Git blame became a learning tool, not a blame tool.

Debugging got faster too. Instead of randomly changing code hoping it works, I now follow a process: reproduce the issue, read the error message carefully, narrow down the scope, and fix the root cause. Console.log is a last resort, not a first approach.

Reading documentation became a habit. MDN, React docs, Next.js docs — they exist for a reason. Most "how do I" questions are already answered there, with better explanations than Stack Overflow.

The most unexpected lesson was that soft skills matter as much as technical ones. Explaining your code, asking good questions, and giving constructive feedback are skills that make you a better developer than any framework knowledge.

Year two starts now, and I'm excited about what's next.`,
    image: "/lessonmydev.png",
    date: "2025-07-15",
  },
];
