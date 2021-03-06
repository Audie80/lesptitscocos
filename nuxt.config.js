
export default {
  mode: 'universal',
  server: {
    port: 8080, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fjalla+One&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Fredoka+One&display=swap'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Options pour Axios, notamment l'URL du serveur
    ['@nuxtjs/axios', {
      baseURL: process.env.API_URL || 'http://localhost:8001/api/'
    }],
    ['@nuxtjs/vuetify', {
      theme: {
        primary: '#f9a11b',
        secondary: '#ffe74c',
        info: '#4c191b',
        accent: "#c4b7cb",
        success: "#eaf7cf"
      }
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
