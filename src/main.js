import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import PokemonList from './components/PokemonList.vue'
import Pokemon from './components/Pokemon.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
    { path: '/pokemon/:id', name: 'showPokemon', component: Pokemon },
    { path: '/', name: 'listPokemon', component: PokemonList },
]

const router = new VueRouter ({
    routes
})

const store = new Vuex.Store({
    state: {
        isVisible: false,
        pokemonName: undefined,
    },
  
    mutations: {
        show (state) {
            state.isVisible = true
        },

        hide (state) {
            state.isVisible = false
        },

        showPokemonCard (state, pokemonName) {
            state.pokemonName = pokemonName
        },

        hidePokemonCard (state) {
            state.pokemonName = ''
        }
    }
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')