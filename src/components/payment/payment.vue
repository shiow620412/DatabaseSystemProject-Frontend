<template>
  <el-row class="product-briefing">
    <el-col :span="3"></el-col>
    <el-col :span="7" class="pro_Image">
      <div class="image"><img :src="this.product.picture"></div>
    </el-col>
    <el-col :span="11" class="pro_intro">
      <div class="pro_name">
        <h3>{{this.product.name}}</h3>
      </div>
      <el-row class="row_three">
        <el-col :span="9">
          <div class="pro_price">
            <h1>TWD {{this.product.price}}</h1>
          </div>
        </el-col>
        <el-col :span="15"></el-col>
      </el-row>
      <el-row class="row_three">
        <el-col :span="6">
          <div class="quantity_text"><span>數量</span></div>
        </el-col>
        <el-col :span="6">
          <div class="pro_input_quantity">
            <el-input-number v-model="num" @change="handleChange" :min="1" :max=product.stock label="描述文字">
            </el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="the_rest_of"><span>還剩下{{product.stock}}個</span></div>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row class="add_procar">
        <el-col :span="4"></el-col>
        <el-col :span="8"><br><br>
          <el-button type="success">加入購物車</el-button>
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
  <el-row class="product-briefing">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="product-detail">
      <div v-html="content"></div>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'top',
    data() {
      
    },
  };
</script>

<style scoped>



</style>