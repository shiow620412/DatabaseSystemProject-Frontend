<template>
    <el-row style="margin-top: 20px;align: cenetr;">
        <el-col :span="2">
            <div class=""></div>
        </el-col>
        <el-col :span="6">
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
        </el-col>
        <el-col :span="14">
            <div class=""><router-view/></div>
        </el-col>
        <el-col :span="2">
            <div class=""></div>
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
    .button-back{
        background-color: #A9A4A4;
        margin: 10px;
        border-radius: 10px;
        width: 37vh;
        height: 10vh;
        color: black;
    }
    .button-back:hover{
        background-color: #737070;
        color: black;
    }
    .button-back:focus{
        background-color: #A9A4A4;
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