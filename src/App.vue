<template>
  <Top/>
  <router-view/>
</template>
<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import Res from './res.vue'
  import Top from './top.vue'
  //import Subject from './subject.vue'

  export default {
    name: 'App',
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
