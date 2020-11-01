export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'grzegorz-hadala-portfolio-2020',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  loading: { color: '#1774ff'},
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/app.scss',
  ],

  styleResources: {
    scss: [
        '~/assets/variables.scss',
        '~/assets/maps.scss',
        '~/assets/type.scss',
        '~/assets/buttons.scss',
        '~/assets/layout.scss',
    ]
},

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    "@nuxtjs/prismic",
    '@nuxtjs/style-resources',
    '@neneos/nuxt-animate.css'
  ],

  prismic: {
    endpoint: 'https://hadala-art.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
