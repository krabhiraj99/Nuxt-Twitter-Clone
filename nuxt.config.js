export default {
  // ssr: false,
  mode:'spa',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-twitter',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/custom.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/bootstrap.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDAadMfUJVnBhQMvnk-6vO8UKW6H6T4taw",
          authDomain: "nuxt-twitter-clone.firebaseapp.com",
          projectId: "nuxt-twitter-clone",
          storageBucket: "nuxt-twitter-clone.appspot.com",
          messagingSenderId: "474477010705",
          appId: "1:474477010705:web:c324e2107971d59a6c36b0",
          measurementId: '<measurementId>'
        },
        services: {
          auth: {
            onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
            onAuthStateChangedAction: 'onAuthStateChangedAction',
          },
          // auth: true, // Just as example. Can be any other service.
          // firestore: true,
          // functions: true,
          // storage: true,
          // database: true,
          // messaging: true,
          // performance: true,
          // analytics: true,
          // remoteConfig: true
        }
      }
    ]
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

    // use these settings to use custom css
    bootstrapVue: {
      bootstrapCSS: false,
      icons: true,
    },

    env: {
      FIRE_ENV: process.env.FIRE_ENV
    },
  
}
