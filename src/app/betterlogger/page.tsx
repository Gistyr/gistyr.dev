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

import ReactMarkdown from "react-markdown";

export default async function Page() {
  const res = await fetch(
    "https://raw.githubusercontent.com/Gistyr/better-logger/main/README.md",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to load README.md from GitHub");
  }
  const md = await res.text();

  return (
    <main className="mx-[10%] min-h-[90vh] py-16">
      <article className="markdown-body">
        <ReactMarkdown>{md}</ReactMarkdown>
      </article>
    </main>
  );
}

/////////// END OF FILE ///////////