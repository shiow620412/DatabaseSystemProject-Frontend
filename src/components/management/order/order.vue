<template>
<div>
    <div>
        <div>
            <el-row class="header" justify="center">
                <div margin-top="20px">
                    <el-text style="font-size: 25px;font-weight: bold">訂單管理</el-text>
                </div>
            </el-row>
            <el-row>
                <el-table :data="productArray" style="width: 100%;font-size: 15px" row-style="height: 8vh">
                    <el-table-column prop="orderID" label="訂單編號" min-width="15%" align="center"></el-table-column>
                    <el-table-column prop="memberID" label="會員ID" min-width="25%" align="center"></el-table-column>
                    <el-table-column prop="date" label="日期" min-width="25%" align="center"></el-table-column>
                    <el-table-column label="總金額" min-width="25%" align="center">
                        <template v-slot="scope">
                        <p>&#36; {{ scope.row.total }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column prop="paymentMethod" label="付款方式" min-width="25%" align="center"></el-table-column>
                    <el-table-column label="狀態" min-width="20%" align="center">
                        <template v-slot="scope" v-if="this.isEdit & !this.isSave">
                            <el-tag :type="(scope.row.orderStatus === 1) ? 'warning' : (scope.row.orderStatus === 2) ? 'success' : 'info'" size="medium">{{ changeStatusChinese(scope.row.orderStatus) }}</el-tag>
                        </template>
                        <template v-slot="scope" v-else-if="!this.isEdit & this.isSave">
                            <el-select v-model="scope.row.orderStatus" placeholder="Select" size="medium">
                                <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" min-width="13%" align="center">
                        <template #default="scope">
                            <el-button size="mini" @click="clickEdit(scope.$index, scope.row) & (this.isSave = true) & (this.isEdit = false) & (this.isDelete = true)" v-show="this.isEdit">編輯</el-button>
                            <el-button size="mini" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isSave">儲存</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-row>

            <ul>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import {
    ref
} from 'vue'
import orderController from "./order.controller";
export default {
    name: 'order',
    setup() {
        return {
            statusArray: ref([{
                    value: 1,
                    label: '確認中',
                },
                {
                    value: 2,
                    label: '訂單成立',
                },
                {
                    value: 3,
                    label: '訂單取消',
                }
            ]),
            value: ref('')
        }
    },
    data() {
        return {
            productOfChecked: [],
            deleteIndex: 0,
            isEdit: true,
            isSave: false,
            productArray: [{
                orderID: 1,
                memberID: 1,
                date: '2021-12-10',
                total: 100,
                paymentMethod: 'card',
                orderStatus: 1,
            }, {
                orderID: 2,
                memberID: 2,
                date: '2021-12-10',
                total: 300,
                paymentMethod: 'COD',
                orderStatus: 2,
            }, {
                orderID: 3,
                memberID: 3,
                date: '2021-12-10',
                total: 1000,
                paymentMethod: 'COD',
                orderStatus: 2,
            }, {
                orderID: 4,
                memberID: 4,
                date: '2021-12-10',
                total: 5000,
                paymentMethod: 'card',
                orderStatus: 3,
            }, {
                orderID: 5,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
            }],
        }
    },
    methods: orderController,
    computed: {}
}
</script>

<style scoped lang="scss" src="./order.scss"></style>
