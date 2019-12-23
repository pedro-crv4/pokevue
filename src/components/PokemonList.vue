<template>
    <ul class="holder-box-pokemons" v-on:showDetails="renderDetails">
        <pokemon-box-simple v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon"></pokemon-box-simple>
    </ul>
</template>

<script>
import PokemonBoxSimple from './Pokemon-box-simple.vue';

export default {
    name: 'Pokevue',
    components: { PokemonBoxSimple },
    data() {
        return {
            baseURl: "https://pokeapi.co/api/v2/pokemon-species/?limit=45",
            pokemons: [],
            currentTab: ''
        }
    },
    created() {
        let promise = this.$http.get(this.baseURl);
        promise.then(res => {
        res.json().then(pokemons => this.pokemons = pokemons.results);
        });
    },
    methods: {
        renderDetails: function() {
            console.log('render pokemon');
        }
    }
}
</script>

<style lang="scss">

a {
    text-decoration: none;
    color: $black-80;
}
h1 {
    font-family: $global-font-family;
    font-size: 124px !important;
    display: inline-block;
    color: $yellow;
}
.holder-box-pokemons {
    font-size: 0;
    margin: 0 -8px;
}
</style>