<template>
    <el-row style="align: cenetr;">
        <br>
        <el-col :span="2" style="background-color: #EFFFE4;">
            <div class=""></div>
        </el-col>
        <el-col :span="6" style="background-color: #EFFFE4;">
            <router-link to="/member/information">
                <el-button class="button-back">
                    <p class="el-icon-user button-text"></p>
                    <span class="button-text">我的檔案</span>
                </el-button>
            </router-link>
            <router-link to="/member/creditCard">
                <el-button class="button-back">
                    <p class="el-icon-postcard button-text"></p>
                    <span class="button-text ">信用卡</span>
                </el-button>
            </router-link>
            <router-link to="/member/order">
                <el-button class="button-back">
                    <p class="el-icon-s-order button-text"></p>
                    <span class="button-text ">交易紀錄</span>
                </el-button>
            </router-link>
            <router-link to="/member/password">
                <el-button class="button-back">
                    <p class="el-icon-edit-outline button-text"></p>
                    <span class="button-text ">修改密碼</span>
                </el-button>
            </router-link>
            <!-- <el-button class="button-back" @click="logout()">
                <p class="el-icon-s-release button-text"></p>
                <span class="button-text ">登出</span>
            </el-button> -->
        </el-col>
        <el-col :span="14" style="background-color: #EFFFE4;">
            <br>
            <router-view/>
        </el-col>
        <el-col :span="2" style="background-color: #EFFFE4;">
            <div class=""></div>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'information',
        components: {

        },
        methods: {

        },
    }
</script>

<style scoped>
    .el-row{
        height: calc(100vh - 104px);
    }
    .button-back{
        background-color: #7EEDD2;
        margin: 10px;
        border-radius: 10px;
        width: 37vh;
        height: 10vh;
        color: black;
    }
    .button-back:hover{
        background-color: #57AD99;
        color: black;
    }
    .button-back:focus{
        background-color: #7EEDD2;
        color: red;
    }
    .button-back:active{
        color: red;
    }
    .div-content{
        width: 100%;
    }
    .button-text{
        font-size: 20px;
    }
</style>