<template>
    <el-row class="top" >
        <el-col :span="7">
            <router-link to="/"  @click="goHome">
                <el-image  :fit="'contain'" :src="require('../../assets/logo.png')" alt=""></el-image>
            </router-link>

        </el-col>
        <el-col :span="10" class="input-position">
            <el-form @submit.prevent="search">
                <el-input v-model="searchInput" placeholder="Please Search Product">
                <template #append>
                    <el-button @click="search"><el-icon><Search/></el-icon></el-button>
                </template>
                </el-input>
            </el-form>
            
        </el-col>
        <el-col :span="7">
            <el-row style="height: 100%">
                <el-col :span="8">
                    
                        <router-link to="/cart" class="shoppingCart-position"><img class="shoppingCart-image" src="../../assets/shoppingCart.png" alt=""></router-link>
                    
                </el-col>
                <el-col :span="16">
                    <div>
                        <el-row justify="end">
                            <el-space :size="10">
                                <template v-if="memberInformation.Name">
                                    <div>Hi {{memberInformation.Name}}</div>
                                    <router-link to="/" @click="logout">登出</router-link>
                                </template>
                                <template v-for="element in userOptions" :key="element">
                                    <router-link :to="element.path" v-if="element.display">
                                        {{element.label}}
                                    </router-link>
                                </template>
                            </el-space>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <router-view> </router-view>
</template>

<script>
    import userService from "../../services/user.service"
    import {Search} from '@element-plus/icons'
    import headerController from './header.controller'
    export default {
        name: 'Top',
        components: {
            Search
        },
        data(){
            return{
                searchInput: '',
                userOptions:[],
                memberInformation:{}
            }
        },
        watch:{
            memberInformation(){
                if(Object.keys(this.memberInformation).length > 0){
                    this.userOptions = [
                        {
                            label: "會員中心",
                            path: "/member",
                            display: true
                        },{
                            label: "後台管理",
                            path: "/management",
                            display: this.memberInformation.isAdmin
                        }
                    ]
                }else{
                    this.userOptions = [
                    {
                            label: "登入",
                            path: "/user/login",
                            display: true
                        },
                        {
                            label: "註冊",
                            path: "/user/register",
                            display: true
                        }
                    ]
                }
            },
            "$route.query.productName"(newValue){
                this.searchInput = newValue;
            }
        },
        mounted() {
            if(localStorage.getItem("token")){
                userService.getInformation().then(data => {
                    this.memberInformation = data;                    
                }).catch(() => {                      
                    this.memberInformation = {};                
                });
            }else{
                this.memberInformation = {};
            }
            if(this.$route.query.productName){
                this.searchInput = this.$route.query.productName;
            }       
        },
        
        methods: headerController,
    }
</script>

<style scoped lang="scss" src="./header.scss"></style>
