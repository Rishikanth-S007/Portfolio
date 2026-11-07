# Rishikanth S · Portfolio

Next.js 15 (App Router) + Tailwind CSS v4 + TypeScript. Refined dark SaaS design, jewel-tone accents, live LeetCode card.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Deploy
Push to GitHub, import into Vercel. No config needed. Optional env var: `LEETCODE_USERNAME` (defaults to `Rishikanth_S`).

## Edit content
- `lib/data.ts`: projects, skills, journey, certificates, links, stats.
  - Add `repo` / `demo` URLs to a project to show real links (otherwise the card links to your GitHub profile and hides the demo button).
- `public/resume/`: SWE, DS and 2-page resumes. Replace files, keep names.
- `app/api/leetcode/route.ts`: server proxy, cached for 1 hour.
- `components/LeetCodeStatsCard.tsx`: loading skeleton, live stats, and error fallback (shows "195+" and a profile link).
