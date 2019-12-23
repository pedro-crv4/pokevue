<template>
  <div id="app">
    <Pokevue></Pokevue>
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

<style lang="less">

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px 0;
}
</style>
