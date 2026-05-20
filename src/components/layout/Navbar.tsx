"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/Button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-bold tracking-wide text-white">
          {"<ARHAM />"}
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className="rounded-full bg-blue-600 px-5 hover:bg-blue-500">
          Resume
        </Button>
      </div>
    </header>
  );
}
