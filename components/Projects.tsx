"use client";
import { useEffect, useRef, useState } from "react";
import { useRole } from "./RoleContext";
import { Chip, Dot, SectionHead, textLink } from "./ui";
import { GITHUB, ORDER, PROJECTS, TONES } from "@/lib/data";

export default function Projects() {
  const { role } = useRole();
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(0);
  const items = ORDER[role].map((k) => PROJECTS[k]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const upd = () => {
      const max = el.scrollWidth - el.clientWidth;
      setPct(max > 0 ? el.scrollLeft / max : 0);
    };
    upd();
    el.addEventListener("scroll", upd, { passive: true });
    window.addEventListener("resize", upd);
    return () => { el.removeEventListener("scroll", upd); window.removeEventListener("resize", upd); };
  }, []);

  useEffect(() => { ref.current?.scrollTo({ left: 0 }); }, [role]);

  return (
    <section id="projects" className="pt-36">
      <div className="mx-auto max-w-[1200px] px-8">
        <SectionHead eyebrow="01 · Projects" title="Selected work" aside="Six projects across full-stack, machine learning and 3D. Ordered for the role selected above." />
      </div>
      <div
        ref={ref}
        className="track flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pt-1"
        style={{ paddingInline: "max(32px, calc((100% - 1200px) / 2 + 32px))" }}
        tabIndex={0}
        aria-label="Projects, scroll horizontally"
      >
        {items.map((p, i) => {
          const t = TONES[p.tone];
          return (
            <article
              key={p.id}
              className="card flex min-h-[420px] w-[min(400px,calc(100vw-64px))] flex-none snap-start flex-col gap-5 rounded-xl border border-white/[0.08] p-7"
              style={{ background: `radial-gradient(120% 70% at 0% 0%, ${t.glow}, transparent 60%), #111111` }}
            >
              <div className="hl" style={{ background: `linear-gradient(90deg, transparent, ${t.hex}, transparent)` }} />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Dot color={t.hex} />
                  <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888]">{p.cat}</span>
                </div>
                <span className="font-mono text-xs text-[#888]">0{i + 1} / 06</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-2xl font-semibold leading-[1.15] tracking-[-0.03em]">{p.title}</h3>
                <div className="text-[13px] text-[#888]">{p.kind}</div>
              </div>
              <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-[#888]">
                <p>{p.d1}</p>
                <p>{p.d2}</p>
              </div>
              <div className="mt-auto flex flex-col gap-5">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => <Chip key={s} tone={p.tone} size="sm">{s}</Chip>)}
                </div>
                <div className="flex gap-5 text-sm font-medium">
                  <a className={textLink} href={p.repo ?? GITHUB} target="_blank" rel="noopener noreferrer">
                    {p.repo ? "Repository ↗" : "GitHub ↗"}
                  </a>
                  {p.demo && <a className={textLink} href={p.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mx-auto mt-5 max-w-[1200px] px-8" aria-hidden>
        <div className="h-px bg-white/[0.08]">
          <div className="h-px bg-[#EDEDED] transition-[width] duration-100" style={{ width: `${Math.max(pct * 100, 100 / 6)}%` }} />
        </div>
      </div>
    </section>
  );
}
