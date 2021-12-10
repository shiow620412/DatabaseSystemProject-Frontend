<template>
  <el-row class="product-briefing">
    <el-col :span="3"></el-col>
    <el-col :span="7" class="pro_Image">
      <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
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
  <el-row>
    <el-col :span="3"></el-col>
    <el-col :span="18" class="product-detail">
      <div v-html="content"></div>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>
  <!--
  <el-row class="product-detail">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="pro_specifications">
      <span class="pro_spec_title">商品規格</span>
      <p class="pro_spec_text">Lenovo IdeaPad Slim 3 82KT001ETW 灰 詳細規格表
          上蓋顏色：灰
          處理器：AMD RYZEN_7_5700U_1.8G_8C_MB
          記憶體：4GB_DDR4_3200_SODIMM+4GB_DDR4_3200
          光碟機：NA
          硬碟：512GB_SSD_M.2_2280_NVME_QLC
          顯示晶片：Integrated AMD Radeon Graphics
          螢幕：14.0FHD_TN_AG_250N_N
          音訊：Stereo speakers, 1.5W x2, Dolby Audio
          網路攝影機：720p with Privacy Shutter
          有線網路：無
          無線網路：11ac, 2x2 + BT5.0
          藍芽：BT5.0
      </p> 
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>

  <el-row class="product-detail">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="pro_desciptions">
      <span class="pro_desc_title">商品詳情</span>
      <p class="pro_desc_text"> 上蓋顏色：灰
          處理器：AM0D RYZEN_7_5700U_1.8G_8C_MB
          記憶體：4GB_DDR4_3200_SODIMM+4GB_DDR4_3200
        </p>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>

  <el-row class="product-detail">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="pro_copywriting">
      <span class="pro_copywriter_title">詳細介紹</span>
      <div class="pro_content">
        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
        <div class="text">
          <p>女 保暖型運動Evolution圓領長袖內層衣</p>
          <p>【商品特色】</p>
          <p>以BODY MAPPING概念出發，採用無縫編織技術將身體依功能需求做區分，</p>  
        </div>
        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
      </div> 
  </el-col>
  <el-col :span="3" class="pro_copywriter"></el-col>
  </el-row>
  -->
</template>

<script>
  export default {
    name: 'top',
    data() {
      return {
        content: "<p>123</p>",
        num: 1,
        product: {
          name: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
          price: 515,
          stock: 10,
          describe: {
            src1: "文字敘述",
            src2: "http:www...",
            src3: "Image"
          }
        },
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>

<style scoped lang="scss" src="./product.scss"></style>