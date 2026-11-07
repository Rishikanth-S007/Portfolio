"use client";

// components/LeetCodeStatsCard.tsx
// Bento card showing live LeetCode stats. Loading shows a skeleton; failure shows a
// self-contained fallback so the rest of the portfolio is never affected.

import { useCallback, useEffect, useState } from "react";
import type { DifficultyCount, LeetCodeStats } from "@/lib/leetcode";

const PROFILE_URL = "https://leetcode.com/u/Rishikanth_S";
const GOLD = "#FFA116"; // LeetCode orange, used only as a micro-accent

type State =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; data: LeetCodeStats };

interface Props {
  className?: string;
  /** Optional static total shown in the fallback UI, for example "195+". */
  fallbackSolved?: string;
}

const nf = new Intl.NumberFormat("en-US");

export default function LeetCodeStatsCard({ className = "", fallbackSolved }: Props) {
  const [state, setState] = useState<State>({ status: "loading" });

  const load = useCallback(async (signal?: AbortSignal) => {
    setState({ status: "loading" });
    try {
      const res = await fetch("/api/leetcode", { signal });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = (await res.json()) as LeetCodeStats;
      setState({ status: "ready", data });
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") return;
      setState({ status: "error" });
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  return (
    <section
      aria-label="LeetCode statistics"
      aria-busy={state.status === "loading"}
      className={`group relative flex min-h-[340px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#111111] p-6 text-[#EDEDED] transition-colors hover:border-white/20 ${className}`}
    >
      {/* 1px gold hairline, visible on hover only */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
          boxShadow: `0 0 10px ${GOLD}66`,
        }}
      />

      <Header live={state.status === "ready"} />

      {state.status === "loading" && <Skeleton />}
      {state.status === "error" && (
        <Fallback fallbackSolved={fallbackSolved} onRetry={() => load()} />
      )}
      {state.status === "ready" && <Stats data={state.data} />}
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Header({ live }: { live: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background: live ? GOLD : "rgba(255,255,255,0.25)",
            boxShadow: live ? `0 0 0 3px ${GOLD}26` : "none",
          }}
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#888888]">
          LeetCode
        </span>
      </div>
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-[#888888] transition-colors hover:text-[#EDEDED] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/50"
      >
        @Rishikanth_S ↗
      </a>
    </div>
  );
}

function Stats({ data }: { data: LeetCodeStats }) {
  const updated = new Date(data.fetchedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="mt-8 flex items-end justify-between gap-6">
        <div>
          <div className="text-5xl font-semibold leading-none tracking-[-0.04em] tabular-nums">
            {nf.format(data.totalSolved)}
          </div>
          <div className="mt-2 text-sm text-[#888888]">Problems solved</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-medium tracking-[-0.02em] tabular-nums">
            {data.ranking ? `#${nf.format(data.ranking)}` : "—"}
          </div>
          <div className="mt-1 text-sm text-[#888888]">Global rank</div>
        </div>
      </div>

      <ul className="mt-8 space-y-5">
        <Row label="Easy" value={data.easy} />
        <Row label="Medium" value={data.medium} />
        <Row label="Hard" value={data.hard} />
      </ul>

      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#888888]">
        <span>Live from leetcode.com</span>
        <span className="font-mono tabular-nums">Updated {updated}</span>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: DifficultyCount }) {
  const pct = value.total > 0 ? Math.min(100, (value.solved / value.total) * 100) : 0;

  // Start at 0 and animate to the real width after mount.
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(pct));
    return () => cancelAnimationFrame(id);
  }, [pct]);

  return (
    <li>
      <div className="flex items-baseline justify-between text-sm">
        <span className="text-[#888888]">{label}</span>
        <span className="tabular-nums">
          {nf.format(value.solved)}
          <span className="text-[#888888]"> / {nf.format(value.total)}</span>
        </span>
      </div>
      <div
        role="progressbar"
        aria-label={`${label} problems solved`}
        aria-valuemin={0}
        aria-valuemax={value.total}
        aria-valuenow={value.solved}
        className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/10"
      >
        <div
          className="h-full rounded-full bg-[#EDEDED] transition-[width] duration-700 ease-out motion-reduce:transition-none"
          style={{ width: `${width}%` }}
        />
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */

function Skeleton() {
  const bar = "rounded bg-white/[0.06] motion-safe:animate-pulse";
  return (
    <div aria-hidden className="flex flex-1 flex-col">
      <div className="mt-8 flex items-end justify-between gap-6">
        <div>
          <div className={`h-12 w-28 ${bar}`} />
          <div className={`mt-3 h-3.5 w-24 ${bar}`} />
        </div>
        <div className="flex flex-col items-end">
          <div className={`h-6 w-20 ${bar}`} />
          <div className={`mt-2 h-3.5 w-16 ${bar}`} />
        </div>
      </div>
      <div className="mt-8 space-y-5">
        {[0, 1, 2].map((i) => (
          <div key={i}>
            <div className="flex justify-between">
              <div className={`h-3.5 w-14 ${bar}`} />
              <div className={`h-3.5 w-16 ${bar}`} />
            </div>
            <div className={`mt-2.5 h-[2px] w-full ${bar}`} />
          </div>
        ))}
      </div>
      <div className="mt-auto flex justify-between border-t border-white/10 pt-4">
        <div className={`h-3 w-32 ${bar}`} />
        <div className={`h-3 w-20 ${bar}`} />
      </div>
    </div>
  );
}

function Fallback({
  fallbackSolved,
  onRetry,
}: {
  fallbackSolved?: string;
  onRetry: () => void;
}) {
  return (
    <div role="status" className="flex flex-1 flex-col">
      <div className="mt-8">
        {fallbackSolved ? (
          <>
            <div className="text-5xl font-semibold leading-none tracking-[-0.04em]">
              {fallbackSolved}
            </div>
            <div className="mt-2 text-sm text-[#888888]">Problems solved</div>
          </>
        ) : (
          <div className="text-sm leading-relaxed text-[#888888]">
            Live stats are unavailable right now.
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-[#EDEDED] px-3.5 py-2 text-[13px] font-medium text-[#0A0A0A] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        >
          View profile ↗
        </a>
        <button
          type="button"
          onClick={onRetry}
          className="rounded-lg border border-white/10 px-3.5 py-2 text-[13px] font-medium text-[#EDEDED] transition-colors hover:border-white/20 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-white/60"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
