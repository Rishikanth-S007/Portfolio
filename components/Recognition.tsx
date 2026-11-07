import LeetCodeStatsCard from "./LeetCodeStatsCard";
import { Dot, SectionHead } from "./ui";
import { COPPER, RECOGNITION } from "@/lib/data";

function Card({ tag, title, meta, className = "" }: { tag: string; title: string; meta: string; className?: string }) {
  return (
    <div
      className={`card flex min-h-[200px] flex-col gap-3.5 rounded-xl border border-white/[0.08] p-6 ${className}`}
      style={{ background: "radial-gradient(120% 90% at 0% 0%, rgba(217,150,106,0.10), transparent 60%), #111111" }}
    >
      <div className="hl" style={{ background: `linear-gradient(90deg, transparent, ${COPPER}, transparent)` }} />
      <div className="flex items-center gap-2">
        <Dot color={COPPER} />
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888]">{tag}</span>
      </div>
      <div className="text-[19px] font-medium leading-tight tracking-[-0.02em]">{title}</div>
      <div className="mt-auto text-sm leading-[1.55] text-[#888]">{meta}</div>
    </div>
  );
}

export default function Recognition() {
  const [infinity, prince, nptel] = RECOGNITION;
  return (
    <section id="recognition" className="mx-auto max-w-[1200px] px-8 pt-36">
      <SectionHead eyebrow="04 · Recognition" title="Hackathons and achievements" />
      <div className="grid gap-4 md:grid-cols-3 md:grid-rows-[auto_auto]">
        <LeetCodeStatsCard className="md:row-span-2" fallbackSolved="195+" />
        <Card {...infinity} className="md:col-span-1" />
        <Card {...prince} className="md:col-span-1" />
        <Card {...nptel} className="md:col-span-2" />
      </div>
      <p className="mt-4 text-[13px] text-[#888]">100 Days Badge 2026 · 110+ Medium and 20 Hard solved.</p>
    </section>
  );
}
