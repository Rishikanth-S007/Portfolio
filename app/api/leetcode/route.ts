// app/api/leetcode/route.ts
// Server-side proxy for LeetCode's GraphQL API (the browser cannot call it directly because of CORS).
// The username is fixed on the server so this endpoint cannot be used to look up arbitrary accounts.

import { NextResponse } from "next/server";
import type { LeetCodeStats } from "@/lib/leetcode";

const USERNAME = process.env.LEETCODE_USERNAME ?? "Rishikanth_S";
const REVALIDATE_SECONDS = 60 * 60; // refresh at most once an hour

// Cache this route's response for an hour (Next.js revalidates in the background).
export const revalidate = 3600; // must be a literal for Next.js

const QUERY = /* GraphQL */ `
  query userStats($username: String!) {
    matchedUser(username: $username) {
      username
      profile {
        ranking
      }
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

type Difficulty = "All" | "Easy" | "Medium" | "Hard";
type CountRow = { difficulty: Difficulty; count: number };

interface GraphQLResponse {
  data?: {
    matchedUser: {
      username: string;
      profile: { ranking: number | null };
      submitStatsGlobal: { acSubmissionNum: CountRow[] };
    } | null;
    allQuestionsCount: CountRow[];
  };
  errors?: unknown;
}

const pick = (rows: CountRow[] | undefined, difficulty: Difficulty): number =>
  rows?.find((row) => row.difficulty === difficulty)?.count ?? 0;

export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        // LeetCode rejects requests that have no user agent.
        "User-Agent": "Mozilla/5.0 (compatible; portfolio-stats/1.0)",
      },
      body: JSON.stringify({ query: QUERY, variables: { username: USERNAME } }),
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      throw new Error(`LeetCode responded with ${res.status}`);
    }

    const json = (await res.json()) as GraphQLResponse;
    const user = json.data?.matchedUser;
    if (!user) {
      throw new Error("LeetCode returned no user for this username");
    }

    const solved = user.submitStatsGlobal.acSubmissionNum;
    const totals = json.data?.allQuestionsCount;

    const payload: LeetCodeStats = {
      username: user.username,
      totalSolved: pick(solved, "All"),
      totalQuestions: pick(totals, "All"),
      ranking: user.profile.ranking || null,
      easy: { solved: pick(solved, "Easy"), total: pick(totals, "Easy") },
      medium: { solved: pick(solved, "Medium"), total: pick(totals, "Medium") },
      hard: { solved: pick(solved, "Hard"), total: pick(totals, "Hard") },
      fetchedAt: new Date().toISOString(),
    };

    return NextResponse.json(payload, {
      headers: {
        // CDN caches for an hour and may serve a stale copy for a day while refreshing.
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("[api/leetcode]", error);
    return NextResponse.json(
      { error: "LEETCODE_UNAVAILABLE" },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
