import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home';
import PokemonList from '@/pages/Pokemon-list'
import PokemonDetails from '@/components/Pokemon-details'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pokemons/',
        name: 'pokemons-list',
        component: PokemonList
    },
    {
        path: '/pokemons/:id',
        name: 'pokemon-details',
        component: PokemonDetails
    }
    
]

const router = new VueRouter({
    routes
})

export default router

