import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import router from './router'

Vue.use(VueResource)
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        isVisible: false,
        pokemonName: undefined
    },

    mutations: {
        show(state){
            state.isVisible = true
        },

        hide(state){
            state.isVisible = false
        },

        showPokemonCard(state, pokemonName){
            state.pokemonName = pokemonName
        },

        hidePokemonCard(state){
            state.pokemonName = ''
        }
    }
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')