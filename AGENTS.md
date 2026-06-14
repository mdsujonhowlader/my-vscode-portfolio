# AGENTS.md

## Project

VSCode-themed portfolio built with **Next.js 15 App Router**, **React 19**, **Tailwind CSS v4**. No TypeScript — pure JS with `jsconfig.json`.

## Commands

```bash
npm run dev     # Start dev server on localhost:3000
npm run build   # Production build
npm run start   # Start production server
```

No lint, typecheck, or test scripts are configured. There is no test suite.

## Architecture

- **App Router**: all pages live under `app/` (about, blogs, contact, github, projects, settings).
- **Components**: `components/` holds all UI components. Layout wraps every page with Navbar, Sidebar, PageName, Footer.
- **Theme system**: `context/ThemeContext.jsx` provides `theme`/`setTheme`. Themes are applied via `data-theme` attribute on `<html>`. CSS variables defined in `app/globals.css` per theme (`[data-theme="ayo"]`, `[data-theme="vscode"]`, default = github).
- **GitHub data**: `queries/query.js` fetches from GitHub API with 1hr revalidation. No auth token — rate-limited.
- **Utility**: `utils/utils.js` exports `cn()` (clsx + tailwind-merge). Use this for conditional class merging.
- **Static data**: `temporary/` contains mock data files (file tree, blog data, menu items). These are hardcoded, not fetched.

## Conventions

- Use `"use client"` directive for components that use React hooks or browser APIs.
- Import alias: `@/*` maps to project root (configured in `jsconfig.json`).
- Icons from `lucide-react`.
- Theme colors are CSS variables — use `var(--color-bg)`, `var(--color-text)`, `var(--color-accent)`, etc. Do not hardcode color values for themed elements.
- Font: Fira Code (set as CSS variable `--font-fira-code-sans`).

## Gotchas

- The `temporary/` directory name is unusual — it holds static content data, not temporary files.
- No `.env` files committed. GitHub API calls are unauthenticated (60 req/hr limit).
- README project structure section is outdated (references `pages/`, `styles/`, `syntax/` which don't exist).
