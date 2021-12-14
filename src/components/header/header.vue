<template>
    <el-row class="top">
        <el-col :span="7">
            <el-row>
                <el-col :span="10">
                    <div>
                        <!-- layout-margin -->
                    </div>
                </el-col>
                <el-col :span="14">
                    <div>
                        <router-link to="/"><img class="home-image" src="../../assets/logo.png" alt=""></router-link>
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="10" class="input-position">
            <div>
                <el-input v-model="input" placeholder="Please Search Product">
                <template #append>
                    <el-button><el-icon><Search/></el-icon></el-button>
                </template>
                </el-input>
            </div>
        </el-col>
        <el-col :span="7">
            <el-row>
                <el-col :span="14">
                    <div>
                        <router-link to="/login" class="register-position">登入|註冊</router-link>
                        <router-link to="/member" class="member-position">會員中心</router-link>
                        <router-link to="/cart" class="shoppingCart-position"><img class="shoppingCart-image" src="../../assets/shoppingCart.png" alt=""></router-link>
                    </div>
                </el-col>
                <el-col :span="10">
                    <div>
                        <!-- layout-margin -->
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <router-view> </router-view>
</template>

<script>
    import { ref } from 'vue'
    import {Search} from '@element-plus/icons'
    export default {
        name: 'Top',
        components: {
            Search
        },
        data(){
            return{
                input: ref('')
            }
        },
        methods: {
            
        },
    }
</script>

<style>
    .top{
        height: 100px;
        width: 100%;
        z-index: 2;
        background-color: #FAEDA7; 
    }
    .shoppingCart-position{
        position: relative;
        top: 40px;
        right: 70px;
    }
    .shoppingCart-image{
        transition: 0.5s;
        width: 15%;
    }
    .shoppingCart-image:hover{
        transform: scale(1.2);
    } 
    .register-position{
        position: relative;
        font-size: 15px;
        top: -20px;
        color: red;
    }
    .member-position{
        position: relative;
        font-size: 15px;
        top: -20px;
        left: 20px;
        color: red;
    }
    .input-position{
        margin: auto auto;
    }
    .search-button{
        
    }
    .home-image{
        width: 70%;
        transform:translateY(20%);
    }
</style>