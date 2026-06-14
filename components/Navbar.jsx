import { menu } from "@/static/manus";
import { Ellipsis, Minus, SearchIcon, SquaresExclude, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)] border-b border-[var(--color-border)] text-white px-3 py-1.5 flex items-center justify-between shadow-lg">
      <div className="flex items-center space-x-3">
        <Link href="/" className="w-6 h-6 inline-block">
          <svg fill="none" viewBox="0 0 100 100">
            <g mask="url(#vscode__a)">
              <path
                fill="#0065A9"
                d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"
              />
              <path
                fill="#007ACC"
                d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"
              />
              <path
                fill="#1F9CF0"
                d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"
              />
            </g>
          </svg>
        </Link>

        <ul className="hidden md:flex items-center space-x-2">
          {menu.map((item) => (
            <li key={item.id}>
              <div className="text-sm font-medium hover:bg-slate-700 px-2 py-1 rounded-sm transition">
                {item.name}
              </div>
            </li>
          ))}
        </ul>

        <button className="hidden md:flex hover:bg-slate-700 p-1.5 rounded-sm transition">
          <Ellipsis size={16} />
        </button>
      </div>

      <div className="flex-1 flex justify-center px-4">
        <button className="w-full md:w-full lg:w-2/3 border  border-slate-700  px-3 py-1.5 rounded-md text-xs md:text-sm text-slate-400 flex items-center gap-2 hover:border-slate-500 hover:text-slate-200 transition">
          <SearchIcon size={16} />
          Sujon Howlader — Visual Studio Code
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-1">
        <button className="px-3 py-1 rounded-sm hover:bg-slate-700 transition">
          <Minus size={14} />
        </button>
        <button className="px-3 py-1 rounded-sm hover:bg-slate-700 transition">
          <SquaresExclude size={14} />
        </button>
        <button className="px-3 py-1 rounded-sm hover:bg-red-700 transition">
          <X size={14} />
        </button>
      </div>
    </header>
  );
}
