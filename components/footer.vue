<template>
    <div class="contact">
        <p>{{ contacts.about[lang].description }}</p>
        <div v-for="link in contacts.links" :key="link.id">
            <p><a :href="link.link">{{ link.name }}</a></p>
        </div>
    </div>
</template>

<script>
import contacts from '~/data/contacts'

export default {
    data(){
        return{
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