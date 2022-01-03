<template>
  <el-row class="product-briefing">
    <el-col :span="3"></el-col>
    <el-col :span="7" class="pro_Image">
      <div class="image"><img src="../../assets/al.jpg"></div>
    </el-col>
    <el-col :span="11" class="pro_intro">
      <div class="pro_name">
        <h3>{{this.product.ProductName}}</h3>
      </div>
      <el-row class="row_three">
        <el-col :span="9">
          <div class="pro_price">
            <h1>$ {{this.product.Price}}</h1>
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
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="this.product.Stock" label="描述文字">
            </el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="the_rest_of"><span>還剩下{{this.product.Stock}}個</span></div>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
      <el-row class="add_procar">
        <el-col :span="4"></el-col>
        <el-col :span="8"><br><br>
          <el-button type="success" @click="putProduct(this.$route.params.id, num)">加入購物車</el-button>
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
import productService from "../../services/product.service"
import CartService from "../../services/cart.service"
  export default {
    name: 'top',
    data() {
      return {
        content: "<p>123</p>",
        num: 1,
        product: {},
      };
    },
    methods: {
      putProduct(id, num){
        CartService.PutProductIntoCart(id, num).then(data => {
          console.log(data.message);
        }).catch((error) => {
          alert(error.response.data.message);
        })
      },
      handleChange(value) {
        console.log(value);
      }
    },
    mounted() {
      productService.getProductdetail(this.$route.params.id).then(data => {
          this.product = data;
      })
    },
  };
</script>

<style scoped lang="scss" src="./product.scss"></style>