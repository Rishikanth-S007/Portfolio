import { SectionHead } from "./ui";
import { CERTS } from "@/lib/data";

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-[1200px] px-8 pt-36">
      <SectionHead eyebrow="05 · Certificates" title="Selected certifications" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-x-16 border-b border-white/[0.08]">
        {CERTS.map((c) => (
          <div key={c.name} className="row flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-white/[0.08] py-4">
            <div className="text-[15px] tracking-[-0.01em]">{c.name}</div>
            <div className="font-mono text-xs text-[#888]">{c.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
