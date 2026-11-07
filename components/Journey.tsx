import { Dot, SectionHead } from "./ui";
import { JOURNEY } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-[1200px] px-8 pt-36">
      <SectionHead eyebrow="03 · Journey" title="Education and experience" />
      <div className="flex flex-col border-b border-white/[0.08]">
        {JOURNEY.map((j) => (
          <div key={j.when} className="row -mx-3 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/[0.08] px-3 py-7">
            <div className="flex flex-[0_0_180px] items-center gap-2.5 font-mono text-[13px] text-[#888]">
              <Dot color={j.hex} />{j.when}
            </div>
            <div className="flex flex-[1_1_320px] flex-col gap-1">
              <div className="text-lg font-medium tracking-[-0.02em]">{j.title}</div>
              <div className="text-sm text-[#888]">{j.org}</div>
            </div>
            <div className="flex-[0_0_180px] font-mono text-[13px] text-[#888]">{j.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
