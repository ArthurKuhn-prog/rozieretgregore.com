<template>
    <div>
        <div class="project_grid" v-for="project, index in projects" :key="index">
            <h2><nuxt-link :to="`/projects/${project.objectID}`">{{ project[lang].title }}</nuxt-link></h2>

            <p> {{ project[lang].description }} </p>
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