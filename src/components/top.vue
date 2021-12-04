<template>

 <!-- <div class="top"> -->
     <el-row type="flex" justify="space-between" :gutter="24" align="middle"> 
         <el-col :span="6">

            <a href="../public/index.html"><img class="photo-position" style="width: 150px;" src="../assets/logo.png" alt=""></a>
         </el-col>

         <!-- <el-col :span="12"> -->
            <!-- <div class="input-position"> -->
                <el-col :span="9">

                    <el-input v-model="input" placeholder="Please Search Product" />
                </el-col>
                <el-col :span="3">

                    <el-button type="danger" class="search-button"><el-icon><Search/></el-icon></el-button>
                </el-col>
            <!-- </div> -->

         <!-- </el-col> -->
         <el-col :span="6">

            <a class="member-position" href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener">登入|註冊</a>
            <a class="shoppingCart-position"  href="https://github.com/Wang-YuQuan" target="_blank" rel="noopener"><img class="shoppingCart-photo" style="width:50px;" src="../assets/shoppingCart.png" alt=""></a>
         </el-col>

     </el-row>
    <!-- </div> -->

   

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
    /* .top{
        height: 150px;
        background: -webkit-linear-gradient(#FDC000,#FD5200);
    }
    .shoppingCart-position{
        position: relative;
        top: -80px;
        left: 1035px;
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
        left: 1100px;
    }
    .input-position{
        position: relative;
        width: 600px;
        top: -5px;
        left: 450px;
    }
    .search-button{
        position: relative;
        left: 555px;
        bottom: 41px;
    }
    .photo-position{
        position: relative;
        width: 150px;
        top: 40px;
        left: 250px;
    } */
</style>