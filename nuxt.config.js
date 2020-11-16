export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Grzegorz Hadała – Product Designer based in Amsterdam',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest'},
      { rel: 'mask-icon', type: 'image/svg+xml', color: '#5bbad5', href: '/favicon-mask.svg'}
      // <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
      // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
      // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
      // <link rel="manifest" href="/site.webmanifest">
      // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
      // <meta name="msapplication-TileColor" content="#da532c">
      // <meta name="theme-color" content="#ffffff"></meta>
    ]
  },


  loading: { color: '#1774ff'},
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/app.scss',
    '@/assets/coolicons.css',
  ],

  styleResources: {
    scss: [
        '~/assets/variables.scss',
        '~/assets/maps.scss',
        '~/assets/type.scss',
        '~/assets/buttons.scss',
        '~/assets/layout.scss',
    ],
},

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/route.js',
    '~/plugins/ga.js'
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
    '@neneos/nuxt-animate.css',
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
  },
  router: {
    
  },
}
