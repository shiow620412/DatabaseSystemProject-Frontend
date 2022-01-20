<template>
  <div class="content">
    <ul>
      <el-table width="100%" :data="dataTable" :header-cell-style="{background:'#FCA96D',color:'#000000'}">
        <el-table-column label="訂單商品" min-width="10%" align="center">
          <template v-slot="scope">
            <el-image class="pay_image" :src="scope.row.Thumbnail"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="ProductName" min-width="35%" align="center" />
        <el-table-column prop="Price" label="單價" min-width="10%" align="center">
          <template v-slot="scope">
            <p>&#36; {{ scope.row.Price }}</p>
          </template>
        </el-table-column>>
        <el-table-column prop="Quantity" label="數量" min-width="5%" align="center">
          <template v-slot="scope">
            <p>x {{ scope.row.Quantity }}</p>
          </template>
        </el-table-column>
        <el-table-column prop="all_price" label="總共" min-width="10%" align="center">
          <template v-slot="scope">
            <p>&#36; {{ scope.row.Price * scope.row.Quantity }}</p>
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
        <el-col :span="10" style="text-align:left;">姓名： {{send_Info.Name}}</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="10" style="text-align:left;">電話： {{send_Info.Phone}}</el-col>
        <el-col :span="6"></el-col>
        <el-col :span="8"></el-col>
        <el-col :span="10" style="text-align:left;">住址： {{send_Info.Address}}</el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
    <div class="payment_choose" style="border:1px #cccccc solid; padding-bottom:15px;" cellpadding="10" border='1'>
      <el-row>
        <el-col :span="8" style="color:#0093e9; text-align:right; font-weight:bold;">
          <span style="position: relative; right:20px;">付款方式</span></el-col>
        <el-col :span="16">
          <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="貨到付款" name="cash">
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
            <el-tab-pane label="信用卡" name="credit">
              <el-row>
                <el-col :span="5">
                  <span>選擇付款帳戶</span>
                </el-col>
                <el-col :span="3">
                  <el-radio v-model="radio2">信用卡</el-radio>
                </el-col>
                <el-col :span="8">
                  <el-select v-model="value" filterable placeholder="Choose a credit card">
                    <el-option v-for="item in insert_card" :key="item" :label="item.CreditCardNumber" :value="item.CreditCardNumber">
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
        <el-button type="success" @click="completeOrder()">結帳</el-button>
      </div>
    </div>
  </div>
  <div>
    <el-dialog v-model="isEditShow" title="修改" width="30%">
      <el-form :model="form">
        <el-form-item label="姓名">
          <el-input v-model="form.Name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="電話">
          <el-input v-model="form.Phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="住址">
          <el-input v-model="form.Address" autocomplete="off"></el-input>
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
          <el-input v-model="Form.CreditCardNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="安全碼">
          <el-input v-model="Form.SecurityCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年">
          <el-input v-model="Form.ExpireYear" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="月">
          <el-input v-model="Form.ExpireMonth" autocomplete="off"></el-input>
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
import UserService from '../../services/user.service'
import CartService from '../../services/cart.service'
import OrderService from '../../services/order.service'
import { ElMessage } from 'element-plus'
  export default {
    name: 'payment',
    mounted() { 
      this.dataTable = JSON.parse(this.$route.query.dataTable);
      UserService.getCreditCard().then(data => {
        this.insert_card = data;
      });
      UserService.getInformation().then(data => {
        this.send_Info = data;
      });
    },
    data() {
      return {
        freight: 80,
        activeName: "cash",
        paymentMethod: 1,
        totalPice: [],
        dataTable: [],
        convertTable: [],
        radio1: 'COD',
        radio2: 'Card',
        choice: 0,
        isEditShow: false,
        isAddShow: false,
        send_Info: {},
        form: {},
        Form: {
          CreditCardNumber: "",
          SecurityCode: "",
          ExpireYear: "",
          ExpireMonth: ""
        },
        insert_card: [],
        value: '',
      }
    },
    methods: {
      completeOrder(){
        this.paymentMethod = this.activeName==='cash' ? 2 : 1;
        this.ConvertJsonToObject();
        OrderService.submitOrder(this.convertTable, this.paymentMethod).then(data => {
          ElMessage({
            message: data.message,
            type: 'success'
          }),
          this.dataTable.forEach(element => {
            CartService.deleteProductofCart(element.ProductID);
          })
          this.$router.push("/member/order");
        }).catch(() => {
          
        });
      },
      ConvertJsonToObject(){
        this.dataTable.forEach(element=>{
          this.convertTable.push({"productId": element.ProductID, "quantity": element.Quantity});
        })
      },
      handleClick() {
        
      },
      clickEdit() {
        this.isEditShow = true;
        this.form.Name = this.send_Info.Name;
        this.form.Phone = this.send_Info.Phone;
        this.form.Address = this.send_Info.Address;
      },
      windowsEditClose() {
        this.isEditShow = false;
        this.cleanEdit();
      },
      onEditSubmit() {
        this.isEditShow = false;
        this.send_Info.Name = this.form.Name;
        this.send_Info.Phone = this.form.Phone;
        this.send_Info.Address = this.form.Address;
        UserService.EditInformation(this.send_Info.Email, this.form.Name, this.form.Address, this.form.Phone);
        this.cleanEdit();
      },
      cleanEdit() {
        this.form.Name = '';
        this.form.Phone = '';
        this.form.Address = '';
      },

      clickAdd() {
        this.isAddShow = true;
        this.clearForm();
      },

      onAddSubmit() {
        this.insert_card.push({CreditCardNumber: this.Form.CreditCardNumber});
        UserService.AddCreditCard(this.Form.CreditCardNumber, this.Form.SecurityCode, this.Form.ExpireYear, this.Form.ExpireMonth);
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
        return this.dataTable.reduce((x, y) => x + y.Price * y.Quantity, 0)
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