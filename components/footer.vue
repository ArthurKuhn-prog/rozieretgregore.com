<template>
    <div class="contact flex flex-col lg:flex-row justify-around items-center bg-black" style="border-top: 1px solid white">
        <p class="lg:w-3/5 m-8 text-6xl leading-relaxed lg:text-5xl">{{ contacts.about[lang].description }}</p>

        <div>
            <p v-for="link in contacts.links" :key="link.id" class="lg:w-2/5 m-8 text-6xl leading-relaxed lg:text-4xl">{{ link.name }} : <a :href="link.link">{{ link.textLink }}</a></p>
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