import { Eyebrow, btnLine, btnSolid } from "./ui";
import { EMAIL, GITHUB, LEETCODE, LINKEDIN, RESUME } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-8 pt-40">
      <div className="flex flex-col gap-8 border-b border-white/[0.08] pb-24">
        <Eyebrow>06 · Contact</Eyebrow>
        <h2 className="max-w-[820px] text-[clamp(36px,5vw,64px)] font-semibold leading-[1.06] tracking-[-0.04em]">
          Looking for software engineering and data science internships.
        </h2>
        <a href={`mailto:${EMAIL}`} className="self-start break-all border-b border-white/[0.16] pb-1 text-[22px] tracking-[-0.02em] text-[#888] transition-colors hover:text-[#EDEDED]">{EMAIL}</a>
        <div className="mt-1 flex flex-wrap gap-2.5">
          <a className={btnSolid} href={RESUME.swe} target="_blank" rel="noopener">Resume · Software Engineering ↓</a>
          <a className={btnLine} href={RESUME.ds} target="_blank" rel="noopener">Resume · Data Science ↓</a>
          <a className={btnLine} href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className={btnLine} href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className={btnLine} href={LEETCODE} target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
        </div>
      </div>
      <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 pb-12 pt-7 text-[13px] text-[#888]">
        <span>© 2026 Rishikanth S</span>
        <span className="font-mono text-xs">Madurai, Tamil Nadu, India</span>
      </footer>
    </section>
  );
}
