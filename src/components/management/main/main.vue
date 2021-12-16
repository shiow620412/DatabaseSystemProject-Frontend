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
        <el-row :gutter="12" justify="center">
            <el-col :span="8" v-for="(item, index) in ArrayList" :key="index">
                <el-card shadow="always">
                    <!-- <span :class="item.icon" class="image"></span> -->
                    <vue3-chart-js v-bind="{ ...item.chartData }" />
                    <div style="padding: 14px">
                        <span style="font-weight: bold;font-size: 25px;margin-top: 20px;">{{ item.name }}</span>
                        <!-- <div>
                            {{ item.doc }}
                        </div> -->
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
export default {
    name: 'main',
    components: {
        Vue3ChartJs,
    },
    setup() {
        const memberNumber = {
            type: "doughnut",
            data: {
                labels: ["正常", "停權"],
                datasets: [{
                    backgroundColor: ["rgb(127,255,0)","rgb(255,77,64)"],
                    data: [3, 2]
                }, ],
            },
        };

        const orderNumber = {
            type: "doughnut",
            data: {
                labels: ["交易完成", "交易取消", "確認中"],
                datasets: [{
                    backgroundColor: ["rgb(255,0,0)", "rgb(255,140,0)", "rgb(255,255,0)"],
                    data: [2, 1, 3]
                }, ],
            },
        };

        const product = {
            type: "doughnut",
            data: {
                labels: ["正常", "停權"],
                datasets: [{
                    backgroundColor: ["rgb(255,127,80)", "rgb(80,200,120)"],
                    data: [3, 2]
                }, ],
            },
        };

        return {
            memberNumber,
            orderNumber,
            product,
        };

    },
    data() {
        return {
            ArrayList: [{
                icon: 'el-icon-user',
                chartData: this.memberNumber,
                name: '會員管理',
                doc: '正常會員：3 \n 停權會員：2'
            }, {
                icon: 'el-icon-s-order',
                chartData: this.orderNumber,
                name: '訂單管理',
                doc: '交易完成：2 \n 交易取消：1 \n 確認中：2'
            }, {
                icon: 'el-icon-shopping-bag-2',
                chartData: this.product,
                name: '商品管理',
                doc: '上架數量：5 \n 下架數量：4'
            }]
        }
    },
}
</script>

<style scoped lang="scss" src="./main.scss"></style>
