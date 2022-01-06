<template>
    <div class="order-div-content">
        <p style="margin: auto auto;">我的訂單紀錄</p><hr>
        <el-row style="margin-bottom: 5px;">
            <el-col :span="6"><div style="float: left;">訂單編號</div></el-col>
            <el-col :span="6"><div style="float: left;">下單日期</div></el-col>
            <el-col :span="6"><div style="float: left;">總金額</div></el-col>
            <el-col :span="6"><div style="float: left;">訂單狀態</div></el-col>
        </el-row>
        <el-collapse v-model="activeName" accordion>
            <div v-for="(i,index) in orderData" :key="i">
                <el-collapse-item :name="i.OrderID" @click="OnselectDetail(index)">
                    <template #title>
                        {{i.OrderID}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        {{i.Date}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        {{i.Total}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        {{i.StatusType}}
                    </template>
                    <el-table :data="tableData" style="width: 100%">
                        <el-table-column prop="ProductName" label="名稱" width="180" />
                        <el-table-column prop="Price" label="單價" width="180" />
                        <el-table-column prop="Quantity" label="數量" />
                        <el-table-column prop="" label="小計" />
                    </el-table>
                </el-collapse-item>
            </div>
        </el-collapse>
    </div>
</template>

<script>
import OrderService from '../../../services/order.service'
// import ProductService from '../../../services/product.service'
    export default {
        name: 'order',
        components: {
            
        },
        data(){
            return{
                activeName: '0',
                orderData: [],
                tableData: [],
            }
        },
        mounted() {
            OrderService.getTotalOrder().then(data => {
                this.orderData = data.result;
            })
        },
        methods: {
            OnselectDetail(index){
                OrderService.getOrderDetail(this.orderData[index].OrderID).then(data => {
                    this.tableData = data;
                });
            },
            computPriceEachItem(){
                
            }
        },
    }
</script>

<style>
    .order-div-content{
        width: 90%;
        background-color: white;
        border-radius: 10px;
        margin: auto auto;
        padding: 20px;
    }
</style>