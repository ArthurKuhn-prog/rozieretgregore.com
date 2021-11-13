export default {
    head:{
        titleTemplate: "Rozier & Grégore - %s",
        htmlAttrs: {
            lang: 'fr-FR'
        },
        bodyAttrs: {
            class:[
                "w-screen p-0 m-0"
            ]
        },
        meta:[{
            charset:'utf-8'
        }]
    },
    components: true,
    router:{
        prefetchLinks: false
    },
    plugins:['~/plugins/dataApi'],
    buildModules:[
        '@nuxtjs/tailwindcss'
    ]
}