<template>
  <Category />
  <Subject></Subject>
</template>

<script>
  import Category from '../components/category/category.vue'
  import Subject from '../components/subject.vue'

  export default {
    name: 'index',
    components: {
      Category,
      Subject
    }
  }
</script>

<style>

</style>