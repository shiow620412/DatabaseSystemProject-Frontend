<template>
<el-row>
    <el-col :span="5" style="background-color: #545c64; height: 100vh;">
        <div style="margin-top: 15px;margin-bottom: 10px;">
            <el-text style="font-size: 35px;color: #ffffff;">管理員系統</el-text>
        </div>
        <div align="center" v-for="(item, index) in buttonArray" :key=index>
            <router-link :to="item.link">
                <el-button class="aside-button" style="width: 37vh;height: 10vh;">
                    <h4 :class="item.icon" />
                    <span>{{ item.name }}</span>
                </el-button>
            </router-link>
        </div>
        <!-- <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="1" text-color="#fff" @open="handleOpen" @close="handleClose">
            <router-link to="/management/">
                <el-menu-item index="1">
                    <h3 class="el-icon-menu" />
                    <span>系統首頁</span>
                </el-menu-item>
            </router-link>
            <router-link to="/management/member">
                <el-menu-item index="2">
                    <span>會員管理</span>
                </el-menu-item>
            </router-link>
            <el-menu-item index="3">
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu> -->
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="17">
        <router-view />
    </el-col>
    <el-col :span="1"></el-col>
</el-row>
</template>

<script>
export default {
    name: 'aside',
    components: {
        // Location,
    },
    data() {
        return {
            buttonArray: [{
                link: '/management/',
                icon: 'el-icon-menu',
                name: '系統首頁'
            }, {
                link: '/management/member',
                icon: 'el-icon-user',
                name: '會員管理'
            }, {
                link: '/management/member',
                icon: 'el-icon-s-order',
                name: '訂單管理'
            }, {
                link: '/management/member',
                icon: 'el-icon-shopping-bag-2',
                name: '商品上下架'
            }]
        }
    }
}
</script>

<style scoped>
.aside-button {
    background-color: #545c64;
    border-color: #545c64;
    color: #ffffff;
}

.aside-button:focus {
    background-color: #545c64;
    border-color: #545c64;
    color: #ffffff;
}

.aside-button:hover {
    background-color: #3f4449;
    border-color: #3f4449;
    color: #ffffff;
}

.aside-button:active {
    background-color: #545c64;
    border-color: #545c64;
    color: #ffd04b;
}

/* rgb(255, 208, 75); background-color: rgb(84, 92, 100);" */
</style>
