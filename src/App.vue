<template>
  <Top/>
  <ProContentTop/>
  <router-view/>
</template>

<script>
  import Top from './components/top.vue'
  import ProContentTop from './components/proContentTop.vue'
  //import subscribe from './subject.vue'

  
  export default {
    name: 'App',
    components: {
      Top,
      ProContentTop,

      //ProContentTop
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
