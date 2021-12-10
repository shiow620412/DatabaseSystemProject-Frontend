<template>
    <el-row class="header">
        <el-col :span="7">
            <el-row>
                <el-col :span="5"></el-col>
                <el-col :span="16">
                    <div>
                        <router-link to="/"><img class="home-image" src="../assets/logo.png" alt=""></router-link>
                    </div>
                </el-col>
                <el-col :span="3"></el-col>
            </el-row>
        </el-col>
        <el-col :span="10"></el-col>
        <el-col :span="7"></el-col>
    </el-row>
    <router-view/>
</template>

<style>
    .header{
        height: 120px;
        width: 100%;
        z-index: 9999;
        background: #FAEDA7;
    }
    .login_logo{
        width: 48%;
        transform:translateY(55%);
    }
</style>