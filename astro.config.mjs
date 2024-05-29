import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
    fallback: {
      es: "en",
    },
  },
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
