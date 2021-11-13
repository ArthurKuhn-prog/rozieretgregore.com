<template>
    <div>
        <div class="content-part">
            <h2 v-if="lang === 'fr'">Actualités</h2>
                <h2 v-else>News</h2>

            <div v-for="actu, index in actus" :key="index">
                <h2>{{ actu[lang].title }}</h2>
                <p>
                    {{ actu[lang].description }}
                </p>
            </div>
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