<template>
    <div class="order-div-content">
        <p style="margin: auto auto;">我的訂單紀錄</p><hr>
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column type="expand">
                <template #default="props">
                    <p v-for="i in props.row.product" :key="i">{{i.name}} x {{i.quantity}}</p>
                    <el-button size="mini" type="danger" @click="handleDelete(props.$index)">Delete</el-button>
                </template>
            </el-table-column>
            <el-table-column label="訂單編號" prop="number" />
            <el-table-column label="日期" prop="date" />
            <el-table-column label="總金額" prop="price" />
            <el-table-column label="訂單狀態" prop="state" />
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'order',
        components: {
            
        },
        data(){
            return{
                tableData: [
                {
                    number: '16516153',
                    date: "2020/03/12",
                    price: 1234,
                    state: '已出貨',
                    product: [
                        {
                            name: "apple",
                            quantity: 3,
                        },
                        {
                            name: "orange",
                            quantity: 30,
                        },
                    ],
                },
                {
                    number: '46549887',
                    date: "2021/06/19",
                    price: 4589,
                    state: '確認中',
                    product: [
                        {
                            name: "banana",
                            quantity: 5,
                        },
                        {
                            name: "grape",
                            quantity: 20,
                        },
                    ],
                }
            ],
            }
        },
        methods: {
            handleDelete(index){
                this.tableData.splice(index, 1);
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