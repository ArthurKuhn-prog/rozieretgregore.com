export default {
    head:{
        titleTemplate: "Rozier & Grégore - %s",
        htmlAttrs: {
            lang: 'fr-FR'
        },
        bodyAttrs: {
            class:[
                "w-full p-0 m-0"
            ]
        },
        meta:[
            {
                charset:'utf-8',
                hid:'charset'
            },
            {
                name:'description',
                content:'This is the website of Rozier & Grégore, artist duo',
                hid:'description'
            }
        ]
    },
    components: true,
    router:{
        prefetchLinks: false
    },
    plugins:['~/plugins/dataApi'],
    buildModules:[
        '@nuxtjs/tailwindcss'
    ],
    css:['~/assets/main']
}