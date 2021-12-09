<template>
<el-row>
    <el-col :span="5" style="background-color: #545c64; height: 100vh;">
        <div style="margin-top: 15px;margin-bottom: 10px;">
            <el-text style="font-size: 35px;color: #ffffff;">管理員系統</el-text>
        </div>
        <div align="center" v-for="(item, index) in buttonArray" :key=index>
            <router-link :to="item.link">
                <el-button :class="(item.click === 0) ? 'aside-button' : 'aside-button-click'" style="width: 37vh;height: 10vh;" @click="simulationMenu(index)">
                    <h4 :class="item.icon" />
                    <span>{{ item.name }}</span>
                </el-button>
            </router-link>
        </div>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="17">
        <router-view />
    </el-col>
    <el-col :span="1"></el-col>
</el-row>
</template>

<script>
import asideController from "./aside.controller";
export default {
    name: 'aside',
    data() {
        return {
            buttonArray: [{
                link: '/management/main',
                icon: 'el-icon-menu',
                name: '系統首頁',
                click: 1
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
            }]
        }
    },
    methods: asideController,
}
</script>

<style scoped lang="scss" src="./aside.scss"></style>
