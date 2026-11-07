// lib/leetcode.ts
// Shared shape returned by /api/leetcode and consumed by <LeetCodeStatsCard />.

export interface DifficultyCount {
  solved: number;
  total: number;
}

export interface LeetCodeStats {
  username: string;
  totalSolved: number;
  totalQuestions: number;
  /** Global ranking, or null if LeetCode has not ranked the account yet. */
  ranking: number | null;
  easy: DifficultyCount;
  medium: DifficultyCount;
  hard: DifficultyCount;
  /** ISO timestamp of when the server fetched this from LeetCode. */
  fetchedAt: string;
}
