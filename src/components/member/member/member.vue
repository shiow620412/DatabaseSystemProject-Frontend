<template>
    <el-row style="margin-top: 20px;align: cenetr;">
        <el-col :span="2">
            <div class="">1</div>
        </el-col>
        <el-col :span="6">
            <el-row>
                <el-col :span="8"></el-col>
                <el-col :span="4">
                    <router-link to="/member/information"><img src="../../../assets/person.png" alt="" class="image"/></router-link>
                </el-col>
                <el-col :span="8">
                    <router-link to="/member/information"><p style="image-text">我的檔案</p></router-link>
                </el-col>
                <el-col :span="16"></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"></el-col>
                <el-col :span="4">
                    <router-link to="/member/transactionRecord"><img src="../../../assets/list.png" alt="" class="image"/></router-link>
                </el-col>
                <el-col :span="8">
                    <router-link to="/member/transactionRecord"><p style="image-text">購物清單</p></router-link>
                </el-col>
                <el-col :span="16"></el-col>
            </el-row>
        </el-col>
        <el-col :span="14">
            <div class=""><router-view/></div>
        </el-col>
        <el-col :span="2">
            <div class="">4</div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'information',
        components: {

        },
    }
</script>

<style>
    .image{
        width: 60%;
        transform: translateY(40%);
    }
    .image-text{
        position: relative;
        float: left;
    }
    .div-content{
        width: 100%;
    }
</style>