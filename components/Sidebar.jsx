"use client";
import { fileTreeData } from "@/static/fileTreeData";
import {
  ChevronsLeftRight,
  CircleUser,
  CopyMinus,
  Ellipsis,
  File,
  FilePlus,
  FolderPlus,
  GitBranch,
  RotateCcw,
  SearchIcon,
  Settings,
} from "lucide-react";
import Link from "next/link";
import MenuList from "./Menu/MenuList";

import { cn } from "@/utils/utils";
import { usePathname } from "next/navigation";
export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed top-11 left-0  text-white w-1/4 h-[calc(100vh-70px)] border-r border-[var(--color-border)] drop-shadow-lg">
      <div className="border-r border-r-[var(--color-border)] flex flex-col justify-between items-center py-4 w-12">
        <ul className="space-y-5 text-gray-500">
          <li className="cursor-pointer hover:text-blue-400">
            <File />
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <SearchIcon />
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <GitBranch />
          </li>
        </ul>

        <ul className="space-y-4 text-gray-500">
          <li
            className={cn(
              "cursor-pointer hover:text-blue-400",
              pathname === "/about" ? "text-blue-400" : ""
            )}
          >
            <Link href="/about">
              <CircleUser />
            </Link>
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-blue-400",
              pathname === "/settings" ? "text-blue-400" : ""
            )}
          >
            <Link href="/settings">
              <Settings />
            </Link>
          </li>
          <li className="cursor-pointer hover:text-blue-400">
            <ChevronsLeftRight />
          </li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800">
          <p className="text-sm font-semibold tracking-tight truncate">
            Explorer portfolio
          </p>
          <div className="flex items-center gap-2">
            <button className="hover:bg-zinc-700 p-1 rounded">
              <FilePlus size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <FolderPlus size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <RotateCcw size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <CopyMinus size={16} />
            </button>
            <button className="hover:bg-zinc-700 p-1 rounded">
              <Ellipsis size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-2 h-full">
          <MenuList fileTreeData={fileTreeData} />
        </div>
      </div>
    </aside>
  );
}
