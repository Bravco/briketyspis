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
      title: "Brikety Spiš",
      meta: [
        { name: "title", content: "Brikety Spiš - Drevené Brikety RUF" },
        { name: "description", content: "Ušetrite čas, energiu pripravovaním dreva na zimu a užívajte si bezstarostné kúrenie s drevenými briketami." },
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
});