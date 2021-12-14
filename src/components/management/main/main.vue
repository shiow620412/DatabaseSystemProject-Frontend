<template>
<el-container>
    <el-header height="40px">
        <!-- <el-row class="header" justify="center"> -->
        <div>
            <el-text style="font-size: 25px;font-weight: bold">管理系統首頁</el-text>
        </div>
        <!-- </el-row> -->
    </el-header>
    <el-main>
        <el-row justify="center">
            <el-col v-for="(item, index) in ArrayList" :key="index" :span="8" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <h1 :class="item.icon" class="image"></h1>
                    <!-- <img :src="item.icon" class="image" /> -->
                    <div style="padding: 14px">
                        <span>{{ item.name }}</span>
                        <div>
                            {{ item.doc }}
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import {
    ref
} from 'vue'
export default {
    name: 'main',
    setup() {
        const currentDate = ref(new Date())

        return {
            currentDate,
        }
    },
    data() {
        return {
            ArrayList: [{
                icon: 'el-icon-user',
                name: '會員管理',
                doc: '正常會員：3 \n 停權會員：2'
            }, {
                icon: 'el-icon-s-order',
                name: '訂單管理',
                doc: '交易完成：2 \n 交易取消：1 \n 確認中：2'
            }, {
                icon: 'el-icon-shopping-bag-2',
                name: '商品管理',
                doc: '上架數量：5 \n 下架數量：4'
            }]
        }
    }
}
</script>

<style scoped lang="scss" src="./main.scss"></style>
