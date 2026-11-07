import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rishikanth S · Software Engineering & Data Science",
  description:
    "Portfolio of Rishikanth S, B.Tech AI & Data Science (2028). Full-stack and machine learning projects, open to internships.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: browser extensions (e.g. Bitdefender adds
    // bis_skin_checked) inject attributes before React hydrates. This only
    // silences that attribute mismatch on these two elements, not real bugs.
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-[#0A0A0A] font-sans text-[#EDEDED] antialiased">
        {children}
      </body>
    </html>
  );
}