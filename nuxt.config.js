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
            { hid: 'description', name: 'description', content: 'Somos un tejido artístico, una organización creativa gestora de proyectos audiovisuales. Queremos contribuir al fortalecimiento sociocultural en diferentes regiones y sectores del país. Realizamos proyectos que hacen sinergia entre la producción multimedia y el uso de nuevas tecnologías.' },
            { hid: 'og:image', property: 'og:image', content: '~/assets/images/imagenlatente.png',},
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
    modules: ['@nuxtjs/gtm', '@nuxtjs/robots'],
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
