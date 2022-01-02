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
                <el-button type="cord" shadow="always" @click="getPageID(item.pageID) & this.$router.push(item.link)">
                    <vue3-chart-js v-bind="{ ...item.chartData }" />
                    <div style="padding: 14px">
                        <span style="font-weight: bold;font-size: 25px;margin-top: 20px;">{{ item.name }}</span>
                    </div>
                </el-button>
            </el-col>
        </el-row>
        <p>memberNumber:  {{ this.memberNumber }}</p>
        <!-- <p>{{ this.memberNumber.data.datasets[0].data }}</p> -->
        <p>getMNum:  {{ this.getMNum }}</p>
        <p>orderNumber:  {{ this.orderNumber }}</p>
        <p>getONum:  {{ this.getONum }}</p>
        <p>productNumber:  {{ this.productNumber }}</p>
        <p>getPNum:  {{ this.getPNum }}</p>
    </el-main>
</el-container>
</template>

<script>
// ref link: https://github.com/J-T-McC/vue3-chartjs
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import orderService from '../../../services/admin/order.service'
import memberService from '../../../services/admin/user.service'
import productService from '../../../services/admin/product.service'

export default {
    name: 'main',
    components: {
        Vue3ChartJs,
    },
    data() {
        return {
            memberArray: [],
            orderArray: [],
            productArray: [],
        }
    },
    mounted() {
        memberService.getAllMemberStatus().then(data => {
            this.memberArray = data
        })
        orderService.getAllOrderStatus().then(data => {
            this.orderArray = data
        })
        productService.getAllProductStatus().then(data => {
            this.productArray = data
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
                console.log(this.orderArray[i].total);
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
        tt() {
            let test = [];
            for (let i = 1; i < 3; i++) {
                test.push(i);
            }
            return test
        },

        memberNumber() {
            const mNum = {
                type: "doughnut",
                data: {
                    labels: ["正常", "停權"],
                    datasets: [{
                        backgroundColor: ["rgb(127,255,0)", "rgb(255,77,64)"],
                        data: this.getMNum
                    }, ],
                },
            };
            return mNum;
        },
        orderNumber() {
            const oNum = {
                type: "doughnut",
                data: {
                    labels: ["交易完成", "交易取消", "確認中"],
                    datasets: [{
                        backgroundColor: ["rgb(255,0,0)", "rgb(255,140,0)", "rgb(255,255,0)"],
                        data: this.getONum
                    }, ],
                },
            };
            return oNum;
        },
        productNumber() {
            const pNum = {
                type: "doughnut",
                data: {
                    labels: ["正常", "停權"],
                    datasets: [{
                        backgroundColor: ["rgb(255,127,80)", "rgb(80,200,120)"],
                        data: this.getPNum
                    }, ],
                },
            };
            return pNum;
        },
        ArrayList() {
            const arrList = [{
                link: 'member',
                icon: 'el-icon-user',
                chartData: this.memberNumber,
                name: '會員管理',
            }, {
                link: 'order',
                icon: 'el-icon-s-order',
                chartData: this.orderNumber,
                name: '訂單管理',
            }, {
                link: 'product',
                icon: 'el-icon-shopping-bag-2',
                chartData: this.productNumber,
                name: '商品管理',
            }];
            return arrList;
        }
    }
}
</script>

<style scoped lang="scss" src="./main.scss"></style>
