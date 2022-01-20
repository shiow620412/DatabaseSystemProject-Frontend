<template>
    <el-row class="header">
        <el-col :span="7">
            <!-- <el-row>
                <el-col :span="5"></el-col>
                <el-col :span="16">
                    <div>
                        <router-link to="/"><img class="login_logo" src="../assets/logo.png" alt=""></router-link>
                    </div>
                   
                </el-col>
                <el-col :span="3"></el-col>
            </el-row> -->
             <router-link to="/">
                        <el-image  :fit="'contain'" :src="require('../../../assets/logo.png')" alt=""></el-image>
            </router-link>
        </el-col>
        <el-col :span="10"></el-col>
        <el-col :span="7"></el-col>
    </el-row>

</template>

<style scoped>
    .el-col-7 a{
        height: 100px;   
    }
    .el-image{
        height: inherit;
    }
    .header{
        box-sizing: border-box;
        height: 100px;
        width: 100%;
        z-index: 9999;
        background: #FAEDA7;
    }
    .login_logo{
        width: 48%;
        transform:translateY(40%);
    }
</style>