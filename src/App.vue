<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import Pokevue from './components/Pokevue.vue'

export default {
  name: 'app'
}
</script>

<style lang="scss">

#app {
  font-family: $global-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
