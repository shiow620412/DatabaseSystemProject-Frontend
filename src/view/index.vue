<template>
  <el-row style="background-color: #efffe4;">
    <index-aside></index-aside>
    <index-main></index-main>
  </el-row>
</template>

<script>
  import indexAside from '../components/category/category.vue'
  import indexMain from '../components/subject/subject.vue'
  export default {
    name: 'index',
    components: {
      indexAside,
      indexMain
    }
  }
</script>

<style>

</style>