<template>
    <div class="">
        <div class="header content-part w-full h-screen flex justify-center items-center">
        </div>

        <div class="bg-black">
            <div class="latest content-part w-full text-center">

                <h2 class="p-8 text-8xl lg:text-4xl"><nuxt-link :to="`/projects/${latest.objectID}`">{{ latest[lang].title }}</nuxt-link></h2>

                <div v-if="latest.media.length > 0" v-html="latest.media[0]"></div>
            </div>

            <!--<div class="actus h-96 p-8 mt-8" style="border-bottom: 2px solid white">
                <div class="text-center p-8 text-8xl lg:text-4xl">
                    <p v-if="lang === 'fr'">Dernières actualités</p>
                    <p v-else>Latest news</p>
                </div>

                <div class=" grid grid-cols-3">
                    <div v-for="actu in actus" :key="actu.actuID">
                        <h2 class="text-5xl lg:text-xl">{{ actu[lang].title }}</h2>
                        <h2>{{ actu[lang].description }}</h2>
                    </div>
                </div>
            </div>-->
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
