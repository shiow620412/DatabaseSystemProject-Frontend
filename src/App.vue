<template>
  <Top></Top>
  <Category />
  <Subject></Subject>
</template>

<script>
  import Top from './components/top.vue'
  import Category from './components/category.vue'
  import Subject from './components/subject.vue'

  export default {
    name: 'App',
    components: {
      Top,
      Category,
      Subject
    }
  }
</script>

<style>
  #app {
    
  }
</style>