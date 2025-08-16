// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "JadesDev - Web & App Development",

      titleTemplate: "%s | JadesDev",

      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Professional web development services including custom websites, e-commerce solutions, UI/UX design, and performance optimization.",
        },
        {
          name: "google-site-verification",
          content: "Ae2l_SB5KG6PvPmeWZHtxB0RZ5L_5gxC7wm6J8yzKKg",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/styles.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "http://localhost/jadesdev-license",
      apiKey: process.env.NUXT_PUBLIC_API_KEY,
    },
  },
  site: {
    url: process.env.NUXT_SITE_URL || "https://jadesdev.com.ng",
    name: "Jades Dev",
  },
  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  modules: ["@nuxt/icon", "@nuxtjs/sitemap"],
});
