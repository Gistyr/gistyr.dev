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

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default async function Page() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gistyr.dev";
  const res = await fetch(`${baseUrl}/privacy-policy.html`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load privacy policy");
  const html = await res.text();
  return (
    <main className="min-h-[90vh]">
      <article
        className="legal"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}

/////////// END OF FILE ///////////