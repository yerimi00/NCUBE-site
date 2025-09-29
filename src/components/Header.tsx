"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "#about", label: "학회소개" },
  { href: "#activities", label: "년도별 활동" },
  { href: "#contact", label: "문의/링크" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-extrabold tracking-tight text-xl">
          N-CUBE
          <span className="ml-2 text-sm badge">New · Next · Nexus</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/80 hover:text-white"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn">
          참여하기
        </a>
      </div>
    </header>
  );
}
