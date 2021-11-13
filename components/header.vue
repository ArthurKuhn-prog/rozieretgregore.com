<template>
    <div class="nav-top_menu w-screen h-auto flex justify-between p-2 bg-white fixed">
        <div>
            <button type="button" v-on:click="setLang('fr')">FR</button>
            <button type="button" v-on:click="setLang('en')">EN</button>
        </div>

        <div>
            <h1><nuxt-link to="/">Rozier & Grégore</nuxt-link></h1>
        </div>

        <div>
            <nuxt-link :to="`/projects/`">
                <span v-if="lang === 'fr'">
                    Projets
                </span>

                <span v-else>
                    Projects
                </span>
            </nuxt-link>

            <nuxt-link :to="`/actus`">
                <span v-if="lang === 'fr'">
                    Actualités
                </span>

                <span v-else>
                    News
                </span>
            </nuxt-link>

            <nuxt-link :to="`/about`">
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