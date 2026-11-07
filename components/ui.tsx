import type { ReactNode } from "react";

export const mono = "font-mono";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="font-mono text-xs uppercase tracking-[0.08em] text-[#888]">{children}</div>;
}

export function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: string }) {
  return (
    <div className="mb-10 flex flex-wrap items-end justify-between gap-x-12 gap-y-4">
      <div className="flex flex-col gap-3">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-4xl font-semibold leading-[1.1] tracking-[-0.035em]">{title}</h2>
      </div>
      {aside && <p className="max-w-[420px] text-[15px] leading-relaxed text-[#888]">{aside}</p>}
    </div>
  );
}

export function Dot({ color, className = "" }: { color: string; className?: string }) {
  return <span aria-hidden className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${className}`} style={{ background: color }} />;
}

export function Chip({ tone, children, size = "md" }: { tone: string; children: ReactNode; size?: "sm" | "md" }) {
  return (
    <span className={`chip ${tone} rounded-md border border-white/10 font-mono text-xs text-[#888] ${size === "sm" ? "px-[9px] py-1" : "px-2.5 py-[5px]"}`}>
      {children}
    </span>
  );
}

export const btnSolid = "rounded-lg bg-[#EDEDED] px-[18px] py-[11px] text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-white";
export const btnLine = "rounded-lg border border-white/[0.12] px-[18px] py-2.5 text-sm font-medium transition-colors hover:border-white/25 hover:bg-white/[0.04]";
export const textLink = "transition-colors hover:text-[#EDEDED]";
