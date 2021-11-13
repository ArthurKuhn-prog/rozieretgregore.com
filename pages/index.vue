<template>
    <div class="">
        <div class="header flex content-part w-full h-screen justify-center items-center">
        </div>

        <div class="bg-black">
            <div class="latest w-full h-max p-5 pb-8">
                <div v-if="latest.media.length > 0" v-html="latest.media[0]"></div>

                <div class="p-8">
                    <h2 class="text-8xl leading-normal lg:text-4xl">{{ latest[lang].title }}</h2>
                    <p class="text-5xl leading-relaxed lg:text-xl">{{ latest[lang].description }}</p>
                </div>
            </div>

            <div class=" w-full h-max p-5 pb-8 text-center text-8xl lg:text-4xl">
                <p v-if="lang==='fr'">
                    Ce site est encore en construction.<br>
                    Retrouvez-y bientôt d'autres projets et actualités.
                </p>

                <p v-else>
                    This website is still under construction.<br>
                    Come back soon for more projects and news.
                </p>
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
            const latest = projects[1]
            return latest
        }
    }
}
</script>
