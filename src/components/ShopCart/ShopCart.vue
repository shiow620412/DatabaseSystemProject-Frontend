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

            <el-table :data="productArray" style="width: 100%;" @selection-change="test">
                <el-table-column type="selection" label="選取" min-width="10%"></el-table-column>
                <el-table-column label="商品圖片" min-width="30%">
                    <template v-slot="scope">
                        <el-image :src="scope.row.photo"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="productName" label="商品名稱" min-width="35%"></el-table-column>
                <el-table-column prop="price" label="單價" min-width="15%"></el-table-column>
                <el-table-column label="購買數量" min-width="35%">
                    <template v-slot="scope">
                        <el-input-number size="small" v-model="scope.row.quantity" :min="1" :max="scope.row.stock"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column label="小計" min-width="20%">
                    <template v-slot="scope">
                        <el-text>{{ scope.row.price * scope.row.quantity }}</el-text>
                    </template>
                </el-table-column>
                <el-table-column label="操作" min-width="15%">

                    <template v-slot="scope">
                        <!-- <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="dialogVisible = true"></el-button> -->
                        <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="getIndex(scope.$index) & (dialogVisible = true)"></el-button>
                        <el-dialog v-model="dialogVisible" width="30%">
                            <span>您確定要將此商品從購物車中移除嗎?</span>
                            <template #footer>
                                <span class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取消</el-button>
                                    <el-button type="primary" @click="deleteProduct()">確定</el-button>
                                </span>
                            </template>
                        </el-dialog>
                    </template>

                </el-table-column>
            </el-table>

            <!-- <li class="header">
                <div class="pro-check">
                    <el-checkbox v-model="isAllCheck" @click="checkAll()">全選</el-checkbox>
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
                    <el-checkbox v-model="item.check" @change="allCheck()"></el-checkbox>
                </div>
                <div class="pro-img">
                    <img class="rounded" width="80" height="55" :src="item.photo">
                </div>
                <div class="pro-name">{{ item.productName }}</div>

                <div class="pro-price">{{ item.price }}元</div>
                <div class="pro-quantitry">
                    <el-input-number size="small" v-model="item.quantity" :min="1" :max="item.stock"></el-input-number>
                </div>
                <div class="pro-total pro-total-in">{{ item.quantity * item.price }}元</div>
                <div class="pro-action">
                    <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="dialogVisible = true"></el-button>
                    <el-dialog v-model="dialogVisible" width="30%" show-close=false>
                        <span>您確定要將此商品從購物車中移除嗎?</span>
                        <template #footer>
                            <span class="dialog-footer">
                                <el-button @click="dialogVisible = false">取消</el-button>
                                <el-button type="primary" @click="deleteProduct(index)">確定</el-button>
                            </span>
                        </template>
                    </el-dialog>
                </div>
            </li> -->
        </ul>

        <div style="height: 20px; background-color: #f5f5f5"></div>
        <div class="cart-bar">
            <div class="cart-bar-left">
                <span class="cart-total">
                    共
                    <span class="cart-total-num">{{ getQuantity }}</span> 件商品，已選擇
                    <span class="cart-total-num">{{ getCheckQuantity }}</span> 件
                </span>
            </div>
            <div class="cart-bar-right">
                <span>
                    <span class="total-price-title">合計：</span>
                    <span class="total-price">{{ getTotalPrice }}元</span>
                </span>
                <!-- <router-link :to="getCheckQuantity() > 0 ? '../products' : ''"> -->
                <div :class="getCheckQuantity > 0 ? 'btn-primary' : 'btn-primary-disabled'"><button @click="clet">結帳</button></div>
                <!-- </router-link> -->
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
import {
    ref
} from 'vue'

export default {
    name: 'ShopCart',
    setup() {
        return {
            dialogVisible: ref(false),
        }
    },
    Comment: {

    },
    data() {
        return {
            isAllCheck: false,
            productArray: [{
                productID: 1,
                photo: require('../../assets/logo.png'),
                productName: 'T-shirt',
                price: 300,
                quantity: 5,
                stock: 5
            }, {
                productID: 2,
                photo: require('../../assets/logo_test.png'),
                productName: 'Tableware',
                price: 100,
                quantity: 3,
                stock: 15
            }, {
                productID: 3,
                photo: require('../../assets/logo.png'),
                productName: 'Book',
                price: 50,
                quantity: 7,
                stock: 35
            }, {
                productID: 4,
                photo: require('../../assets/logo_test.png'),
                productName: 'Bag',
                price: 550,
                quantity: 1,
                stock: 3
            }, {
                productID: 5,
                photo: require('../../assets/logo.png'),
                productName: 'Pencil Box',
                price: 135,
                quantity: 1,
                stock: 2
            }],
            productOfChecked: [],
            deleteIndex: 0,
        }
    },
    methods: {
        getIndex(num) {
            console.log(num);
            this.deleteIndex = num;
        },
        deleteProduct() {
            let num = this.deleteIndex;
            console.log(num)
            this.productArray.splice(num, 1)
            this.dialogVisible = false
        },
        checkAll() {
            if (this.isAllCheck) {
                for (let i = 0; i < this.productArray.length; i++) {
                    this.productArray[i].check = false;
                }
            } else {
                for (let i = 0; i < this.productArray.length; i++) {
                    this.productArray[i].check = true;
                }
            }
        },
        allCheck() {
            let tempNum = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                if (this.productArray[i].check) {
                    tempNum++;
                }
            }
            if (tempNum === this.productArray.length) {
                this.isAllCheck = true;
            } else {
                this.isAllCheck = false;
            }
        },
        test(val) {
            this.productOfChecked = val
            // for (let i = 0; i < this.productArray.length; i++) {
            //     for (let j = 0; j < val.length; j++) {
            //         if (val[j].productID === this.productArray[i].productID) {
            //             this.productArray[i].check = !this.productArray[i].check;
            //         }
            //     }
            // }
            console.log(this.productOfChecked)
        },
        clet() {
            console.log(this.productOfChecked)
            console.log(this.productArray)
        }
    },
    computed: {
        getQuantity() {
            let totalQuantitry = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                const temp = this.productArray[i];
                totalQuantitry += temp.quantity;
            }
            return totalQuantitry;
        },
        getCheckQuantity() {
            let totalQuantity = 0
            for (let i = 0; i < this.productOfChecked.length; i++) {
                const temp = this.productOfChecked[i]
                totalQuantity += temp.quantity
            }
            return totalQuantity
        },
        getTotalPrice() {
            let totalPrice = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                const temp = this.productArray[i];
                if (temp.check) {
                    totalPrice += temp.price * temp.quantity;
                }
            }
            return totalPrice;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import './ShopCart.scss';

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
