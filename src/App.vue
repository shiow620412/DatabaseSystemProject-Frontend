<template>
  <Top/>
  <router-view/>
</template>
<script>
  import Top from './components/top.vue'
  export default {
      name: "index",
      components: {
        Top
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
