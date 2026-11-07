import { STATS } from "@/lib/data";

export default function ProofStrip() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 pt-28" aria-label="Highlights">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08]">
        {STATS.map((s) => (
          <div key={s.l} className="flex flex-col gap-1.5 bg-[#0A0A0A] px-7 pb-[26px] pt-7">
            <div className="text-4xl font-semibold leading-none tracking-[-0.04em]">{s.v}</div>
            <div className="text-[13px] text-[#888]">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
