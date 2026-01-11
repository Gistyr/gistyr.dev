////////// START OF FILE //////////
/**
 * gistyr.dev
 *
 * Copyright (c) 2026 Gistyr LLC
 *
 * Licensed under the PolyForm Internal Use License 1.0.0
 * See LICENSES/LICENSE-POLYFORM-INTERNAL-USE.md or
 * https://polyformproject.org/licenses/internal-use/1.0.0/
 *
 * Required Notice: Copyright Gistyr LLC (https://gistyr.dev)
 *
 * For full license texts, see:
 * LICENSES/
*/
// ---------------------------------------- //

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "github-markdown-css/github-markdown.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gistyr",
  description: "Official website of Gistyr LLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <header className="h-[10vh] shrink-0 border-b border-white flex items-center px-6">
          <div className="mx-[10%] flex w-full justify-between items-center">
            <Link
              href="/"
              aria-label="Go to homepage"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
            >
              <span
                className="
                  chromatic-line
                  text-2xl
                  lg:text-3xl
                  font-bold
                  tracking-tight
                  inline-block
                  cursor-pointer
                  select-none
                "
                style={{
                  backgroundImage: `linear-gradient(90deg,
                    hsl(210 100% 65%),
                    hsl(290 100% 65%),
                    hsl(20 100% 65%),
                    hsl(210 100% 65%)
                  )`,
                  animationDuration: "8s",
                }}
              >
                GISTYR
              </span>
            </Link>
          </div>
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="h-16 shrink-0 border-t border-white flex items-center justify-center text-md">
          <div className="flex gap-6 items-center">
            <span>© {new Date().getFullYear()} Gistyr LLC</span>

            <Link
              href="/contact"
              className="hover:text-zinc-400 transition-colors underline underline-offset-4"
            >
              Contact
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

/////////// END OF FILE ///////////