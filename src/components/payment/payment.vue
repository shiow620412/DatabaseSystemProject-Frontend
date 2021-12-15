<template>
  <el-container>
    <el-header style="background-color: #FCA96D"></el-header>
      <el-row class="product-briefing">
        <el-col :span="4">
          <div><img class="pay_image" src="../../assets/show1.jpg"></div>
          </el-col>
        <el-col :span="6">
          <p>-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購</p>
        </el-col>
        <el-col :span="5">3個</el-col>
        <el-col :span="5">$400</el-col>
      </el-row>
  </el-container>
  <!--
  <el-row class="product-briefing">
    <el-col :span="7"></el-col>
    <el-col :span="10">
    </el-col>
    <el-col :span="7"></el-col>
  </el-row>
-->
</template>

<script>
  export default {
    name: 'payment',
    data() {
      
    },
  };
</script>

<style scoped>
  .product-briefing {
    background-color: #EFFFE4;
  }
  .pay_image{
    width: 30%;
  }


</style>