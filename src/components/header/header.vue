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
            <el-row>
                <el-col :span="8">
                    <div>
                        <router-link to="/cart" class="shoppingCart-position"><img class="shoppingCart-image" src="../../assets/shoppingCart.png" alt=""></router-link>
                    </div>
                </el-col>
                <el-col :span="16">
                    <div>
                        <el-row>
                            <el-col :span="12">
                                <div>
                                    <el-row v-if="isShow">
                                        <el-col :span="12">
                                            <div>
                                                <router-link to="/user/login" class="register-position"><font face="DFKai-sb">登入</font></router-link>
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div>
                                                <router-link to="/user/register" class="register-position"><font face="DFKai-sb">註冊</font></router-link>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div>
                                    <router-link to="/" @click="checkLogin()" class="member-position"><font face="DFKai-sb">會員中心</font></router-link>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
    <router-view> </router-view>
</template>

<script>
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
                isShow: true
            }
        },
        mounted() {
            if(this.$route.query.productName){
                this.searchInput = this.$route.query.productName;
            }       
        },
        
        methods: headerController,
    }
</script>

<style scoped lang="scss" src="./header.scss"></style>
