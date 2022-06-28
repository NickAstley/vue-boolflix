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