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
                <el-collapse-item :name="i.number" @click="OnselectDetail(index)">
                    <template #title>
                        {{i.number}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        {{i.date}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        {{i.price}}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                        {{i.state}}
                    </template>
                    <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="number" label="名稱" width="180" />
                    <el-table-column prop="date" label="單價" width="180" />
                    <el-table-column prop="price" label="數量" />
                    <el-table-column prop="state" label="小計" />
                </el-table>
                </el-collapse-item>
            </div>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: 'order',
        components: {
            
        },
        data(){
            return{
                activeName: '0',
                orderData: [
                    {
                        number: '16516153',
                        date: "2020/03/12",
                        price: 1234,
                        state: '已出貨',
                    },
                    {
                        number: '46549887',
                        date: "2021/06/19",
                        price: 4589,
                        state: '確認中',
                    }
                ],
                tableData: [
                    {
                        number: '16516153',
                        date: "2020/03/12",
                        price: 1234,
                        state: '已出貨',
                    },
                    {
                        number: '46549887',
                        date: "2021/06/19",
                        price: 4589,
                        state: '確認中',
                    }
                ],
            }
        },
        methods: {
            OnselectDetail(index){
                this.tableData[0].number = index.toString();
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