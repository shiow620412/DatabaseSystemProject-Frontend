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
            <el-table-column prop="OrderID" label="訂單編號" min-width="15%" align="center" sortable></el-table-column>
            <el-table-column prop="MemberID" label="會員ID" min-width="25%" align="center" sortable></el-table-column>
            <el-table-column prop="Date" label="日期" min-width="30%" align="center"></el-table-column>
            <el-table-column label="總金額" min-width="25%" align="center">
                <template v-slot="scope">
                    <p>&#36; {{ scope.row.Total }}</p>
                </template>
            </el-table-column>
            <el-table-column label="付款方式" min-width="20%" align="center">
                <template v-slot="scope">
                    <span>{{ changePaymentChinese(scope.row.PaymentMethod) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="狀態" min-width="18%" align="center">
                <template v-slot="scope">
                    <template v-if="!scope.row.click">
                        <el-tag :type="(scope.row.OrderStatus === 1) ? 'success' : (scope.row.OrderStatus === 2) ? 'error' : 'info'" size="medium">{{ changeStatusChinese(scope.row.OrderStatus) }}</el-tag>
                    </template>
                    <template v-else-if="scope.row.click">
                        <el-select v-model="scope.row.OrderStatus" placeholder="Select" size="medium">
                            <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
                        </el-select>
                    </template>
                </template>
            </el-table-column>
            <el-table-column label="操作" min-width="13%" align="center">
                <template #default="scope">
                    <el-button size="mini" @click="(scope.row.click = true)" v-show="!scope.row.click">編輯</el-button>
                    <el-button size="mini" @click="(scope.row.click = false) & clickSave(scope.$index,scope.row.OrderID,scope.row.OrderStatus)" v-show="scope.row.click">儲存</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align: center">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[50, 100, 150]" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="this.orderArray.total" />
        </div>
    </el-main>
</el-container>
</template>

<script>
import {
    ref
} from 'vue'
import orderController from "./order.controller";
import orderService from '../../../services/admin/order.service'

export default {
    name: 'order',
    setup() {
        return {
            statusArray: ref([{
                    value: 1,
                    label: '交易完成',
                },
                {
                    value: 2,
                    label: '交易取消',
                },{
                    value: 3,
                    label: "訂單成立",
                    disabled: true
                }
            ]),
            value: ref('')
        }
    },
    data() {
        return {
            search: '',
            orderArray: [],
            currentPage: 1,
            pageSize: 50,
        }
    },
    methods: orderController,
    computed: {
        tables: function () {
            var search = this.search;
            if (search) {
                return this.orderArray.result.filter(function (dataNews) {
                    return Object.keys(dataNews).some(function (key) {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.orderArray.result
        }
    },
    mounted() {
        this.eventBus.emit('routeChanged');
        orderService.getAllOrders().then(data => {
            this.orderArray = data
        })
    }
}
</script>

<style scoped lang="scss" src="./order.scss"></style>
