<template>
  <div id="app">
    <TheHeader/>
    <TheMain/>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader'
  import TheMain from './components/TheMain'

  export default {
    name: 'App',
    components: {
      TheHeader,
      TheMain
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/main.scss";

  #app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
  }
</style>