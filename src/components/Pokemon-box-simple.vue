<template>
    <li class="pokemon-box">
        <div class="inner-box relative">
            <figure class="pokemon__image">
                <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonInfo.id).slice(-3) + '.png'" alt="">
            </figure>
            <div class="pokemon__infos">
                <p class="pokemon__infos__index">#{{  ('000'+pokemonInfo.id).slice(-3) }}</p>
                <p class="pokemon__infos__name">{{ pokemonInfo.name }}</p>
                <ul class="pokemon__infos__types"><li v-for="type in pokemonInfo.types" :key="type.name"><span :class="'background-color-'+type.type.name">{{ type.type.name }}</span></li> </ul>
            </div>
        <router-link :to="{ name:'pokemon-details', params: {id: pokemonInfo.id} }" class="h-link-abs" @click.native="$store.commit('show')"></router-link>
        </div>
    </li>
</template>

<script>
export default {
    name: 'PokemonBoxSimple',
    props: {
        pokemonProp: Object
    },
    data() {
        return {
            pokemonInfo: ''
        }
    },
    mounted() {
        let promise = this.$http.get(this.pokemonProp.url);
        promise.then(res => {
            res.json().then(pokemon => this.pokemonInfo = pokemon);
        });     
    },
}
</script>

<style lang="scss">
    .pokemon-box {
        display: inline-block;
        width: 25%;
        padding: 25px 25px;
        vertical-align: top;
        @include box-sizing;
        .inner-box {
            &:hover {
                animation: bounce 0.5s step-start forwards;
            }
        }
        .pokemon__image {
            background-color: $black-10;
            border-radius: 8px;
            img {
                @include size(16vw, 16vw);
                max-width: 205px;
                max-height: 205px;
                display: block;
                margin: 0 auto;
            } 
        }
        .pokemon {
            &__infos {
                &__index {
                    color: $black-30;
                    font-weight: 700;
                }
                &__name {
                    font-size: 22px;
                    text-transform: capitalize;
                    font-weight: 700;
                }
                &__types {
                    color: $white;
                    font-size: 0;
                    li {
                        display: inline-block;
                        padding-right: 10px;
                        @include box-sizing;
                        span {
                            text-align: center;
                            display: block;
                            font-size: 13px;
                            font-weight: 500;
                            color: $black-80;
                            padding: 3px 5px;
                            border-radius: 5px;
                            text-transform: capitalize;
                            @include box-sizing;
                        }
                    }
                    
                }
                & > * {
                    margin-top: 10px;
                }
            }
        }
    }
</style>