<template>
    <userHeader></userHeader>
    <el-row class="container">
        <el-col :span="7">
        </el-col>
        <el-col :span="10">
            <router-view/>
        </el-col>
         
        <el-col :span="7"></el-col>
    </el-row>
    
</template>
<script>
import userHeader from "../components/user/header/header.vue"
export default {
    components:{
        userHeader
    },
    setup() {
        
    },
}
</script>
<style scoped>
    .el-row.container{
        background-color: #EFFFE4;
        height: calc(100vh - 100px);
        width: 100%;
    }
</style>