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
            },
            {
                name:'keywords',
                content:'rozier et gregore',
                hid:'description'
            }
        ],
        link:[
            {rel: 'preconnect', href:'https://fonts.googleapis.com', hid:'font-preconnect'},
            {rel: 'preconnect', href:'https://fonts.gstatic.com', hid:'font-preconnect'},
            {rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,400&display=swap', hid:'font'},
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