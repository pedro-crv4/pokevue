<template>
  <div id="app">
    <default @showOverlay="showOverlay()"/>
  </div>
</template>

<script>

import Default from '@/pages/Default'

export default {
  name: 'app',
  components: {Default}
}
</script>

<style lang="scss" scoped>

#app {
  font-family: $global-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
