<template>
<li class="pokemon-box">
    <div class="inner-box relative">
        <div class="holder-image">
            <figure class="pokemon__image">
                <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonInfos.id).slice(-3) + '.png'" alt="">
            </figure>
            <!-- <p class="pokemon__infos__name">{{ pokemonInfos.name }}</p> -->
        </div>
        <a class="h-link-abs" v-on:click="openCard(pokemonInfos.name)"></a>
    </div>
    <transition>
    <div class="pokemon-card" :class="{'visible': pokemonVisible == pokemonName}">
        
            <div class="holder-infos">
                <figure class="pokemon__image">
                    <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonInfos.id).slice(-3) + '.png'" alt="">
                </figure>
                <router-link class="h-link-abs" :to="{ name: 'showPokemon', params: { currentTab: pokemonInfos.name, id: pokemonInfos.id, pokemon: pokemonInfos  } }"></router-link>
            </div>
        
    </div>
    </transition>
</li>
</template>

<script>
export default {
    name: 'PokemonBoxSimple',

    props: {
        pokemon: { type: Object },
    },

    computed: {
        isVisible () {
            return this.$store.state.isVisible
        },

        pokemonName() {
            return this.$store.state.pokemonName
        }
    },

    methods: {
        openCard: function(pokemon) {
            this.$store.commit('show');
            this.$store.commit('showPokemonCard', pokemon);
            this.pokemonVisible = pokemon;

            console.log(pokemon);
        }
    },

    data() {
        return {
            pokemonInfos: this.pokemon,
            pokemonVisible: ''
        }
    },

    mounted() {
        let promise = this.$http.get(this.pokemon.url);
        promise.then(res => {
            res.json().then(pokemon => this.pokemonInfos = pokemon);
        });
    },
}
</script>

<style lang="scss">
    .pokemon-box {
        display: inline-block;
        width: 33.3%;
        margin-bottom: 35px;
        position: relative;
        @include box-sizing;

        .inner-box {
            text-align: center;
            overflow: hidden;

            &:hover {
                cursor: pointer;
                
                .holder-image {
                    border-color: #2e3b41;
                }
            }
        }

        .holder-image {
            text-align: center;
            position: relative;
            padding: 15px;
            width: fit-content;
            margin: 0 auto 25px;
            border-radius: 50%;
            border: 3px solid #e6e6e6;
            background-color: #e6e6e6;
            transition: all .15s;
        }

        .pokemon__image {
            img {
                @include size(16vw, 16vw);
                max-width: 205px;
                max-height: 205px;
                display: inline-block;
                padding: 10px;
            } 
        }

        &:hover {
            .pokemon {
                &__infos {
                    &__small {
                        .image {
                            &.-back {
                                display: block;
                            }

                            &.-front {
                                display: none;
                            }
                        }
                    }
                }
            }
        }

        .pokemon {
            &__infos {
                position: relative;

                &__index {
                    color: $black-30;
                    font-weight: 700;
                    display: inline-block;
                    padding: 5px;
                    left: 15px;
                    position: absolute;
                    top: 10px;
                    color: #000000;
                }

                &__small {
                    margin: 0 !important;

                    .image {
                        position: absolute;
                        top: -50px;
                        transition: all .2s;
                        
                        &.-back {
                            display: none;
                        }
                    }
                }

                &__name {
                    font-size: 22px;
                    text-transform: capitalize;
                    font-weight: 700;
                    display: inline-block;
                    color: #212121;
                }

                &__types {
                    color: $white;
                    width: 50%;
                    font-size: 0;
                    li {
                        display: inline-block;
                        padding-right: 10px;
                        width: 50%;
                        @include box-sizing;
                        span {
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

    .pokemon-card {
        display: none;
        width: 100px;
        height: 100px;
        background-color: #FFF;
        position: absolute;
        z-index: 20;
        top: 0;

        &.visible {
            display: block;
        }
    }
</style>