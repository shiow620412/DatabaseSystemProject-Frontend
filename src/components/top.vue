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
                        <router-link to="/"><img class="home-image" src="../assets/logo.png" alt=""></router-link>
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
                        <a class="register-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">登入|註冊</a>
                        <a class="member-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">會員中心</a>
                        <router-link to="/cart" class="shoppingCart-position"><img class="shoppingCart-image" src="../assets/shoppingCart.png" alt=""></router-link>
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
</template>

<script>
    import { ref } from 'vue'
    import {Search} from '../../node_modules/@element-plus/icons'
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
        height: 150px;
        width: 100%;
        z-index: 9999;
        background: -webkit-linear-gradient(#FDC000,#FD5200);
    }
    .shoppingCart-position{
        position: relative;
        top: 80px;
        right: 90px;
    }
    .shoppingCart-image{
        transition: 0.5s;
        width: 20%;
    }
    .shoppingCart-image:hover{
        transform: scale(1.2);
    } 
    .register-position{
        position: relative;
        top: -20px;
        color: white;
    }
    .member-position{
        position: relative;
        top: -20px;
        left: 20px;
        color: white;
    }
    .input-position{
        margin: auto auto;
    }
    .search-button{
        
    }
    .home-image{
        width: 70%;
        transform:translateY(50%);
    }
</style>