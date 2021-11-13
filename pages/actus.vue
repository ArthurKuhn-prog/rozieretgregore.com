<template>
    <div>
        <div v-for="actu, index in actus" :key="index">
            <h2>{{ actu[lang].title }}</h2>
            <p>
                {{ actu[lang].description }}
            </p>
        </div>
    </div>
</template>

<script>
import actus from '~/data/actus'

export default {
    data(){
        return{
            actus : actus.reverse()
        }
    },
    computed:{
        lang(){
            return this.$store.state.lang
        }
    }
}
</script>