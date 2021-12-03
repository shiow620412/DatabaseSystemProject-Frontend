<template>
<div class="shoppingCart">

    <div class="cart-header">
        <div class="cart-header-content">
            <p>
                <i class="el-icon-shopping-cart-full" style="color:#ff6700; font-weight: 600;"></i>
                購物車
            </p>
        </div>
    </div>

    <div class="content" v-if="productArray.length > 0">
        <ul>
            <li class="header">
                <div class="pro-check">
                    <el-checkbox v-model="isAllCheck">全選</el-checkbox>
                </div>
                <div class="pro-img">商品圖片</div>
                <div class="pro-name">商品名稱</div>
                <div class="pro-price">單價</div>
                <div class="pro-quantitry">購買數量</div>
                <div class="pro-total">小計</div>
                <div class="pro-action">操作</div>
            </li>

            <li class="product-list" v-for="(item, index) in productArray" :key=index>
                <div class="pro-check">
                    <!-- <el-checkbox :value="item.check" @change="checkChange($event, index)"></el-checkbox> -->
                    <!-- <el-checkbox :value="item.check"></el-checkbox> -->
                    <el-checkbox v-model="item.check"></el-checkbox>
                </div>
                <div class="pro-img">
                    <img class="rounded" width="80" height="55" :src="item.photo">
                </div>
                <div class="pro-name">{{ item.productName }}</div>

                <div class="pro-price">{{ item.price }}元</div>
                <div class="pro-quantitry">
                    <!-- <el-input-number size="small" :value="item.quantitry" :min="1" :max="item.stock"></el-input-number> -->
                    <el-input-number size="small" v-model="item.quantitry" :min="1" :max="item.stock"></el-input-number>
                </div>
                <div class="pro-total pro-total-in">{{ item.quantitry * item.price }}元</div>
                <div class="pro-action">
                        <i class="el-icon-delete" style="font-size: 18px;" @click="deleteProduct(index)"></i>
                    <!-- <el-popover placement="right">
                        <p>確定要刪除嗎?</p>
                        <div style="text-align: right; margin: 10px 0 0">
                            <el-button type="primary" size="mini" @click="deleteProduct(index)">確定</el-button>
                        </div>
                        <i class="el-icon-error" style="font-size: 18px;"></i>
                    </el-popover> -->
                </div>
            </li>
        </ul>

        <div style="height: 20px; background-color: #f5f5f5"></div>
        <div class="cart-bar">
            <div class="cart-bar-left">
                <span class="cart-total">
                    共
                    <span class="cart-total-num">{{ getQuantitry() }}</span> 件商品，已選擇
                    <!-- <span class="cart-total-num">{{ this.productArray.length }}</span> 件商品，已選擇 -->
                    <span class="cart-total-num">{{ getCheckQuantitry() }}</span> 件
                </span>
            </div>
            <div class="cart-bar-right">
                <span>
                    <span class="total-price-title">合計：</span>
                    <span class="total-price">{{ getTotalPrice() }}元</span>
                </span>
                <div :class="getCheckQuantitry() > 0 ? 'btn-primary' : 'btn-primary-disabled'">結帳</div>
            </div>
        </div>
    </div>
    <div v-else class="cart-empty">
        <div class="empty">
            <h2>您未將任何商品加入購物車！</h2>
            <p>快去購物吧！</p>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'ShopCart',
    Comment: {

    },
    data() {
        return {
            isAllCheck: false,
            productArray: [{
                check: true,
                photo: require('../../assets/logo.png'),
                productName: 'T-shirt',
                price: 300,
                quantitry: 5,
                total: 1500,
                stock: 5
            }, {
                check: false,
                photo: require('../../assets/logo_test.png'),
                productName: 'Tableware',
                price: 100,
                quantitry: 3,
                total: 300,
                stock: 15
            }, {
                check: false,
                photo: require('../../assets/logo.png'),
                productName: 'Book',
                price: 50,
                quantitry: 7,
                total: 350,
                stock: 35
            }, {
                check: false,
                photo: require('../../assets/logo_test.png'),
                productName: 'Bag',
                price: 550,
                quantitry: 1,
                total: 550,
                stock: 3
            }, {
                check: false,
                photo: require('../../assets/logo.png'),
                productName: 'Pencil Box',
                price: 135,
                quantitry: 1,
                total: 135,
                stock: 2
            }]
        }
    },
    methods: {
        // ClickDown: function (num) {
        //     // alert("減少數量");
        //     if (this.productArray[num].quantitry === 1) {
        //         if (confirm("確定要將此商品從購物車中移除?")) {
        //             this.productArray.splice(num, 1)
        //         }
        //     } else if (this.productArray[num].quantitry > 1) {
        //         this.productArray[num].quantitry--
        //     }
        // },
        // ClickUp: function (num, maxCt) {
        //     // alert("增加數量")
        //     if (this.productArray[num].quantitry < maxCt) {
        //         this.productArray[num].quantitry++
        //     } else {
        //         alert('此商品的數量只剩下 ' + maxCt + ' 個!')
        //     }
        // },
        deleteProduct: function (num) {
            if (confirm("確定要將此商品從購物車中移除?")) {
            this.productArray.splice(num, 1)
            }
        },
        getQuantitry: function() {
            let totalQuantitry = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                const temp = this.productArray[i];
                totalQuantitry += temp.quantitry;
            }
            return totalQuantitry;
        },
        // updateShoppingCart (state, payload) {
        //     if (payload.prop == "quantitry") {
        //         if (this.productArray[payload.key].maxNum < payload.val) {
        //             return;
        //         }
        //         if (payload.val < 1) {
        //             return;
        //         }
        //     }
        //     this.productArray[payload.key][payload.prop] = payload.val;
        // },
        // checkChange(val, key) {
        //     this.updateShoppingCart({
        //         key: key,
        //         prop: "check",
        //         val: val
        //     });
        // },
        getCheckQuantitry: function() {
            let totalQuantitry = 0
            for (let i = 0; i < this.productArray.length; i++) {
                const temp = this.productArray[i]
                if (temp.check) {
                    totalQuantitry += temp.quantitry
                }
            }
            return totalQuantitry
        },
        getTotalPrice: function() {
            let totalPrice = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                const temp = this.productArray[i];
                if (temp.check) {
                    totalPrice += temp.price * temp.quantitry;
                }
            }
            return totalPrice;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import '../../assets/css/ShoppingCart.css';

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
</style>
