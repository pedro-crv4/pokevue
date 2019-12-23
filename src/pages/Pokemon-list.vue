<template>
<ul class="holder-box-pokemons">
    <pokemon-box-simple v-for="pokemon in pokemonInfo" :key="pokemon.id" :pokemonProp="pokemon"></pokemon-box-simple>
</ul>
    
</template>

<script>

import PokemonBoxSimple from '@/components/Pokemon-box-simple'

export default {
    name: 'PokemonList',
    components: {PokemonBoxSimple},
    props: {
        url: String
    },
    data() {
        return {
            pokemonInfo: ''
        }
    },
    mounted() {
        let promise = this.$http.get(this.url + 'pokemon');
        promise.then(res => {
            res.json().then(pokemon => this.pokemonInfo = pokemon.results);
        });     
    }
}
</script>

<style lang="scss">
    .holder-box-pokemons {
        font-size: 0;
        margin: 0 -8px;
        padding: 20px 40px 50px;
    }
</style>