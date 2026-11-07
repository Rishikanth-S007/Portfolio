import { Chip, Dot, Eyebrow } from "./ui";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-8 pt-36">
      <div className="flex flex-wrap items-start gap-x-20 gap-y-12">
        <div className="flex flex-[0_1_320px] flex-col gap-3 md:sticky md:top-[100px]">
          <Eyebrow>02 · Skills</Eyebrow>
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.035em]">What I build with</h2>
          <p className="mt-2 text-[15px] leading-relaxed text-[#888]">Grouped by the kind of work they support. The dot next to each group matches the project categories above.</p>
        </div>
        <div className="flex flex-[1_1_560px] flex-col">
          {SKILLS.map((g) => (
            <div key={g.label} className="flex flex-wrap gap-x-8 gap-y-3.5 border-t border-white/[0.08] py-6">
              <div className="flex flex-[0_0_200px] items-start gap-2.5 text-sm font-medium tracking-[-0.01em]">
                <Dot color={g.hex} className="mt-[7px]" />{g.label}
              </div>
              <div className="flex flex-[1_1_300px] flex-wrap gap-2">
                {g.chips.map((c) => <Chip key={c} tone={g.cls}>{c}</Chip>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
