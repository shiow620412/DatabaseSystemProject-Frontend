<template>
    <el-row class="top" >
        <el-col :span="7">
            <router-link to="/"  @click="goHome">
                <el-image  :fit="'contain'" :src="require('../../assets/logo.png')" alt=""></el-image>
            </router-link>
                <!-- <el-col :span="24">
                    <div>
                        <router-link to="/" @click="goHome"><img class="home-image" src="../../assets/logo.png" alt=""></router-link>
                      
                        class="home-image"
                    </div>
                </el-col>
                <el-col :span="3">
                    <div>
                        layout-margin
                    </div>
                </el-col> -->
          
        </el-col>
        <el-col :span="10" class="input-position">
           
                <el-input v-model="input" placeholder="Please Search Product">
                <template #append>
                    <el-button @click="search"><el-icon><Search/></el-icon></el-button>
                </template>
                </el-input>
         
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
    import { ref } from 'vue'
    import {Search} from '@element-plus/icons'
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
        methods: {
            search(){
                this.eventBus.emit("click-send-msg", this.input);
                this.$router.push({
                    path: "/index",
                    query: {
                        q: this.input
                    }
                });
            },
            checkLogin(){
                if(localStorage.getItem("token")){this.$router.push({path: "/member"});}
                else{this.$router.push({path: "/user"});}
            },
            goHome(){
                this.eventBus.emit("notifyReload", "0");
            }
        },
    }
</script>

<style scoped>
    .el-col-7 a{
        height: 100px;   
    }
    .el-image{
        height: inherit;
    }
    .top{
        position: sticky;
        top: 0;
        left: 0;
        height: 100px;
        width: 100%;
        z-index: 2;
        background-color: #FAEDA7; 
    }
    .shoppingCart-position{
        top: 33px;
        left: 10px;
        position: relative;
        top: 25px;
        right: -30px;
    }
    .shoppingCart-image{
        transition: 0.5s;
        width: 30%;
    }
    .shoppingCart-image:hover{
        transform: scale(1.2);
    }
    .register-position{
        position: relative;
        font-size: 18px;
        top: 10px;
        color: #F97E13;
    }
    .member-position{
        position: relative;
        font-size: 18px;
        top: 10px;
        left: 10px;
        color: #F97E13;
    }
    .input-position{
        margin: auto auto;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .home-image{
        width: 40%;
        transform:translateY(20%);
        display: inline-block;
    }
</style>