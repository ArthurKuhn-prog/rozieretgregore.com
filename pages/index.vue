<template>
    <div class="">
        <div class="header content-part w-full h-screen flex justify-center items-center text-center text-8xl lg:text-5xl">
            <h1>Rozier & Grégore</h1>
        </div>

        <div class="latest content-part w-full text-center">
            <p v-if="lang === 'fr'">Dernier projet</p>
            <p v-else>Latest project</p>

            <h2><nuxt-link :to="`/projects/${latest.objectID}`">{{ latest[lang].title }}</nuxt-link></h2>
            <p> {{ latest[lang].description }} </p>

            <div v-if="latest.media.length > 0" v-html="latest.media[0]"></div>
        </div>

        <div class="actus content-part">
            <p v-if="lang === 'fr'">Dernières actualités</p>
            <p v-else>Latest news</p>

            <div class=" grid grid-cols-3">
                <div v-for="actu in actus" :key="actu.actuID">
                    <h2>{{ actu[lang].title }}</h2>
                    <h2>{{ actu[lang].description }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '~/data/projets'
import actus from '~/data/actus'

export default {
    head(){
        return{
            title: 'Home',
        }
    },
    data(){
        return {
            //lang: this.$store.state.lang,
            actus: actus.reverse(actus.slice(0,3)),
        }
    },
    computed:{
        lang(){
            return this.$store.state.lang
        },
        latest(){
            const latest = projects[projects.length -1]
            return latest
        }
    }
}
</script>
