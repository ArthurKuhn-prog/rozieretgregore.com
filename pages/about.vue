<template>
    <div >
        <div class="content-part">
            <h2 v-if="lang === 'fr'">À propos</h2>
                <h2 v-else>About</h2>

            <div>
                {{ about[lang] }}
            </div>

            <div v-for="link in contacts.links" :key="link.id">
                <p><a :href="link.link">{{ link.name }}</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import about from '~/data/about'
import contacts from '~/data/contacts'

export default{
    data(){
        return{
            about: about[0],
            contacts: contacts[0]
        }
    },
    computed:{
        lang(){
            return this.$store.state.lang
        }
    }
}
</script>