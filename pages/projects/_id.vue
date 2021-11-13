<template>
    <div>
        <h1>{{ project[lang].title }}</h1>

        <div v-html="project.media[0]"></div>

        <p> {{ project[lang].description }} </p>

        <div>
            <img v-for="picture, index in project.images" :key="index" :src="picture">       
        </div>
    </div>
</template>

<script>
export default {
    head(){

    },
    async asyncData({params, $dataApi, error}){
        const projectData = await  Promise.all([
            $dataApi.getProject(params.id)
        ])

        const badResponse = projectData.find((response) => !response.ok)
        if(badResponse) return error({ statusCode: badResponse.status, message: badResponse.statusText })

        return {
            project: projectData[0].json
        }
    }, 
    computed:{
        lang(){
            return this.$store.state.lang
        }
    },
    methods:{
    }
}
</script>
