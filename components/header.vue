<template>
    <div>
        <div class="nav-menu-lg hidden lg:flex w-full h-auto justify-between p-5 bg-black fixed top-0" style="border-bottom:1px solid white">
            <div class="flex-1">
                <button type="button" v-on:click="setLang('fr')" class="">FR</button>
                |
                <button type="button" v-on:click="setLang('en')">EN</button>
            </div>

            <div class="flex-none">
                <h1 class="text-2xl"><nuxt-link to="/">Rozier & Grégore</nuxt-link></h1>
            </div>

            <div class="flex-1 text-right">
                    <!--<nuxt-link :to="`/projects/`" class="ml-4">
                        <span v-if="lang === 'fr'">
                            Projets
                        </span>

                        <span v-else>
                            Projects
                        </span>
                    </nuxt-link>

                    <nuxt-link :to="`/actus`" class="ml-4">
                        <span v-if="lang === 'fr'">
                            Actualités
                        </span>

                        <span v-else>
                            News
                        </span>
                    </nuxt-link>

                    <nuxt-link :to="`/about`" class="ml-4">
                        <span v-if="lang === 'fr'">
                            À propos
                        </span>

                        <span v-else>
                            About
                        </span>
                    </nuxt-link>-->
                    <span v-if="lang === 'fr'">Site en construction</span>
                    <span v-else>Website under construction</span>
            </div>
        </div>

        <div class="nav-menu-sm flex lg:hidden justify-between items-center w-full h-auto text-6xl fixed top-0 bg-black p-8"  style="border-bottom:1px solid white">
            <div class="flex-none">
                <h1><nuxt-link to="/">Rozier & Grégore</nuxt-link></h1>
            </div>

            <div>
                <div class="m-5">
                        <button type="button" v-on:click="setLang('fr')" class="mr-4">FR</button>
                        |
                        <button type="button" v-on:click="setLang('en')">EN</button>
                    </div>
                <!--
                <button type="button" @click="showMenuMob()">☰</button>
                
                <div v-if="menuMob" class="absolute right-0 text-right bg-black">
                    <div class="flex-col ml-10 pl-10">
                        <div class="m-5">
                            <nuxt-link :to="`/projects/`" class="mr-2">
                                <span v-if="lang === 'fr'">
                                    Projets
                                </span>

                                <span v-else>
                                    Projects
                                </span>
                            </nuxt-link>
                        </div>

                        <div class="m-5">
                            <nuxt-link :to="`/actus`" class="mr-2">
                                <span v-if="lang === 'fr'">
                                    Actualités
                                </span>

                                <span v-else>
                                    News
                                </span>
                            </nuxt-link>
                        </div>

                        <div class="m-5">
                            <nuxt-link :to="`/about`">
                                <span v-if="lang === 'fr'">
                                    À propos
                                </span>

                                <span v-else>
                                    About
                                </span>
                            </nuxt-link>
                        </div>
                    </div>

                    <div class="m-5 mt-8 pt-5" style="border-top: 2px solid white">
                        <button type="button" v-on:click="setLang('fr')" class="mr-4">FR</button>
                        |
                        <button type="button" v-on:click="setLang('en')">EN</button>
                    </div>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{
            menuMob: false,
        }
    },
    computed:{
        lang(){
            return this.$store.state.lang
        }
    },
    methods:{
        setLang(lang){
            this.$store.commit('changeLang',lang)
        },
        showMenuMob(){
            if(this.menuMob) this.menuMob = false ; else this.menuMob = true
        }
    }
}
</script>