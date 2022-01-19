<template>
<el-container>
    <el-aside width="300px" style="background-color: #545c64;height: 100vh">
        <div style="margin-top: 15px;margin-bottom: 10px;">
            <el-text style="font-size: 35px;color: #ffffff;">管理員系統</el-text>
        </div>
        <div align="center" v-for="(item, index) in buttonArray" :key=index>
            <el-button :class="(item.click === 0) ? 'aside-button' : 'aside-button-click'" style="width: 100%;height: 10vh;font-size: 20px;" @click="simulationMenu(index) & this.$router.push(item.link)">
                <span style="text-align: center" :class="item.icon">{{ item.name }}</span>
            </el-button>
        </div>
    </el-aside>
    <el-container>
        <el-header style="text-align: right; font-size: 18px;">
            <el-row justify="end" align="middle">
                <el-space>
                    <div >Hello, {{ this.adminName }} </div>
                    <!-- <el-col :span="1"> -->
                        <router-link to="/">
                            <el-col>
                                <el-icon :size="30" ><home-filled style="margin-top:10px" /></el-icon>
                            </el-col>
                            
                        </router-link> 
                    <!-- </el-col>   -->
                </el-space>
            </el-row>
          

        </el-header>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</el-container>
</template>

<script>
import {HomeFilled} from '@element-plus/icons'
import asideController from "./aside.controller";
import userService from '../../../services/user.service.js';
export default {
    name: 'aside',
    components:{
        HomeFilled
    },
    data() {
        return {
            adminName: '',
            buttonArray: [{
                link: '/management/main',
                icon: 'el-icon-menu',
                name: '系統首頁',
                click: 0
            }, {
                link: '/management/member',
                icon: 'el-icon-user',
                name: '會員管理',
                click: 0
            }, {
                link: '/management/order',
                icon: 'el-icon-s-order',
                name: '訂單管理',
                click: 0
            }, {
                link: '/management/product',
                icon: 'el-icon-shopping-bag-2',
                name: '商品管理',
                click: 0
            }],
        }
    },
    methods: asideController,
    mounted() {
        this.eventBus.on('routeChanged', ()=> {
            this.buttonArray.map(button => {
                if(this.$route.path.startsWith(button.link)){
                    button.click = 1;
                }else{
                    button.click = 0;
                }
                return button;
            });
        });
        this.buttonArray.map(button => {
            if(this.$route.path.startsWith(button.link)){
                button.click = 1;
            }else{
                button.click = 0;
            }
            return button;
        });
        if(localStorage.getItem("token")){
            userService.getInformation().then(data => {                
                if(!data.isAdmin){
                    this.$router.push({path:"/"});
                }else{
                    this.adminName = data.Name;
                }                    
            }).catch(() => {
                this.$router.push({path:"/"});  
            });
        }else{
            this.$router.push({path:"/"});
        }
        if(this.$route.query.productName){
            this.searchInput = this.$route.query.productName;
        }       
    },
}
</script>

<style scoped lang="scss" src="./aside.scss"></style>
