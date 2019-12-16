<template>
    <div class="pokemon clearfix" v-if="isCurrentTab" v-bind:class="pokemon.name">
        <div class="h-mb30">
            <span class="pokemon__name c-black-80">{{ pokemonInfos.name }} <span class="c-black-60">#{{  ('000'+pokemonInfos.id).slice(-3) }}</span> </span>
        </div>
        
        <div class="pokemon__image h-pull-left">
            <img :src="'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + ('000'+pokemonInfos.id).slice(-3) + '.png'" alt="">
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
        pokemon: { required:true },
        currentTab: { required: true }
    },
    data() {
        return {
            pokemonInfos: this.pokemon
        }
    },
    computed: {
        isCurrentTab: function() {
            return this.pokemon.name === this.currentTab
        }
    },
    mounted() {
        let promise = this.$http.get(this.pokemonInfos.url);
        promise.then(res => {
            res.json().then(pokemon => this.pokemonInfos = pokemon);
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

.pokemon {
    .pokemon__image {
        background-color: @black-10;
        border-radius: 10px;
        margin-right: 20px;
        img {
            vertical-align: middle;
            .size(350px, 350px);
        }
    }
    
    .pokemon__infos {
        text-align: left;
        font-size: 18px;
        background-color: #8EDFFF;
        border-radius: 10px;
        padding: 10px 20px;
        li {
            margin-bottom: 10px;
        }
        .pokemon__types {
            span {
                color: @white;
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
