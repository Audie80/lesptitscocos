
export default defineNuxtConfig({
  pages: true,
  ssr: true,
  server: {
    port: 8080,
    host: '0.0.0.0'
  },
  compatibilityDate: '2026-09-07',
  components: true,
  /*
  ** Headers of the page
  */
  app: {
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fjalla+One&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One&display=swap' }
      ]
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'vuetify/styles',
    '~/assets/style/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/vuetify.ts'],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || 'http://localhost:8001/api/'
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vuetify']
  }
})
