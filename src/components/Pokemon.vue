<template>
    <div class="pokemon" v-bind:is="selectedTab" v-bind:class="pokemon.name">
        <img :src="pokemonInfos.sprites.front_default" alt="">
        <span>{{ pokemonInfos.name }}</span>
    </div>
</template>

<script>


export default {
  name: 'Pokemon',
  props: {
      pokemon: { required:true },
      selectedTab: { required: true }
  },
  data() {
      return {
          pokemonInfos: this.pokemon
      }
  },
  computed: {
      isCurrentTab: function() {
          return this.pokemon.name === this.selectedTab
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
    img {
        vertical-align: middle;
    }
}

</style>
