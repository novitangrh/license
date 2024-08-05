export default {
  buildModules: ["@nuxtjs/style-resources", "@pinia/nuxt"],
  devtools: { enabled: true },

  styleResources: {
    scss: ["@/assets/scss/_variables.scss"],
  },

  css: ["bootstrap/dist/css/bootstrap.css", "@/assets/scss/app.scss", "bootstrap-icons/font/bootstrap-icons.css"],

  build: {
    loaders: {
      scss: {
        implementation: require("sass"),
      },
    },
  },

  plugins: ["@/plugins/bootstrap.client.ts", "@/plugins/fontawesome.ts", "@/plugins/bootstrap.ts"],

  runtimeConfig: {
    public: {
      baseApiUrl: process.env.NUXT_BASE_API_URL || "",
    },
  },
  compatibilityDate: "2024-07-06",

  // // router: {
  //   middleware: 'auth'
  // }
};
