<template>
    <div class="pokemon-details clearfix" v-bind:class="pokemonData.name">
        <div class="pokemon clearfix">
            
            <div class="btn back h-inline-block h-mb30">
                <a href="javascript:" @click="goBack">Go back</a>
            </div>
            <div class="h-mb30">
                <span class="pokemon__name c-black-80">{{ pokemonData.name }} <span class="c-black-60">#{{  ('000'+pokemonData.id).slice(-3) }}</span> </span>
            </div>
            
            <div class="pokemon__image h-pull-left">
                <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonData.id).slice(-3) + '.png'" alt="">
            </div>
            
                <ul class="pokemon__infos h-pull-left">
                    <li>Weight: <span>{{ pokemonData.weight }}</span></li>
                    <li>Height: <span>{{ pokemonData.height }}</span></li>
                    <li class="pokemon__infos__types"> Types: 
                        <ul>
                            <li v-for="type in pokemonData.types" v-bind:key="type.name" :class="'background-color-'+type.type.name"><span> {{ type.type.name }} </span></li>
                        </ul>
                    <li class="pokemon__infos__abilities">Abilities:
                        <ul>
                            <li v-for="ability in pokemonData.abilities" :key="ability.ability.name"> {{ ability.ability.name }}</li>
                        </ul>
                        
                    </li>
                    
                </ul>
                
        </div>
        
        
    </div>
</template>

<script>


export default {
    name: 'PokemonDetails',
    data() {
        return {
            pokemonData: ''
        }
    },
    methods: {
        getAbilites: function() {
            let abilities = this.pokemonData.abilities;
            abilities.forEach(element => {
                console.log(element);
                
            });
        },
        goBack() {
           window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
 
    },
    created() {
        let promise = this.$http.get('https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id);
        promise.then(res => {
            res.json().then(pokemon => this.pokemonData = pokemon);
        });   
    },
    mounted() {
        this.$nextTick(function() {
            this.$store.commit('hide');     
            console.log('next tick');
        });
    }
}
</script>

<style lang="scss">

.pokemon-details {
    .pokemon {
        .btn.back {
            background-color: $navy-blue;
            border-radius: 25px;
            a {
                color: $white;
                padding: 5px 10px;
                display: block;
            }
        }

        &__name {
            font-size: 24px;
            text-transform: capitalize;
        }

        &__image {
            background-color: $black-10;
            border-radius: 10px;
            margin-right: 20px;
            img {
                vertical-align: middle;
                @include size(350px, 350px);
            }
        }
            
        &__infos {
            text-align: left;
            font-size: 18px;
            background-color: #8EDFFF;
            border-radius: 10px;
            padding: 10px 20px;
            & > li {
                margin-bottom: 10px;
                color: $white;
                span {
                    color: $black;
                    display: block;
                    line-height: 26px;
                }
            }
            &__types {
                li {
                    display: inline-block;
                    color: $white;
                    padding: 3px 5px;
                    margin-right: 10px;
                    border-radius: 5px;
                    text-transform: capitalize;
                }
            }
            &__abilities {
                ul {
                    display: inline-block;
                    li {
                        display: inline-block;
                        color: $black;
                        margin-right: 3px;
                        &:not(:last-child)::after {
                            content: ',';
                        }
                    }
                }
            }
        }
    }
}


</style>
