"use client";
import { useRole } from "./RoleContext";
import { Chip, Dot, btnLine, btnSolid, textLink } from "./ui";
import { GITHUB, HERO, LEETCODE, LINKEDIN, ORDER, PROJECTS, RESUME, TONES } from "@/lib/data";
import type { Role } from "@/lib/data";

const OFFSETS = [0, 28, 10];

export default function Hero() {
  const { role, setRole } = useRole();
  const h = HERO[role];
  const featured = ORDER[role].slice(0, 3).map((k) => PROJECTS[k]);
  const opts: [Role, string][] = [["swe", "Software Engineering"], ["ds", "Data Science & ML"]];

  return (
    <section id="top" className="mx-auto max-w-[1200px] px-8 pt-32">
      <div className="flex flex-wrap items-start gap-x-20 gap-y-[72px]">
        <div className="flex flex-[1_1_560px] flex-col gap-7">
          <div className="flex items-center gap-2.5 self-start rounded-full border border-white/[0.08] px-3.5 py-1.5 text-[13px] text-[#888]">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#46C49B] shadow-[0_0_0_3px_rgba(70,196,155,0.16)]" />
            Open to software engineering and data science internships
          </div>
          <h1 className="text-[clamp(52px,7.2vw,96px)] font-semibold leading-[1.02] tracking-[-0.045em]">Rishikanth S</h1>
          <p className="max-w-[560px] text-[21px] leading-[1.55] tracking-[-0.01em] text-[#888]">{h.tagline}</p>

          <div role="group" aria-label="Choose a focus" className="flex self-start rounded-[10px] border border-white/[0.08] p-[3px]">
            {opts.map(([k, label]) => (
              <button
                key={k}
                type="button"
                aria-pressed={role === k}
                onClick={() => setRole(k)}
                className={`cursor-pointer rounded-[7px] px-4 py-2 text-[13px] font-medium transition-colors ${role === k ? "bg-white/[0.08] text-[#EDEDED]" : "text-[#888] hover:text-[#EDEDED]"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {h.chips.map((c) => <Chip key={c} tone="ne">{c}</Chip>)}
          </div>

          <div className="mt-1 flex flex-wrap gap-2.5">
            <a href="#projects" className={btnSolid}>View projects</a>
            <a href={RESUME[role]} target="_blank" rel="noopener" className={btnLine}>{h.resumeLabel} ↓</a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={btnLine}>GitHub ↗</a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#888]">
            <a className={textLink} href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className={textLink} href={LEETCODE} target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
            <span className="font-mono text-xs">Madurai, India · B.Tech AI &amp; Data Science · Batch 2028</span>
          </div>
        </div>

        <div className="flex flex-[1_1_380px] flex-col gap-3.5 pt-2">
          {featured.map((p, i) => {
            const t = TONES[p.tone];
            return (
              <a
                key={p.id}
                href="#projects"
                className="card block rounded-xl border border-white/[0.08] p-[22px]"
                style={{ background: `radial-gradient(120% 90% at 0% 0%, ${t.glow}, transparent 60%), #111111`, marginLeft: OFFSETS[i] }}
              >
                <div className="hl" style={{ background: `linear-gradient(90deg, transparent, ${t.hex}, transparent)` }} />
                <div className="mb-3 flex items-center gap-2">
                  <Dot color={t.hex} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888]">{p.cat}</span>
                </div>
                <div className="mb-1.5 text-lg font-medium tracking-[-0.02em]">{p.title}</div>
                <div className="text-sm leading-[1.55] text-[#888]">{p.short}</div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
