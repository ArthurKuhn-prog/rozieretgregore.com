<template>
    <div>
        <div>
            {{ about[lang] }}
        </div>

        <div v-for="link in contacts.links" :key="link.id">
            <p><a :href="link.link">{{ link.name }}</a></p>
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