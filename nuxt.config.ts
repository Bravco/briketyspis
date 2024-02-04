export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
  ],
  css: [
    "@/assets/main.css",
  ],
  runtimeConfig: {
    public: {
      WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "sk",
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
});