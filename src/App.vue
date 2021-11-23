<template>
  <Top></Top>
  <Subject></Subject>
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
  <!--<res />-->
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  // import Res from './res.vue'
  import Top from './top.vue'
  import Subject from './subject.vue'

  export default {
    name: 'App',
    components: {
      Top,
      Subject
    }
  }
</script>

<style>
  #app {
    
  }
</style>