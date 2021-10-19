export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'imagen-nuxt',
        htmlAttrs: {
            lang: 'es',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/sass/main.scss'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ['@nuxtjs/google-fonts'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/gtm', ],
    gtm: {
        id: 'GTM-5CTSSZP',
        enabled: true
    },
     // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    googleFonts: {
        download: false,
        families: {
            Nunito: {
                ital: [700, 800],
                wght: [300, 700, 800],
            },
            'Nunito+Sans': {
                wght: [300, 400, 700],
            },
        },
    },
}
