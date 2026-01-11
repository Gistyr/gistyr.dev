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

export default async function Page() {
  const res = await fetch("/privacy-policy.html", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to load privacy policy");
  }
  const html = await res.text();
  return (
    <main className="flex justify-center min-h-[90vh] py-12">
      <article
        className="
          prose prose-invert
          max-w-3xl
          prose-h1:text-3xl prose-h1:font-semibold
          prose-h2:text-2xl prose-h2:mt-10
          prose-h3:text-xl
          prose-p:leading-relaxed
          prose-li:my-1
          prose-strong:text-white
          prose-a:text-zinc-200 prose-a:underline
        "
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}

/////////// END OF FILE ///////////