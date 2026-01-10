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
  "Server development",
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
      <div className="h-10" />
      <div className="flex flex-col items-center text-center">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          {LINES.map((line, i) => {
            const h1 = (i * 37) % 360;
            const h2 = (h1 + 120) % 360;
            const h3 = (h1 + 240) % 360;
            return (
              <h1
                key={line}
                className="
                  chromatic-line
                  whitespace-nowrap
                  font-semibold
                  tracking-tight
                  leading-[0.95]
                  text-[clamp(2.25rem,5.5vw,4.75rem)]
                "
                style={{
                  backgroundImage: `linear-gradient(90deg,
                    hsl(${h1} 100% 65%),
                    hsl(${h2} 100% 65%),
                    hsl(${h3} 100% 65%),
                    hsl(${h1} 100% 65%)
                  )`,
                  animationDuration: `${6 + (i % 5)}s`,
                  animationDelay: `${-0.35 * i}s`,
                }}
              >
                {line}
              </h1>
            );
          })}
        </div>
      </div>
      <div className="h-10" />
    </main>
  );
}

/////////// END OF FILE ///////////
