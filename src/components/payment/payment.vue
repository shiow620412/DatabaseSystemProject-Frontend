<template>
  <div class="content">
    <ul>
      <el-table width="100%" :data="dataTable" :header-cell-style="{background:'#FCA96D',color:'#000000'}">
        <el-table-column label="訂單商品" min-width="10%" align="center">
          <template v-slot="scope">
            <el-image class="pay_image" :src="scope.row.photo"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="itemName" min-width="35%" align="center" />
        <el-table-column prop="price" label="單價" min-width="10%" align="center">
          <template v-slot="scope">
            <p>&#36; {{ scope.row.price }}</p>
          </template>
        </el-table-column>>
        <el-table-column prop="quantity" label="數量" min-width="5%" align="center">
          <template v-slot="scope">
            <p>x {{ scope.row.quantity }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="all_price" label="總共" min-width="10%" align="center">
          <template v-slot="scope">
            <p>&#36; {{ scope.row.price * scope.row.quantity }}</p>
          </template>
        </el-table-column>>
      </el-table>
    </ul>
    <div class="send_content" style="border:1px #cccccc solid; padding-bottom:4px;" cellpadding="10" border='1'>
      <el-row>
        <el-col :span="14"><span style="color:#0093e9; font-weight:bold;">寄送資訊</span></el-col>
        <el-col :span="10">
          <el-button border-radius=8px; @click="clickEdit()">修改</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8"></el-col>
        <el-col :span="10" style="text-align:left;">姓名： {{send_Info.customer_name}}</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="10" style="text-align:left;">電話： {{send_Info.phone}}</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="10" style="text-align:left;">住址： {{send_Info.address}}</el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="payment_choose" style="border:1px #cccccc solid; padding-bottom:15px;" cellpadding="10" border='1'>
      <el-row>
        <el-col :span="8" style="color:#0093e9; text-align:right; font-weight:bold;">
          <span style="position: relative; right:20px;">付款方式</span></el-col>
        <el-col :span="16">
          <el-tabs type="card" @tab-click="handleClick">
            <el-tab-pane label="貨到付款">
              <el-row>
                <el-col :span="5">
                  <span>貨到付款</span>
                </el-col>
                <el-col :span="5">
                  <el-radio v-model="radio1">貨到付款</el-radio>
                </el-col>
                <el-col :span="14"></el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="信用卡">
              <el-row>
                <el-col :span="5">
                  <span>選擇付款帳戶</span>
                </el-col>
                <el-col :span="3">
                  <el-radio v-model="radio2">信用卡</el-radio>
                </el-col>
                <el-col :span="8">
                  <el-select :data="insert_card" v-model="value" filterable placeholder="Choose a credit card">
                    <el-option v-for="item in insert_card" :key="item.number" :label="item.label" :value="item.number">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :span="8">
                  <div style="text-align:left;">
                    <el-button @click="clickAdd()">＋ 使用新信用卡付款</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </div>
    <div class="summarize" style="border:1px #cccccc solid;" cellpadding="10" border='1'>
      <el-row width="100%" :data="send_Info" :header-cell-style="{background:'#FCA96D',color:'#000000'}">
        <el-col :span="8"></el-col>
        <el-col :span="12">運費</el-col>
        <el-col :span="4">
          <span class="freight_text">$ {{ this.freight }}</span>
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
      <div style="padding-bottom:10px;">
        <el-button type="success">結帳</el-button>
      </div>
    </div>
  </div>
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
  <div>
    <el-dialog v-model="isAddShow" title="使用新信用卡付款" width="30%">
      <el-form :model="Form">
        <el-form-item label="卡號">
          <el-input v-model="Form.number" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="安全碼">
          <el-input v-model="Form.safeCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年">
          <el-input v-model="Form.year" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="月">
          <el-input v-model="Form.month" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addClose()">取消</el-button>
          <el-button type="primary" @click="onAddSubmit()">完成</el-button>
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
        totalPice: [],
        dataTable: [{
            productID: 1,
            photo: require("../../assets/show1.jpg"),
            itemName: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
            price: 100,
            quantity: 3,
            // freight:80,
          },
          {
            productID: 2,
            photo: require("../../assets/show2.jpg"),
            itemName: "-198498484｜ 96LINE.TW 韓國代購",
            price: 800,
            quantity: 5,
            // freight:80,
          },
        ],
        radio1: 'COD',
        radio2: 'Card',
        choice: 0,
        isEditShow: false,
        isAddShow: false,
        send_Info: {
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
        Form: {
          number: "",
          safeCode: "",
          year: "",
          month: "",
        },
        insert_card: [{
            number: '20160503',
            safeCode: 123,
            deadline: '2013/02',
          },
          {
            number: '20160502',
            safeCode: 456,
            deadline: '2013/02',
          },
          {
            number: '20160504',
            safeCode: 789,
            deadline: '2013/02',
          },
          {
            number: '20160501',
            safeCode: 461,
            deadline: '2013/02',
          },
        ],
        value: '',
      }
    },
    methods: {
      handleClick(tab) {
        console.log(tab.uid);
      },
      clickEdit() {
        this.isEditShow = true;
        this.form.customer_name = this.send_Info.customer_name;
        this.form.phone = this.send_Info.phone;
        this.form.address = this.send_Info.address;
      },
      windowsEditClose() {
        this.isEditShow = false;
        this.cleanEdit();
      },
      onEditSubmit() {
        this.isEditShow = false;
        this.send_Info.customer_name = this.form.customer_name;
        this.send_Info.phone = this.form.phone;
        this.send_Info.address = this.form.address;
        this.cleanEdit();
      },
      cleanEdit() {
        this.form.customer_name = '';
        this.form.phone = '';
        this.form.address = '';
      },

      clickAdd() {
        this.isAddShow = true;
        this.clearForm();
      },

      onAddSubmit() {
        this.insert_card.push({
          number: this.Form.number
        })
        this.isAddShow = false;
        this.clearForm();
      },
      addClose() {
        this.isAddShow = false;
        this.clearForm();
      },
      clearForm() {
        this.Form.number = "";
        this.Form.safeCode = "";
        this.Form.year = "";
        this.Form.month = "";
      },
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
    border-style: solid;
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

  .freight_text {
    margin-left: 12%;
  }

  .total-price {
    margin-left: 22%;
  }

  .send_content {
    line-height: 45px;
    width: 1223px;
    margin: 0 auto;
    background-color: #ffffff;
  }

  .payment_choose {
    width: 1223px;
    line-height: 45px;
    margin: 0 auto;
    background-color: #fff;
  }

  .summarize {
    width: 1223px;
    line-height: 45px;
    margin: 0 auto;
    background-color: #fff;
  }

  .total-price-title {
    color: #ff6700;
    /* size: 25px; */
  }

  .total-price {
    color: #ff6700;
    /* size: 25px; */
  }
</style>