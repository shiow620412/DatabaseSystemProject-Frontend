<!--remi branch
test-->
<template>
  <div class="product-briefing">
    <el-row :gutter="20">
        <el-col :span="10"><div class="pro_Image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div></el-col>
        <el-col :span="14"><div class="pro_intro">
            <div class="pro_name"><h3> -特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購</h3></div>
            <div class="pro_price"><p></p><br><h1>$515</h1></div>

            
            <el-row :gutter="20">
              <el-col :span="5"><div class="quantity_text">數量</div></el-col>
              <el-col :span="5"><div class="pro_input_quantity"><el-input-number v-model="num" @change="handleChange" :min="1" :max="99" label="描述文字"></el-input-number></div></el-col>
              <el-col :span="6"><div class="shpping_cat"><br><br><el-button type="success">加入購物車</el-button></div></el-col>
              <el-col :span="6"></el-col>
            </el-row>
            
            
            
            
        </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name: 'top',
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pro_name{
  position: relative;
  margin-right: 220px;
}
.pro_price{
  position: relative;
  margin-right: 670px;
  color: #FF0000;
}
.quantity_text{
  background-color:#C7FF91;
  width:100px;
  height:50px;
  margin-right: 100px;
  line-height:50px
}
.pro_input_quantity{
  width:100px;
  height:50px;
  margin-right: 100px;
  line-height:50px
}

</style>
