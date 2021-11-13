<template>
    <div class="contact flex justify-around items-center bg-black">
        <p>{{ contacts.about[lang].description }}</p>

        <div>
            <p v-for="link in contacts.links" :key="link.id" :href="link.link"><a>{{ link.name }}</a></p>
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