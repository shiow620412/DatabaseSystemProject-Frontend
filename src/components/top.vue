<template>
    <div class="top">
        <router-link to="/"><img class="photo-position" src="../assets/logo.png" alt=""></router-link>
        <div class="input-position">
            <el-input v-model="input" placeholder="Please Search Product" />
            <el-button type="danger" class="search-button"><el-icon><Search/></el-icon></el-button>
        </div>
        <a class="member-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">登入|註冊</a>
        <router-link to="/cart" class="shoppingCart-position"><img class="shoppingCart-photo" src="../assets/shoppingCart.png" alt=""></router-link>
    </div>
    <div>
        
    </div>
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
    }
</script>

<style>
    .top{
        height: 150px;
        background: -webkit-linear-gradient(#FDC000,#FD5200);
    }
    .shoppingCart-position{
        position: relative;
        top: -70px;
        left: 365px;
    }
    .shoppingCart-photo{
        width: 50px;
        transition: 0.5s;
    }
    .shoppingCart-photo:hover{
        transform: scale(1.2);
    } 
    .member-position{
        position: relative;
        color: white;
        top: -180px;
        left: 430px;
    }
    .input-position{
        position: relative;
        width: 600px;
        top: -5px;
        left: 450px;
    }
    .search-button{
        position: relative;
        left: 300px;
        bottom: 41px;
    }
    .photo-position{
        position: relative;
        width: 150px;
        top: 40px;
        right: 450px;
    }
</style>