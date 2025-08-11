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
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/styles.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon"],
});
