<template>
  <el-row class="product-briefing">
    <el-col :span="3"></el-col>
    <el-col :span="7" class="pro_Image">
        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
    </el-col>
    <el-col :span="11" class="pro_intro">
      <div class="pro_name"><h3>{{this.product.name}}</h3></div>
      <el-row class="row_three">
        <el-col :span="9"><div class="pro_price"><h1>TWD {{this.product.price}}</h1></div></el-col>
        <el-col :span="15"></el-col>
      </el-row>
      <el-row class="row_three">
        <el-col :span="6"><div class="quantity_text"><span>數量</span></div></el-col>
        <el-col :span="4"><div class="pro_input_quantity"><el-input-number v-model="num" @change="handleChange" :min="1" :max="99" label="描述文字"></el-input-number></div></el-col>
        <el-col :span="6"><div class="the_rest_of"><span>還剩下X個</span></div></el-col>
        <el-col :span="8"></el-col>
      </el-row>
      <el-row class="add_procat">
        <el-col :span="4"></el-col>
        <el-col :span="8"><br><br><el-button type="success">加入購物車</el-button></el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>

  <el-row class="product-detail">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="pro_specifications">
      <p class="pro_spec_title">商品規格</p>
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
          讀卡機：有
          連接埠：
          1x power connector
          1x card reader
          1x USB 3.2 Gen 1
          1x USB-C 3.2 Gen 1 (support data transfer only)
          1x HDMI 1.4b
          1x headphone / microphone combo jack (3.5mm)
          1x USB 2.0

          鍵盤：KB_GY_TC
          材質/尺寸：324.2 x 215.7 x 19.9 mm
          重量：1.41 kg
          作業系統：Windows 10 Home 64 bits
          電池：2CELL_38WH_INTERNAL
          指紋辨識：N
          國際條碼 (EAN)：195477494640
          保固：2年保固/加贈2年Premium Care
      </p> 
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>

  <el-row class="product-detail">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="pro_desciptions">
      <p class="pro_desc_title">商品詳情</p>
      <p class="pro_desc_text"> 上蓋顏色：灰
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
          讀卡機：有
          連接埠：
          1x power connector
          1x card reader
          1x USB 3.2 Gen 1
          1x USB-C 3.2 Gen 1 (support data transfer only)
          1x HDMI 1.4b
          1x headphone / microphone combo jack (3.5mm)
          1x USB 2.0
        </p>
    </el-col>
    <el-col :span="3"></el-col>
  </el-row>

  <el-row class="product-detail">
    <el-col :span="3"></el-col>
    <el-col :span="18" class="pro_copywriting">
      <p class="pro_copywriter_title">詳細介紹</p>
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
</template>

<script>
export default {
    name: 'top',
    data() {
      return {
        num: 1,
        product: {
          name: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
          price: 515,
          describe: {
            src1: "文字敘述",
            src2: "http:www..." 
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.product-briefing{
  margin-top: 20px;
}
.pro_Image{
  background-color:#ffffff;
  margin-left:auto;
  margin-right:auto;
}
.image{
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 2%;
  margin-left: 2%;
}
.pro_intro{
  background-color:#ffffff;
  margin-left:auto;
  margin-right:auto;
}
.pro_name{
  border-bottom-style: solid;
  border-color: #f5bb51;
  font-size: 16pt;
  margin-top: 40px;
  margin-right: 10%;
}
.pro_price{
  color: #FF0000;
  margin-right: 0%;
}
.row_three{
  margin-top: 50px;
}
.quantity_text{
  font-size: 14pt;
  margin-top: 8px;
  font-weight:bold;
}
.pro_input_quantity{
  margin-left: 2%;
}
.the_rest_of{
  margin-top: 18px;
  margin-left: 2%;
}
.add_procat{
  margin-top: 18px;
  margin-left: 6.8%;
  margin-bottom: 18px;
}
.product-detail{
  margin-top: 40px;
  margin-bottom: 40px;
}
.pro_specifications{
  background-color: #ffffff;
}
.pro_spec_title{
  background-color: #ddcfcf;
  font-size: 20pt;
  margin-top: 18px;
  margin-right: 70%;
}
.pro_spec_text{
  text-align:left;
  margin-left: 3.6%;
  margin-right: 3.6%;
}
.pro_desciptions{
   background-color: #ffffff;
}
.pro_desc_title{
  background-color: #ddcfcf;
  font-size: 20pt;
  margin-top: 18px;
  margin-right: 70%;
}
.pro_desc_text{
  text-align:left;
  margin-left: 3.6%;
  margin-right: 3.6%;
}

.pro_copywriting{
  background-color: #ffffff;
}
.pro_copywriter_title{
  background-color: #ddcfcf;
  font-size: 20pt;
  margin-top: 18px;
  margin-right: 70%;
}
.pro_copywriter_text{
  text-align:left;
  margin-left: 3.6%;
  margin-right: 3.6%;
}
</style>