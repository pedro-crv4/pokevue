<template>
  <div id="app">
    <pokevue></pokevue>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import Pokevue from './components/Pokevue.vue'

export default {
  name: 'app',
  components: {
    Pokevue
  }
}
</script>

<style lang="less">
@import "./assets/less/reset.less";
@import "./assets/less/colors.less";
@import "./assets/less/typographic.less";
@import "./assets/less/mixins.less";
@import "./assets/less/helpers.less";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
