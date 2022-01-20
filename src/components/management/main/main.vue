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
            <!-- <el-col :span="8" v-for="(item, index) in ArrayList" :key="index">
                <router-link :to="item.link">
                    <el-card shadow="always">
                        <vue3-chart-js v-bind="{ ...item.chartData }" />
                        <div style="padding: 14px">
                            <span style="font-weight: bold;font-size: 25px;margin-top: 20px;">{{ item.name }}</span>
                        </div>
                    </el-card>
                </router-link>
            </el-col> -->
            <el-col :span="8" v-for="(item, index) in ArrayList" :key="index">
                <el-button type="cord" shadow="always" @click="this.$router.push(item.link)">
                    <vue3-chart-js v-if="item.loaded" v-bind="{ ...item.chartData }" />
                    <div style="padding: 14px">
                        <span style="font-weight: bold;font-size: 25px;margin-top: 20px;">{{ item.name }}</span>
                    </div>
                </el-button>
            </el-col>
        </el-row>
    </el-main>
</el-container>
</template>

<script>
// ref link: https://github.com/J-T-McC/vue3-chartjs
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import memberService from '../../../services/admin/user.service'
import orderService from '../../../services/admin/order.service'
import productService from '../../../services/admin/product.service'

export default {
    name: 'main',
    components: {
        Vue3ChartJs,
    },
    data() {
        return {
            memberArray: [],
            memberLoaded: false,
            orderArray: [],
            orderLoaded: false,
            productArray: [],
            productLoaded: false,
        }
    },
    mounted() {
        this.eventBus.emit('routeChanged');
        memberService.getAllMemberStatus().then(data => {
            this.memberArray = data
            this.memberLoaded = true
            this.loaded = true
        })
        orderService.getAllOrderStatus().then(data => {
            this.orderArray = data
            this.orderLoaded = true
            this.loaded = true
        })
        productService.getAllProductStatus().then(data => {
            this.productArray = data
            this.productLoaded = true
            this.loaded = true
        })
    },
    computed: {
        getMNum() {
            let tempArray = [this.memberArray.unban, this.memberArray.ban];
            return tempArray;
        },
        getONum() {
            let tempArray = [];
            for (let i = 0; i < this.orderArray.length; i++) { 
                tempArray.push(this.orderArray[i].total);
            }
            return tempArray;
        },
        getPNum() {
            let tempArray = [];
            for (let i = 0; i < this.productArray.length; i++) {
                tempArray.push(parseInt(this.productArray[i].total));
            }
            return tempArray;
        },
        memberNumber() {
            const chartData = {
                type: "doughnut",
                data: {
                    labels: ["正常", "停權"],
                    datasets: [{
                        backgroundColor: ["rgb(127,255,0)", "rgb(255,77,64)"],
                        data: this.getMNum
                    }, ],
                },
            };
            return chartData;
        },
        orderNumber() {
            const chartData = {
                type: "doughnut",
                data: {
                    labels: ["交易完成", "交易取消", "訂單成立"],
                    datasets: [{
                        backgroundColor: ["rgb(255,0,0)", "rgb(255,140,0)", "rgb(255,255,0)"],
                        data: this.getONum
                    }, ],
                },
            };
            return chartData;
        },
        productNumber() {
            const chartData = {
                type: "doughnut",
                data: {
                    labels: ["上架", "下架"],
                    datasets: [{
                        backgroundColor: ["rgb(80,200,120)", "rgb(255,127,80)"],
                        data: this.getPNum
                    }, ],
                },
            };
            return chartData;
        },
        ArrayList() {
            const arrList = [{
                link: 'member',
                chartData: this.memberNumber,
                name: '會員管理',
                loaded: this.memberLoaded,
            }, {
                link: 'order',
                chartData: this.orderNumber,
                name: '訂單管理',
                loaded: this.orderLoaded,
            }, {
                link: 'product',
                chartData: this.productNumber,
                name: '商品管理',
                loaded: this.productLoaded,
            }];
            return arrList;
        }
    }
}
</script>

<style scoped lang="scss" src="./main.scss"></style>
