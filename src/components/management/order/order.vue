<template>
<el-container>
    <el-header height="40px">
        <el-text style="font-size: 25px;font-weight: bold">訂單管理</el-text>
    </el-header>
    <el-main>
        <div style="margin-bottom: 10px" align="right">
            <el-text style="font-size: 18px;font-weight: bold">搜尋: &nbsp;&nbsp;</el-text>
            <el-input style="width: 250px" placeholder="Search" class="search" v-model="search"></el-input>
        </div>
        <el-table :data="tables" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'memberID' }" row-style="height: 10vh" max-height="490">
            <el-table-column prop="orderID" label="訂單編號" min-width="15%" align="center" sortable></el-table-column>
            <el-table-column prop="memberID" label="會員ID" min-width="25%" align="center" sortable></el-table-column>
            <el-table-column prop="date" label="日期" min-width="25%" align="center"></el-table-column>
            <el-table-column label="總金額" min-width="25%" align="center">
                <template v-slot="scope">
                    <p>&#36; {{ scope.row.total }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="paymentMethod" label="付款方式" min-width="25%" align="center"></el-table-column>
            <el-table-column label="狀態" min-width="18%" align="center">
                <template v-slot="scope">
                    <template v-if="!scope.row.click">
                        <el-tag :type="(scope.row.orderStatus === 1) ? 'warning' : (scope.row.orderStatus === 2) ? 'success' : 'info'" size="medium">{{ changeStatusChinese(scope.row.orderStatus) }}</el-tag>
                    </template>
                    <template v-else-if="scope.row.click">
                        <el-select v-model="scope.row.orderStatus" placeholder="Select" size="medium">
                            <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="13%" align="center">
                <template #default="scope">
                    <el-button size="mini" @click="(scope.row.click = true)" v-show="!scope.row.click">編輯</el-button>
                    <el-button size="mini" @click="(scope.row.click = false) & clickSave(scope.$index)" v-show="scope.row.click">儲存</el-button>
                    <!-- <el-button size="mini" @click="clickEdit(scope.$index, scope.row) & (this.isSave = true) & (this.isEdit = false) & (this.isDelete = true)" v-show="this.isEdit">編輯</el-button>
                            <el-button size="mini" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isSave">儲存</el-button> -->
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10,15]" :page-size="pageSize" layout="total,jumper,prev, pager, next,size" :total="files_count">
        </el-pagination>
    </el-main>
</el-container>
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
            search: '',
            orderArray: [{
                orderID: 1,
                memberID: 1,
                date: '2021-12-10',
                total: 100,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }, {
                orderID: 2,
                memberID: 2,
                date: '2021-12-10',
                total: 300,
                paymentMethod: 'COD',
                orderStatus: 2,
                chick: false
            }, {
                orderID: 3,
                memberID: 3,
                date: '2021-12-10',
                total: 1000,
                paymentMethod: 'COD',
                orderStatus: 2,
                chick: false
            }, {
                orderID: 4,
                memberID: 4,
                date: '2021-12-11',
                total: 5000,
                paymentMethod: 'card',
                orderStatus: 3,
                chick: false
            }, {
                orderID: 5,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }, {
                orderID: 6,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }, {
                orderID: 7,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }, {
                orderID: 8,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }, {
                orderID: 9,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }, {
                orderID: 10,
                memberID: 5,
                date: '2021-12-10',
                total: 3000,
                paymentMethod: 'card',
                orderStatus: 1,
                chick: false
            }],
        }
    },
    methods: orderController,
    computed: {
        tables: function () {
            var search = this.search;
            if (search) {
                return this.orderArray.filter(function (dataNews) {
                    return Object.keys(dataNews).some(function (key) {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.orderArray
        }
    }
}
</script>

<style scoped lang="scss" src="./order.scss"></style>
