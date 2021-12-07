<template>
  <navheader/>
  <router-view/>
</template>

<script>
  import navheader from './components/navheader.vue'

  export default {
    name: 'App',
    components: {
      navheader
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
