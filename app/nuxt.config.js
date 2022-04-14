import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Multiversa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      { rel: 'preconnect', href: 'https://unpkg.com'},
      { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com'},
      { rel: 'preconnect', href: 'https://cdn.jsdelivr.net'},
      {
        rel: "preload",
        as: "style",
        onload: "this.rel='stylesheet'",
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css"
      },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'},
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,400;0,600;0,900&display=swap'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.0/flickity.min.css'},
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@clr/icons@12.0.2/clr-icons.min.css'},
    ],
    script: [
      { hid: 'stripe', src: 'https://unpkg.com/aos@2.3.1/dist/aos.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/flickity/2.2.0/flickity.pkgd.min.js' },
      { src: 'https://cdn.jsdelivr.net/npm/@clr/icons@12.0.2/clr-icons.min.js' }
    ]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/scss/app.scss',
  ],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/after-each.js', mode: 'client' },
    { src: '~/plugins/truncate.js' },
    { src: '~/plugins/vue-check-view.js', mode: 'client' },
    { src: '~/plugins/imagine.js'},
    { src: '~/plugins/event.js'},
    { src: '~/plugins/mask.js'},
    { src: '~/plugins/axios.js'}
    
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/http',
    '@nuxt/content',
    '@nuxtjs/dotenv'
  ],
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  http: {
    baseURL: process.env.API
  },
  
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/',
        redirect: '/home'
      })
    }
  },
  
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  pageTransition: {
    name: 'layout',
    mode: '',
  },
  
}
