<template>
  <div id="app">
    <pokevue></pokevue>
  </div>
</template>

<script>

import Pokevue from './components/Pokevue.vue'

export default {
  name: 'app',
  components: {
    Pokevue
  }
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
