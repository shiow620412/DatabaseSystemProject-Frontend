<template>
    <el-row class="top">
        <el-col :span="7">
            <el-row>
                <el-col :span="24">
                    <div>
                        <router-link to="/" @click="goHome"><img class="home-image" src="../../assets/logo.png" alt=""></router-link>
                    </div>
                </el-col>
                <el-col :span="3">
                    <div>
                        <!-- layout-margin -->
                    </div>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="10" class="input-position">
            <div>
                <el-input v-model="input" placeholder="Please Search Product">
                <template #append>
                    <el-button @click="search"><el-icon><Search/></el-icon></el-button>
                </template>
                </el-input>
            </div>
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
                                    <el-row>
                                        <el-col :span="12">
                                            <div v-if="isShow">
                                                <router-link to="/identify/login" class="register-position"><font face="DFKai-sb">登入</font></router-link>
                                            </div>
                                        </el-col>
                                        <el-col :span="12">
                                            <div v-if="isShow">
                                                <router-link to="/identify/register" class="register-position"><font face="DFKai-sb">註冊</font></router-link>
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
    import { ref } from 'vue'
    import {Search} from '@element-plus/icons'
    import headerController from './header.controller'
    export default {
        name: 'Top',
        components: {
            Search
        },
        mounted() {
            this.eventBus.on("ishide", (msgData) => (
                this.isShow = msgData==='1' ? false : true
            ));
            this.isShow = localStorage.getItem("isLogin")==='1' ? false : true
        },
        data(){
            return{
                input: ref(''),
                isShow: true
            }
        },
        methods: headerController,
    }
</script>

<style scoped lang="scss" src="./header.scss"></style>