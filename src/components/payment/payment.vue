<template>
  <!-- <el-container>
    <el-header style="background-color: #FCA96D"></el-header>
    <el-row class="product-briefing" v-for="i in dataTable" :key="i">
      <el-col :span="3"></el-col>
      <el-col :span="4">
        <div><img class="pay_image" :src="i.photo" ></div>
      </el-col>
      <el-col :span="6" style="margin: auto auto;"><p>{{i.itemName}}</p></el-col>
      <el-col :span="3" style="margin: auto auto;">{{i.quantity}}個</el-col>
      <el-col :span="3" style="margin: auto auto;">$ {{i.price*i.quantity}}</el-col>
      <el-col :span="1"></el-col>
    </el-row>
  </el-container> -->

  <div class="content">
    <ul>
      <el-table width="100%" :data="dataTable" :header-cell-style="{background:'#FCA96D',color:'#000000'}">
        <el-table-column label="訂單商品" min-width="10%" align="center">
          <template v-slot="scope">
            <el-image class="pay_image" :src="scope.row.photo"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="itemName" min-width="45%" align="center" />
        <el-table-column prop="quantity" label="數量"  min-width="5%" align="center">
          <template v-slot="scope">
            <el-text>x {{ scope.row.quantity }}</el-text>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="價格"  min-width="10%" align="center">
          <template v-slot="scope">
            <el-text>&#36; {{ scope.row.price * scope.row.quantity }}</el-text>
          </template>
        </el-table-column>>
      </el-table>
    </ul>
    <div class="send_content" style="border:1px #cccccc solid; padding-bottom:4px;" cellpadding="10" border='1'>
      <el-row>
        <el-col :span="14"><span  style="color:#0093e9; font-weight:bold;">寄送資訊</span></el-col>
        <el-col :span="10"><el-button type="primary" border-radius=8px; @click="clickEdit()">修改</el-button></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="10" style="text-align:left;">住址： {{send_Info.address}}</el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="payment_choose" style="border:1px #cccccc solid;" cellpadding="10" border='1'>
      <el-row>
        <el-col :span="8" style="color:#0093e9; position: relative; left: 152px; font-weight:bold;">付款方式</el-col>
        <el-col :span="16">
          <el-tabs type="card" @tab-click="handleClick" stretch="true">
            <el-tab-pane label="貨到付款">
              <el-radio-group v-model="radio"  style="margin-right: 550px;">
                <el-radio :label="scs">貨到付款</el-radio>
              </el-radio-group>
            </el-tab-pane>
            <el-tab-pane label="信用卡">
              <el-radio-group v-model="radio"  style="margin-right: 550px;">
                <el-radio :label="scs">信用卡</el-radio>
              </el-radio-group>
            </el-tab-pane>
          </el-tabs>
          </el-col>
      </el-row>
      <!-- <el-row >
          <el-col :span="8"></el-col>
          <el-col :span="10" style="text-align:left;">
            <div>
              <el-radio-group v-model="tabPosition" @tab-click="handleClick" style="margin-bottom: 30px" stretch="true">
                <el-radio-button label="top">top</el-radio-button>
                <el-radio-button label="right">right</el-radio-button>
              </el-radio-group>
              <el-tabs :tab-position="tabPosition" style="height: 200px" stretch="true">
            <el-tab-pane label="貨到付款"> </el-tab-pane>
            <el-tab-pane label="信用卡">Config</el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="6"></el-col>
        </el-row> -->
    </div>

    <div class="summarize"  style="border:1px #cccccc solid;" cellpadding="10" border='1'>
      <el-row width="100%" :data="send_Info" :header-cell-style="{background:'#FCA96D',color:'#000000'}">
        <el-col :span="8"></el-col>
        <el-col :span="12">運費</el-col>
        <el-col :span="4">
          <span class="freight_text" >$ {{ this.freight }}</span>
        </el-col>
      </el-row>
      <el-row> 
        <el-col :span="8"></el-col>
        <el-col :span="12">
          <span class="total-price-title">合計</span>
        </el-col>
        <el-col :span="4">
          <span class="total-price">{{ getTotalPrice + this.freight }} 元</span>
        </el-col>
      </el-row>
      <div style="padding-bottom:10px;"><el-button type="success" >結帳</el-button></div>
   </div>
  </div>
  
 <!-- style="border:3px #FFD382 dashed;" cellpadding="10" border='1' -->
  <div>
    <el-dialog v-model="isEditShow" title="修改" width="30%">
      <el-form :model="form">
        <el-form-item label="姓名">
            <el-input v-model="form.customer_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="電話">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="住址">
            <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
          <span class="dialog-footer">
              <el-button @click="windowsEditClose()">取消</el-button>
              <el-button type="primary" @click="onEditSubmit()">完成</el-button>
          </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'payment',    
    data() {
      return {
        freight: 80,
        totalPice:[],
        dataTable: [{
            productID: 1,
            photo: require("../../assets/show1.jpg"),
            itemName: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
            quantity: 3,
            price: 100,
            // freight:80,
          },
          {
            productID: 2,
            photo: require("../../assets/show2.jpg"),
            itemName: "-198498484｜ 96LINE.TW 韓國代購",
            quantity: 5,
            price: 1089,
            // freight:80,
          },
        ],
        // defineComponent:{
        //   radio1: 'New York',
        // },
        // radio1: 'New York',
        radio: 'scs',
        isEditShow: false,
        tabPosition: 'left',
        send_Info:{
          accountNum: 515,
          customer_name: "黃XX",
          phone: '091561156',
          address: "新北市某一區某一路某一小塊地方某一小塊地方",
        },
        form: {
          customer_name: '',
          phone: '',
          address: '',
        },         
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      },
      clickEdit(){
          this.isEditShow = true;
          this.form.customer_name = this.send_Info.customer_name;
          this.form.phone = this.send_Info.phone;
          this.form.address = this.send_Info.address;
      },
      windowsEditClose(){
          this.isEditShow = false;
          this.cleanEdit();
      },
      onEditSubmit(){
          this.isEditShow = false;
          this.send_Info.customer_name = this.form.customer_name;
          this.send_Info.phone = this.form.phone;
          this.send_Info.address = this.form.address;
          this.cleanEdit();
      },
      cleanEdit(){
          this.form.customer_name = '';
          this.form.phone = '';
          this.form.address = '';
      }
    },
    // methods: ShopCartController,
    // computed: {
    //     getTotalPrice() {
    //         return this.totalPice.reduce((x, y) => x + y.price , 0)
    //     }
    // }
    computed: {
      getTotalPrice() {
        return this.dataTable.reduce((x, y) => x + y.price * y.quantity, 0)
      },
      // getTest() {
      //   return this.$route.query.dataTable;
      // }
    },
  };
</script>

<style scoped>
  ul {
      list-style-type: none;
      padding: 0;
  }
  .product-briefing {
    height: 100px;
    border-style:solid;
    background-color: #FFC093;
  }
  .pay_image {
    width: 50%;
    margin-top: 8px;
    background-color: #000000;
    background-color: #b0c9d8;
  }
  .content {
    width: 1225px;
    margin: 0 auto;
    background-color: #fff;
  }
  .content ul {
    background-color: #fff;
    color: #424242;
    line-height: 70px;
  }
  .freight_text{
    margin-left: 12%;
  }
  .total-price{
    margin-left: 22%;
  }
  .send_content{
    line-height: 45px;
    width: 1223px;
    margin: 0 auto;
    background-color: #f7eed7;
  }
  .payment_choose{
    width: 1223px;
    line-height: 45px;
    margin: 0 auto;
    background-color: #fff;
  }
  .summarize{
    width: 1223px;
    line-height: 45px;
    margin: 0 auto;
    background-color: #fff;
  }
  .total-price-title{
    color: #ff6700;
    /* size: 25px; */
  }
  .total-price{
    color: #ff6700;
    /* size: 25px; */
  }

</style>