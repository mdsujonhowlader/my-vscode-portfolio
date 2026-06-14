"use client";
import { useEffect, useRef, useState } from "react";

const codeLines = [
  { code: "const HomePage = () => {", color: "pink" },
  { code: "  const [isLoaded, setIsLoaded] = useState(true);", color: "cyan" },
  { code: "  const developerInfo = {", color: "cyan" },
  { code: "    name: 'Md.Sujon Howlader',", color: "yellow" },
  { code: "    role: 'Full Stack Developer',", color: "yellow" },
  { code: "    bio: 'Building modern web experiences'", color: "yellow" },
  { code: "  };", color: "cyan" },
  { code: "", color: "black" },
  { code: "  useEffect(() => {", color: "cyan" },
  {
    code: "    document.title = `${developerInfo.name} | Portfolio`;",
    color: "orange",
  },
  { code: "    setIsLoaded(true);", color: "green" },
  { code: "  }, []);", color: "gray" },
  { code: "", color: "black" },
  { code: "  return (", color: "pink" },
  { code: '    <main className="hero-container">', color: "orange" },
  { code: "      <h1>{developerInfo.name}</h1>", color: "green" },
  { code: "      <p>{developerInfo.role}</p>", color: "orange" },
  { code: '      <div className="cta">', color: "green" },
  {
    code: '        <Link href="/projects">View Projects</Link>',
    color: "orange",
  },
  { code: "      </div>", color: "green" },
  { code: "    </main>", color: "orange" },
  { code: "  );", color: "pink" },
  { code: "};", color: "pink" },
  { code: "", color: "black" },
  { code: "export default HomePage;", color: "pink" },
];

const CodeTextColorStyle = {
  pink: "text-pink-400",
  cyan: "text-cyan-400",
  yellow: "text-yellow-400",
  green: "text-emerald-400",
  orange: "text-orange-400",
  gray: "text-gray-500",
  black: "text-gray-900",
};

export default function HomeSection() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const lineRef=useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) =>
        prev + 1 < codeLines.length ? prev + 1 : 0
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
      lineRef.current[activeLineIndex]?.scrollIntoView({
        behavior:"smooth",
        block:"nearest"
      })
  },[activeLineIndex])

  return (
    <div className="p-2 border border-slate-800 rounded-2xl shadow-lg  ">
      <pre className="relative h-[300px] overflow-y-auto text-sm rounded-xl shadow-sm font-mono p-3">
        {codeLines.map((line, index) => (
          <div
            key={index}
            ref={(el)=>{
              lineRef.current[index]=el
            }}
            className={`flex ${
              index === activeLineIndex ? "bg-slate-700/20 rounded-sm " : ""
            }`}
          >
            <span className="w-10 text-right mr-3 text-gray-500 select-none">
              {index + 1}
            </span>

            <span
              className={`whitespace-pre ${CodeTextColorStyle[line.color]}`}
            >
              {line.code}
            </span>
          </div>
        ))}
      </pre>
    </div>
  );
}
