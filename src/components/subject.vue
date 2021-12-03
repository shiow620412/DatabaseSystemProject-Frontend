<template>
    <div v-for="i in tableData" :key="i" class="div-content">
        <el-row gutter="20">
            <el-col :span="5">
                <div>
                    <img class="photo" src="https://b.ecimg.tw/items/DHAS4NA900B7V2B/000002_1617190751.jpg" alt="">
                </div>
            </el-col>
            <el-col :span="14">
                <div>
                    <p class="text-position"><b>ASUS ROG Zephyrus G14 GA401QM-0032E5900HS 日蝕灰(R9-5900HS/16+16G/RTX3060-6G/1T PCIe/W10/WQHD</b></p>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="div-price">
                    <p>網路價$</p>
                    <h2 style="color:red">{{i.date}}</h2>
                    <select>
                        <option v-for="j in i.stock" :key="j" value=key>{{j}}</option>
                    </select>
                    <el-button type="danger" style="margin-left:5px" @click="test(i.stock)">加入購物車</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'subject',
        components: {
            
        },
        methods: {
            test(x){
                alert(x)
            }
        },
        data() {
            return {
                tableData: [
                    {
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 10
                    },
                    {
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 16
                    },
                    {
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 3
                    },
                    {
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 56
                    }
                ]
            }
        }
    }
</script>

<style>
    .div-content{
        background-color: #D9FFFF;
        width: 1000px;
        height: 200px;
        margin: 10px auto;
        radius: 20px;
    }
    .photo{
        position: relative;
        width: 180px;
        top: 10px;
        left: 10px;
    }
    .text-position{

    }
    .div-price{
        position: relative;
        top: 0px;
    }
</style>