<template>
  <div style="background-color: #EFFFE4; padding-top:2%;">

    <el-row class="product-briefing">
        <el-col :span="3"></el-col>
        <el-col :span="7" class="pro_Image">
            <el-image fit="contain" :src="this.imgURL + this.product.Thumbnail" />


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
                <el-input-number v-model="num" @change="handleChange" :min="0" :max="this.product.Stock" label="描述文字">
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
              <el-button v-if="num<=0" type="success" disabled>加入購物車</el-button>
              <el-button v-else type="success" @click="putProduct(this.$route.params.id, num)">加入購物車</el-button>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
        </el-col>
        <el-col :span="3"></el-col>
    </el-row>
    <el-row class="product-briefing">
        <el-col :span="3"></el-col>
        <el-col :span="18" class="product-detail">
            <div class="ql-editor" v-html="this.product.Description"></div>
        </el-col>
        <el-col :span="3"></el-col>
    </el-row>
  </div>
</template>

<script>
import productService from "../../services/product.service"
import CartService from "../../services/cart.service"
import { ElMessage } from 'element-plus'
  export default {
    name: 'top',
    props: ["SimulatedProduct"],
    data() {
      return {
        content: "<p>123</p>",
        num: 0,
        product: {},
      };
    },
    methods: {
      putProduct(id, num){
        CartService.PutProductIntoCart(id, num).then(() => {
          
          ElMessage({
            message:'已加入購物車',
            type: 'success'
          })
        }).catch((error) => {
          alert(error.response.data.message);
          this.$router.push("/user/login");
        })
      }
    },
    computed: {
        ButtonActivity: function () {
            if (this.$route.params.id) {
                return true;
            } else {
                return false;
            }
        }
    },
    mounted() {
        if (this.$route.params.id) {
            productService.getProductDetail(this.$route.params.id).then(data => {
                this.product = data;
            });
        } else if (this.SimulatedProduct) {
            this.product = this.SimulatedProduct;
        }
    }
};
</script>

<style scoped lang="scss" src="./product.scss"></style>
