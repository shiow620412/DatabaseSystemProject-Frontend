<template>
    <div class="div-content">
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
                    <h2 style="color:red">{{price}}</h2>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <el-button type="danger" style="margin-left:5px">加入購物車</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Item',
        components: {
            
        },
        data(){
            return {
                price: 1111
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