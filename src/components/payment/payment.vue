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
        <el-table-column label="商品圖片" min-width="10%" align="center">
          <template v-slot="scope">
            <el-image class="pay_image" :src="scope.row.photo"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="itemName" label="商品名稱"  min-width="45%" align="center" />
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
    <el-row>
      <el-col :span="14"></el-col>
      <el-col :span="6">運費</el-col>
      <el-col :span="4">
        <span class=>$ {{ dataTable[0].freight }}</span>
      </el-col>
    </el-row>
    <el-row> 
      <el-col :span="14"></el-col>
      <el-col :span="6">
        <span class="total-price-title">合計</span>
      </el-col>
      <el-col :span="4">
        <span class="total-price">{{ getTotalPrice + this.dataTable[0].freight }} 元</span>
      </el-col>
    </el-row>
    <el-button :class="getCheckQuantity > 0 ? 'btn-primary' : 'btn-primary-disabled'">下訂單</el-button>    

  </div>
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
      return {
        totalPice:[],
        dataTable: [{
            productID: 1,
            photo: require("../../assets/show1.jpg"),
            itemName: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
            quantity: 3,
            price: 100,
            freight:80,
          },
          {
            productID: 2,
            photo: require("../../assets/show2.jpg"),
            itemName: "-198498484｜ 96LINE.TW 韓國代購",
            quantity: 5,
            price: 1089,
            freight:80,
          },
        ],
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
      }
    }
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
  .AA{
    margin-left: 12%;
  }
  .total-price{
    margin-left: 22%;
  }
  /* .freight{
     border-top: 4px #FFCDB0 solid;
     border-bottom: 4px #FFCDB0 solid;
  } */

</style>