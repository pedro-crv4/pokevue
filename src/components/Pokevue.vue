<template>
    <div class="container clearfix">
        <div class="holder-logo h-mb40 h-text-center">
            <img src="../assets/pokeball.png" alt="" class="logo pokeball">
            <h1>PokeVue</h1>
        </div>
        <ul class="holder-box-pokemons" v-on:showDetails="renderDetails">
            <pokemon-box-simple v-for="pokemon in pokemons" :key="pokemon.name" :pokemon="pokemon"></pokemon-box-simple>
        </ul>
        
        <!-- <div class="holder-pokemon-list h-pull-left h-mb50">
            <ul class="pokemon-list h-inline-block">
                <li v-for="(pokemon, index) in pokemons" v-bind:key="index" @click.prevent="currentTab = pokemon.name" class="pokemon-item">
                    <a :href="pokemon.url" v-text="pokemon.name"></a>
                </li>
            </ul>
        </div>
        <div class="holder-pokemon-details h-pull-left">
            <pokemon v-for="pokemon in pokemons" v-bind:key="pokemon.order" v-bind:pokemon="pokemon" v-bind:currentTab="currentTab"></pokemon>
        </div> -->
        
    </div>
</template>

<script>
import PokemonBoxSimple from './Pokemon-box-simple.vue';
// import Pokemon from './Pokemon'

export default {
    name: 'Pokevue',
    components: { PokemonBoxSimple },
    data() {
        return {
            baseURl: "https://pokeapi.co/api/v2/pokemon",
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

.logo {
    @include size(134px, 134px);
    display: inline-block;
    vertical-align: bottom  ;
    margin-right: 10px; 
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
}
</style>