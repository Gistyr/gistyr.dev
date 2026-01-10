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

const LINES: string[] = [
  "Game development",
  "Web development",
  "Proprietary software",
  "Open source software",
  "Rust programming",
  "Typescript programming",
  "Sole proprietorship",
  "100% bootstrapped",
  "100% independent",
  "USA based",
];

export default function Home() {
  return (
    <main className="mx-[10%] min-h-[90vh]">
      {/* small buffer below header */}
      <div className="h-10" />

      {/* main content */}
      <div className="flex flex-col items-center text-center">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          {LINES.map((line) => (
            <h1
              key={line}
              className="
                whitespace-nowrap
                font-semibold
                tracking-tight
                leading-[0.95]
                text-[clamp(2.25rem,5.5vw,4.75rem)]
              "
            >
              {line}
            </h1>
          ))}
        </div>
      </div>
    </main>
  );
}

/////////// END OF FILE ///////////
