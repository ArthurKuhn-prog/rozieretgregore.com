<template>
    <div>
        <div class="project_grid content-part" >
            <h2 v-if="lang === 'fr'">Projets</h2>
            <h2 v-else>Projects</h2>

            <h2 v-for="project, index in projects" :key="index"><nuxt-link :to="`/projects/${project.objectID}`">{{ project[lang].title }}</nuxt-link></h2>
        </div>
    </div>
</template>

<script>
import projects from '~/data/projets'

export default {
    data(){
        return {
            projects: projects.reverse(),
        }
    },
    computed:{
        lang(){
            return this.$store.state.lang
        }
    }
}
</script>