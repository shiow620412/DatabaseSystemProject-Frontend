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
            <el-table :data="productArray" style="width: 100%;font-size: 15px" @selection-change="addToPayArray">
                <el-table-column type="selection" label="選取" min-width="10%" align="center"></el-table-column>
                <el-table-column label="商品圖片" min-width="30%" align="center">
                    <template v-slot="scope">
                        <el-image :src="scope.row.photo"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="productName" label="商品名稱" min-width="35%" align="center"></el-table-column>
                <el-table-column label="單價" min-width="15%" align="center">
                    <template v-slot="scope">
                        <el-text>&#36; {{ scope.row.price }}</el-text>
                    </template>
                </el-table-column>
                <el-table-column label="購買數量" min-width="35%" align="center">
                    <template v-slot="scope">
                        <el-input-number size="small" v-model="scope.row.quantity" :min="1" :max="scope.row.stock"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column label="小計" min-width="20%" align="center">
                    <template v-slot="scope">
                        <el-text>&#36; {{ scope.row.price * scope.row.quantity }}</el-text>
                    </template>
                </el-table-column>
                <el-table-column label="操作" min-width="15%" align="center">
                    <template v-slot="scope">
                        <!-- <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="dialogVisible = true"></el-button> -->
                        <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="setIndex(scope.$index) & (dialogVisible = true)"></el-button>
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
                <el-button :class="getCheckQuantity > 0 ? 'btn-primary' : 'btn-primary-disabled'">結帳</el-button>
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
import { ref } from 'vue'
import ShopCartController from "./ShopCart.controller";
export default {
    name: 'ShopCart',
    setup() {
        return {
            dialogVisible: ref(false),
        }
    },
    data() {
        return {
            productOfChecked: [],
            deleteIndex: 0,
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
        }
    },
    methods: ShopCartController,
    computed: {
        getQuantity() {
            return this.productArray.reduce((x, y) => x + y.quantity, 0)
        },
        getCheckQuantity() {
            return this.productOfChecked.reduce((x, y) => x + y.quantity, 0)
        },
        getTotalPrice() {
            return this.productOfChecked.reduce((x, y) => x + y.price * y.quantity, 0)
        }
    }
}
</script>
<style scoped lang="scss" src="./ShopCart.scss"></style>
