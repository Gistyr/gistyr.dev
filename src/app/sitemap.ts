/*//////// START OF FILE ////////*/
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
/* ---------------------------------------- */

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gistyr.dev";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/gobsg`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/betterlogger`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}

/////////// END OF FILE ///////////