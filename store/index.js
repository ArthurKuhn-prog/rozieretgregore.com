export const state = () => ({
    lang : 'fr'
})

export const mutations = {
    changeLang(state, newLang){
        state.lang = newLang;
        console.log(state.lang)
    }
}