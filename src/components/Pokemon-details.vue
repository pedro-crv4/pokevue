<template>
    <div class="pokemon-details clearfix" v-bind:class="pokemonData.name">
        <div class="pokemon">
            <div class="btn back h-inline-block h-mb30">
                <a href="javascript:" @click.prevent="$emit('goHomePage')">Go back</a>
            </div>
            <div class="h-mb30">
                <span class="pokemon__name c-black-80">{{ pokemonData.name }} <span class="c-black-60">#{{  ('000'+pokemonData.id).slice(-3) }}</span> </span>
            </div>
            
            <div class="pokemon__image h-pull-left">
                <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonData.id).slice(-3) + '.png'" alt="">
            </div>
            
            <div class="pokemon__infos h-pull-left">
                <ul>
                    <li>Weight: {{ pokemonData.weight }}</li>
                    <li>Height: {{ pokemonData.height }} </li>
                    <li class="pokemon__infos__types"> Types: <span v-for="type in pokemonData.types" v-bind:key="type" :class="'background-color-'+type.type.name">{{ type.type.name }}</span> </li>
                    <li class="pokemon__infos__abilities">Abilities: </li>
                    <!-- <span v-for="ability in pokemonData.abilities" :key="ability.ability.name">{{ ability.ability.name }}</span> -->
                </ul>
                
            </div>
        </div>
        
        
    </div>
</template>

<script>


export default {
    name: 'PokemonDetails',
    props: {
        pokemonProp: { type: Object }
    },
    data() {
        return {
            pokemonData: this.pokemonProp
        }
    },
    methods: {
        getAbilites: function() {
            let abilities = this.pokemonData.abilities;
            abilities.forEach(element => {
                console.log(element);
                
            });
        }
    },
    mounted() {
        let promise = this.$http.get(this.pokemonData.url);
        promise.then(res => {
            res.json().then(pokemon => this.pokemonData = pokemon);
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
            li {
                margin-bottom: 10px;
            }
            &__types {
                span {
                    color: $white;
                    padding: 3px 5px;
                    margin-right: 10px;
                    border-radius: 5px;
                    text-transform: capitalize;
                }
            }
            &__abilities {
                span:nth-child(n):not(:last-child) {
                    background-color: red;
                }
            }
        }
    }
}


</style>
