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

<style>
  #app {
    
  }
</style>
