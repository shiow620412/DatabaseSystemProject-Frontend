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
                        <el-image :src="scope.row.Thumbnail"></el-image>
                    </template>
                </el-table-column>
                <el-table-column prop="ProductName" label="商品名稱" min-width="35%" align="center"></el-table-column>
                <el-table-column label="單價" min-width="15%" align="center">
                    <template v-slot="scope">
                        <span>&#36; {{ scope.row.Price }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="購買數量" min-width="35%" align="center">
                    <template v-slot="scope">
                        <el-input-number v-if="scope.row.allowEdit" size="small" v-model="scope.row.Quantity" :min="1" :max="scope.row.Stock"></el-input-number>
                        <span v-else>{{ scope.row.Quantity }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="小計" min-width="20%" align="center">
                    <template v-slot="scope">
                        <span>&#36; {{ scope.row.Price * scope.row.Quantity }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作" min-width="20%" align="center">
                    <template v-slot="scope">
                        <el-button v-if="!scope.row.allowEdit" size="mini" @click="(scope.row.allowEdit = true) & editProduct(scope.row.ProductID)">編輯</el-button>
                        <el-button v-else size="mini" @click="(scope.row.allowEdit = false) & saveProduct(scope.row.ProductID, scope.row.Quantity)">儲存</el-button>
                        <el-button v-if="!scope.row.allowEdit" size="mini" @click="setDeleteID(scope.row.ProductID)" type="danger">刪除</el-button>
                        <el-button v-else size="mini" @click="(scope.row.allowEdit = false) & cancelEdit()">取消</el-button>
                        <!-- <el-button type="text" class="el-icon-delete" style="font-size: 18px;" @click="setDeleteID(scope.row.ProductID)"></el-button> -->
                    </template>
                </el-table-column>
            </el-table>
        </ul>
        <el-dialog v-model="dialogVisible" width="20%">
            <span>確定要刪除嗎?</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="(dialogVisible = false)">取消</el-button>
                    <el-button type="primary" @click="deleteProduct(this.proID)">確定</el-button>
                </span>
            </template>
        </el-dialog>

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
                <el-button :class="getCheckQuantity > 0 ? 'btn-primary' : 'btn-primary-disabled'" :disabled="this.productOfChecked.length === 0 ? true : false" @click="this.$router.push({path: '/payment', query: { dataTable: this.productOfChecked }})">買單</el-button>
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
import ShopCartService from "../../services/shopcart.service"
export default {
    emits: ['sendDataToPayment'],
    name: 'ShopCart',
    setup() {
        return {
            dialogVisible: ref(false),
        }
    },
    data() {
        return {
            productOfChecked: [],
            productArray: [],
            proID: 0,
            allowEdit: false,
        }
    },
    methods: ShopCartController,
    computed: {
        getQuantity() {
            return this.productArray.reduce((x, y) => x + y.Quantity, 0)
        },
        getCheckQuantity() {
            return this.productOfChecked.reduce((x, y) => x + y.Quantity, 0)
        },
        getTotalPrice() {
            return this.productOfChecked.reduce((x, y) => x + y.Price * y.Quantity, 0)
        }
    },
    mounted() {
        ShopCartService.getCart().then(data => {
            this.productArray = data;
        })
    }
}
</script>

<style scoped lang="scss" src="./ShopCart.scss"></style>
