<template>
    <div class="container clearfix">
        <div class="holder-logo h-mb40">
            <img src="../assets/pokeball.png" alt="" class="logo pokeball">
            <h1>PokeVue</h1>
        </div>
        <div class="holder-pokemon-list h-pull-left h-mb50">
            <ul class="pokemon-list h-inline-block">
                <li v-for="(pokemon, index) in pokemons" v-bind:key="index" @click.prevent="currentTab = pokemon.name" class="pokemon-item">
                    <a :href="pokemon.url" v-text="pokemon.name"></a>
                </li>
            </ul>
        </div>
        <div class="holder-pokemon-details h-pull-left">
            <pokemon v-for="pokemon in pokemons" v-bind:key="pokemon.order" v-bind:pokemon="pokemon" v-bind:currentTab="currentTab"></pokemon>
        </div>
        
    </div>
</template>

<script>
import Pokemon from './Pokemon'

export default {
    name: 'Pokevue',
    components: { Pokemon },
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
    }
}
</script>

<style lang="less">
@import "../assets/less/reset.less";
@import "../assets/less/base.less";
@import "../assets/less/colors.less";
@import "../assets/less/typographic.less";
@import "../assets/less/mixins.less";
@import "../assets/less/helpers.less";

.logo {
    .size(134px, 134px);
    display: inline-block;
    vertical-align: bottom  ;
    margin-right: 10px; 
}
a {
    text-decoration: none;
    color: @black-80;
}
h1 {
    font-family: 'Pokemon-Solid';
    font-size: 124px !important;
    display: inline-block;
    color: @yellow;
}
.pokemon-list {
    text-align: left;
    .pokemon-item {
        
        background-color: @white;
        border: 2px solid @navy-blue;
        a {
            padding: 10px 16px;
            text-transform: capitalize;
            display: block;
        }
    }
}
</style>