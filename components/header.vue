<template>
    <div class="nav-top_menu w-full h-auto flex justify-between p-2 bg-white fixed top-0">
        <div class="flex-1">
            <button type="button" v-on:click="setLang('fr')" class="mr-4">FR</button>
            <button type="button" v-on:click="setLang('en')">EN</button>
        </div>

        <div class="flex-none">
            <h1><nuxt-link to="/">Rozier & Grégore</nuxt-link></h1>
        </div>

        <div class="flex-1 text-right">
                <nuxt-link :to="`/projects/`" class="ml-4">
                    <span v-if="lang === 'fr'">
                        Projets
                    </span>

                    <span v-else>
                        Projects
                    </span>
                </nuxt-link>

                <nuxt-link :to="`/actus`" class="ml-4">
                    <span v-if="lang === 'fr'">
                        Actualités
                    </span>

                    <span v-else>
                        News
                    </span>
                </nuxt-link>

                <nuxt-link :to="`/about`" class="ml-4">
                    <span v-if="lang === 'fr'">
                        À propos
                    </span>

                    <span v-else>
                        About
                    </span>
                </nuxt-link>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
        }
    },
    computed:{
        lang(){
            return this.$store.state.lang
        }
    },
    methods:{
        setLang(lang){
            this.$store.commit('changeLang',lang)
        }
    }
}
</script>