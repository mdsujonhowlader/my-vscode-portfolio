"use client";
import { fileTreeData } from "@/static/fileTreeData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { icons } from "./icons/icon";
export default function PageName() {
  const pathname = usePathname();

  const getLastChildren = (nodes) => {
    let result = [];
    for (let node of nodes) {
      if (node.children && node.children.length > 0) {
        result = result.concat(getLastChildren(node.children));
      } else {
        result.push(node);
      }
    }
    return result;
  };

  const lastChildren = getLastChildren(fileTreeData);
  const firstThree = lastChildren.slice(0, 6);

  return (
    <div className="fixed top-10 md:top-11 left-0 md:left-[25%] w-full md:w-3/4 z-30 flex gap-5 md:gap-0 overflow-x-auto bg-[var(--color-bg)]  px-3 py-0.5 text-white border-b border-[var(--color-border)]">
      {firstThree.map((child) => {
        const isActive = pathname === child.to;
        const IconComponent = icons[child.icon];
        return (
          <Link
            href={child.to}
            key={child.id}
            className={`cursor-pointer px-3 py-2 inline-flex gap-1 tracking-tight items-center  text-sm transition-all duration-100 ${
              isActive ? "border-t-1 border-t-[var(--color-accent)]" : ""
            }`}
          >
            {IconComponent && <IconComponent />}
            {child.name}
          </Link>
        );
      })}
    </div>
  );
}
