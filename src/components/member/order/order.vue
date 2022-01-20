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
                    <el-table-column label="小計">
                        <template v-slot="scope">
                            <el-text>&#36; {{ scope.row.Price * scope.row.Quantity }}</el-text>
                        </template>
                    </el-table-column>
                    <el-table-column align="right" v-if="i.StatusType==='確認中'">
                        <template #header>
                            <el-button size="small" type="danger" @click="handleDelete(index)">取消訂單</el-button>
                        </template>
                    </el-table-column>
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
                
            },
            handleDelete(index){
                if(confirm("確定取消")){
                    OrderService.deleteOrder(this.orderData[index].OrderID).then(() => {
                        this.orderData[index].StatusType = "交易取消";
                        
                    }).catch(() => {
                        
                    });
                }
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