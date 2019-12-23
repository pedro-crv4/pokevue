import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueGlobalVar from 'vue-global-var'
import VueRouter from 'vue-router'
import PokemonList from './components/PokemonList.vue'
import Pokemon from './components/Pokemon.vue'


Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueGlobalVar, {
    globals: {
        $showOverlay: false,
    },
});

Vue.config.productionTip = false


const routes = [
    { path: '/pokemon/:id', name: 'showPokemon', component: Pokemon },
    { path: '/', name: 'listPokemon', component: PokemonList },
]

const router = new VueRouter ({
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')