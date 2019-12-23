<template>
    <div class="container clearfix">
        <div class="holder-logo h-mb60 h-text-center">
            <img src="../assets/header.png" alt="" class="logo pokeball">
        </div>

        <router-view></router-view>

        <div class="bg-overlay" v-show="isVisible" v-on:click="hideOverlay()"></div>
    </div>
</template>

<script>
export default {
    name: 'Pokevue',

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

    computed: {
        isVisible () {
            return this.$store.state.isVisible
        }
    },

    methods: {
        openOverlay: function() {
            console.log('render pokemon');
        },

        hideOverlay: function() {
            this.$store.commit('hide');
            this.$store.commit('showPokemonCard', undefined);
        }
    }
}
</script>

<style lang="scss">

.logo {
    @include size(525px, auto);
    display: inline-block;
    vertical-align: bottom;
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

.bg-overlay {
    background: rgba(0,0,0,0.8);
    bottom: 0;
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    visibility: visible;
    width: 100%;
    z-index: 16;
}
</style>