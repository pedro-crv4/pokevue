<template>
    <div class="container clearfix">
        <div class="holder-logo h-mb40 h-text-center" @click.prevent="showHomePage">
            <img src="../assets/pokeball.png" alt="" class="logo pokeball">
            <h1>PokeVue</h1>
        </div>
        <ul class="holder-box-pokemons" v-if="!isShowDetails">
            <pokemon-box-simple v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon" v-on:showDetails="showDetails(pokemon)"></pokemon-box-simple>
        </ul>
        
        <pokemon-details :pokemonProp="pokemon" v-if="isShowDetails" v-on:goHomePage="showHomePage"></pokemon-details>
        
    </div>
</template>

<script>
import PokemonBoxSimple from './Pokemon-box-simple.vue';
import PokemonDetails from './Pokemon-details.vue';
// import Pokemon from './Pokemon'

export default {
    name: 'Pokevue',
    components: { PokemonBoxSimple, PokemonDetails },
    data() {
        return {
            baseURl: "https://pokeapi.co/api/v2/pokemon",
            pokemons: [],
            currentTab: '',
            isShowDetails: false,
            pokemon: ''
        }
    },
    created() {
        let promise = this.$http.get(this.baseURl);
        promise.then(res => {
        res.json().then(pokemons => this.pokemons = pokemons.results);
        });
    },
    methods: {
        showDetails: function(pokemon) {
            this.isShowDetails = true;      
            this.pokemon = pokemon;             
        },
        showHomePage: function() {
            this.isShowDetails = false;
        }
    }
}
</script>

<style lang="scss">


.holder-logo {
    cursor: pointer;
    .logo {
        @include size(134px, 134px);
        display: inline-block;
        vertical-align: bottom  ;
        margin-right: 10px; 
    }
}

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
    padding: 20px 40px 50px;
}
</style>