<template>
    <div class="pokemon clearfix" v-bind:class="pokemonInfos.name">
        <div class="h-mb30">
            <span class="pokemon__name c-black-80">{{ pokemonInfos.name }} <span class="c-black-60">#{{  ('000'+pokemonInfos.id).slice(-3) }}</span> </span>
        </div>
        
        <div class="pokemon__image h-pull-left">
            <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonInfos.id).slice(-3) + '.png'" :alt="pokemonInfos.name">
        </div>
        
        <div class="pokemon__infos h-pull-left">
            <ul>
                <li>Weight: {{ pokemonInfos.weight }}</li>
                <li>Height: {{ pokemonInfos.height }} </li>
                <li class="pokemon__types"> Types: <span v-for="type in pokemonInfos.types" v-bind:key="type" :class="'background-color -'+type.type.name">{{ type.type.name }}</span> </li>
            </ul>
            
        </div>
        
    </div>
</template>

<script>


export default {
    name: 'Pokemon',
    props: {
        pokemon: { type: Object }
        // currentTab: { required: true }
    },
    data() {
        return {
            pokemonInfos: this.pokemon
        }
    },
    computed: {
        // isCurrentTab: function() {
        //     return this.pokemon.name === this.currentTab
        // }
    },
    mounted() {
        const pokemonUrl = this.$route.params.pokemon.varieties['0'].pokemon.url;
        console.log(pokemonUrl);
        let promise = this.$http.get(pokemonUrl);
        promise.then(res => {
            res.json().then(pokemon => this.pokemonInfos = pokemon);
        });     
    }
}
</script>

<style lang="scss">

.pokemon {
    .pokemon__image {
        background-color: $black-10;
        border-radius: 10px;
        margin-right: 20px;
        img {
            vertical-align: middle;
            @include size(350px, 350px);
        }
    }
    
    .pokemon__infos {
        text-align: left;
        font-size: 18px;
        background-color: #8EDFFF;
        border-radius: 10px;
        padding: 10px 20px;
        position: relative;

        &:before {
            content: ' ';
            background: url(https://assets.pokemon.com/static2/_ui/img/chrome/dog-ears/default-dog-ear.png) no-repeat 0 0;
            height: 2em;
            position: absolute;
            width: 2em;
            z-index: 3;
            left: -10px;
            bottom: -1px;
            -webkit-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            -moz-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            transform: rotate(-90deg);
            -webkit-backface-visibility: hidden;
            -ms-backface-visibility: hidden;
            -moz-backface-visibility: hidden;
            -o-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        li {
            margin-bottom: 10px;
        }
        .pokemon__types {
            span {
                color: $white;
                padding: 3px 5px;
                margin-right: 10px;
                border-radius: 5px;
                text-transform: capitalize;
            }
        }
    }
    .pokemon__name {
        font-size: 24px;
        text-transform: capitalize;
    }
}

</style>
