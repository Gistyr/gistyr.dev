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

const LINES = [
  {
    title: "Game development",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-lg lg:text-xl">Gistyr is developing an online, multiplayer, skill-based board game.</p>
        <p className="text-lg lg:text-xl">The open beta will be released on the web in November 2026.</p>
      </>
    ),
  },
  {
    title: "Web development",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-lg lg:text-xl">Gistyr is developing an online, multiplayer, skill-based board game.</p>
        <p className="text-lg lg:text-xl">The open beta will be released on the web in November 2026.</p>
      </>
    ),
  },
  {
    title: "Server development",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-lg lg:text-xl">Gistyr's primary product will be powered by proprietary, multiplayer server infrastructure.</p>
        <p className="text-lg lg:text-xl">The open beta will be released on the web in November 2026.</p>
        <div className="h-5" />
        <p className="text-lg lg:text-xl">One of Gistyr's open source software, <span className="font-medium">GOBSG</span>, is a secure OpenID Connect Backend-for-Frontend (BFF) gateway.</p>
        <p className="text-lg lg:text-xl">It provides cookie-based session management for web clients and is written in Rust.</p>
        <a
          href="https://gistyr.dev/gobsg"
          className="
            inline-block
            text-md lg:text-lg
            text-blue-400
            hover:text-blue-300
            underline
            underline-offset-4
            transition-colors
          "
        >
          Click here for more details →
        </a>
      </>
    ),
  },
  {
    title: "Proprietary software",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-lg lg:text-xl">Gistyr is developing an online, multiplayer, skill-based board game.</p>
        <p className="text-lg lg:text-xl">The open beta will be released on the web in November 2026.</p>
      </>
    ),
  },
  {
    title: "Open source software",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-xl lg:text-2xl"><span className="font-medium">GOBSG</span></p>
        <p className="text-lg lg:text-xl">A secure OIDC Backend-for-Frontend gateway providing cookie-based session management for web clients.</p>
        <a
          href="https://gistyr.dev/gobsg"
          className="
            inline-block
            text-md lg:text-lg
            text-blue-400
            hover:text-blue-300
            underline
            underline-offset-4
            transition-colors
          "
        >
          Click here for more details →
        </a>
        <div className="h-5" />
        <p className="text-xl lg:text-2xl"><span className="font-medium">better-logger</span></p>
        <p className="text-lg lg:text-xl">Flexible sync/async Rust logger with console, file, and http output.</p>
        <a
          href="https://gistyr.dev/betterlogger"
          className="
            inline-block
            text-md lg:text-lg
            text-blue-400
            hover:text-blue-300
            underline
            underline-offset-4
            transition-colors
          "
        >
          Click here for more details →
        </a>
        <div className="h-5" />
        <a
          href="https://github.com/Gistyr"
          className="
            inline-block
            text-xl lg:text-2xl
            text-blue-400
            hover:text-blue-300
            underline
            underline-offset-4
            transition-colors
          "
        >
          Click here for Gistyr GitHub →
        </a>
        <div className="h-1" />
        <a
          href="https://crates.io/users/Lozlof"
          className="
            inline-block
            text-xl lg:text-2xl
            text-blue-400
            hover:text-blue-300
            underline
            underline-offset-4
            transition-colors
          "
        >
          Click here for crates.io →
        </a>
        <div className="h-1" />
        <a
          href="https://github.com/Lozlof"
          className="
            inline-block
            text-xl lg:text-2xl
            text-blue-400
            hover:text-blue-300
            underline
            underline-offset-4
            transition-colors
          "
        >
          Click here for personal GitHub →
        </a>
      </>
    ),
  },
  {
    title: "Rust programming",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-lg lg:text-xl">All of Gistyr's open source software are written in Rust.</p>
        <p className="text-lg lg:text-xl">The majority of Gistyr's proprietary software is written in Rust.</p>
      </>
    ),
  },
  {
    title: "TypeScript programming",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p className="text-lg lg:text-xl">Portions of Gistyr's proprietary software are written in TypeScript.</p>
      </>
    ),
  },
  {
    title: "Sole proprietorship",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p>Gistyr is a sole proprietorship LLC formed in the state of Virginia.</p>
      </>
    ),
  },
  {
    title: "100% bootstrapped",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p>Gistyr is owned and funded by one person.</p>
      </>
    ),
  },
  {
    title: "100% independent",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p>Gistyr is owned and funded by one person.</p>
      </>
    ),
  },
  {
    title: "USA based",
    panelClassName: "bg-black/20",
    contentClassName: "space-y-2",
    content: (
      <>
        <p>Gistyr is a sole proprietorship LLC formed in the state of Virginia.</p>
      </>
    ),
  },
];

export default function Home() {
  return (
    <main className="mx-[10%] min-h-[90vh]">
      <div className="h-10" />
      <div className="flex flex-col items-center text-center">
        <div className="w-full max-w-5xl flex flex-col gap-8">
          {LINES.map((item, i) => {
            const h1 = (i * 37) % 360;
            const h2 = (h1 + 120) % 360;
            const h3 = (h1 + 240) % 360;
            return (
              <details key={item.title} className="w-full">
                <summary className="list-none cursor-pointer">
                  <h1
                    className="
                      chromatic-line
                      wrap-break-words
                      text-balance
                      font-semibold
                      tracking-tight
                      leading-[0.95]
                      text-[min(11vw,4.75rem)]
                      sm:text-[min(7.5vw,4.75rem)]
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
                    {item.title}
                  </h1>
                </summary>
                <div className="mt-4">
                  <div
                    className={`
                      rounded-lg
                      border border-white/10
                      p-4
                      ${item.panelClassName ?? ""}
                    `}
                  >
                    <div className={item.contentClassName ?? ""}>
                      {item.content}
                    </div>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
      <div className="h-10" />
    </main>
  );
}

/////////// END OF FILE ///////////
