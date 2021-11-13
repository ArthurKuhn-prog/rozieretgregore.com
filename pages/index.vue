<template>
    <div>
        <div class="header w-screen h-screen flex justify-center items-center text-center text-8xl lg:text-5xl">
            <h1>Rozier & Grégore</h1>
        </div>

        <div class="latest">
            <p v-if="lang === 'fr'">Dernier projet</p>
            <p v-else>latest</p>

            <h2><nuxt-link :to="`/projects/${latest.objectID}`">{{ latest[lang].title }}</nuxt-link></h2>
            <p> {{ latest[lang].description }} </p>

            <div v-if="latest.media.length > 0" v-html="latest.media[0]"></div>
        </div>

        <div class="actus" v-for="actu in actus" :key="actu.actuID">
            <h2>{{ actu[lang].title }}</h2>
            <h2>{{ actu[lang].description }}</h2>
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
            meta: [
                {
                    name:'description',
                    content:'This is the website of Rozier & Grégore, artist duo',
                    hid:'description'
                }
            ]
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
            projects.reverse()
            const latest = projects.slice(0,1)
            return latest[0]
        }
    }
}
</script>
