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
        <header className="h-[10vh] shrink-0 border-b border-white">
          {/* intentionally empty for now */}
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="h-16 shrink-0 border-t border-white flex items-center justify-center text-xs">
          © {new Date().getFullYear()} Gistyr LLC
        </footer>
      </body>
    </html>
  );
}

/////////// END OF FILE ///////////