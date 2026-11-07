"use client";
import { useRole } from "./RoleContext";
import { RESUME } from "@/lib/data";

const links = ["Projects", "Skills", "Journey", "Recognition", "Certificates", "Contact"];

export default function Nav() {
  const { role } = useRole();
  return (
    <header className="sticky top-0 z-10 border-b border-white/[0.08] bg-[rgba(10,10,10,0.82)] backdrop-blur-[14px]">
      <div className="mx-auto flex min-h-[60px] max-w-[1200px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-8">
        <a href="#top" className="text-sm font-medium tracking-[-0.01em]">Rishikanth S</a>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-[#888]">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="transition-colors hover:text-[#EDEDED]">{l}</a>
          ))}
          <a href={RESUME[role]} target="_blank" rel="noopener" className="rounded-lg bg-[#EDEDED] px-3.5 py-[7px] text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-white">Resume</a>
        </nav>
      </div>
    </header>
  );
}
