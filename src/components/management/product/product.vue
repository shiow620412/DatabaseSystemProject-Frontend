<template>
<el-container>
    <el-header height="40px">
        <el-text style="font-size: 25px;font-weight: bold">商品管理</el-text>
    </el-header>
    <el-main>

        <el-tabs :tab-position="tabPosition" v-model="tabPosition" type="card" style="margin-bottom: 45px;">
            <el-tab-pane label="first" name="first" :disabled="!this.readOnly">
                <template #label>
                    <span class="el-icon-sold-out">
                        選擇商品
                    </span>
                </template>
                <el-row style="margin-bottom: 10px">
                    <el-col :span="12" align="left">
                        <el-button style="height: 100%;width: 25%" size="mini" @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'two') & checkButton('add') & addProduct()">新增商品</el-button>
                    </el-col>
                    <el-col :span="12" align="right">
                        <el-text style="font-size: 18px;font-weight: bold">搜尋: &nbsp;&nbsp;</el-text>
                        <el-input style="width: 250px" placeholder="Search" class="search" v-model="search"></el-input>
                    </el-col>
                </el-row>
                <el-table :data="tables" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'memberID' }" row-style="height: 10vh" max-height="450">
                    <el-table-column prop="productID" label="商品ID" min-width="15%" align="center" sortable></el-table-column>
                    <el-table-column prop="productName" label="商品名稱" min-width="25%" align="center" sortable></el-table-column>
                    <el-table-column label="商品圖片" min-width="25%" align="center">
                        <template #default="scope">
                            <div class="demo-image__preview">
                                <el-image style="width: 100px; height: 100px" :src="scope.row.photo" :preview-src-list="srcList" :initial-index="1">
                                </el-image>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="price" label="商品價格" min-width="25%" align="center"></el-table-column>
                    <el-table-column prop="stock" label="商品庫存" min-width="25%" align="center"></el-table-column>
                    <el-table-column label="操作" min-width="13%" align="center">
                        <template #default="scope">
                            <el-button size="mini" @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'two') & checkButton('edit') & editProduct(scope.$index, scope.row)">編輯</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10,15]" :page-size="pageSize" layout="total,jumper,prev, pager, next,size" :total="files_count">
                </el-pagination>

            </el-tab-pane>
            <el-tab-pane label="two" name="two" :disabled="!this.allowEdit">
                <template #label>
                    <span class="el-icon-sell">
                        新增/編輯商品
                    </span>
                </template>
                <p style="color: black;font-size: 25px;font-weight: bold;">{{ this.tabName }}</p>
                <el-row class="product-briefing">
                    <el-col :span="3"></el-col>
                    <el-col :span="7" class="pro_Image">
                        <div class="image"><img style="width: 100%;height: 100%" :src="this.productArray[this.index].photo"></div>
                        <el-button style="width: 100%" @click="clickPhoto(this.index)">{{ (this.tabName === '新增商品') ? '新增商品圖片' : '編輯商品圖片'}}</el-button>
                    </el-col>

                    <el-col :span="11" class="pro_intro">
                        <div style="text-align: center;">
                            <h1>商品名稱:&nbsp;&nbsp;<textarea v-model="this.productArray[this.index].productName" placeholder="請輸入商品名稱" size="small" style="width: auto"></textarea>
                            </h1>
                        </div>
                        <!-- <el-row class="row_three"> -->
                        <div style="text-align: center;">
                            <h1>商品價格:&nbsp;&nbsp;
                                <span>TWD </span>
                                <el-input v-model="this.productArray[this.index].price" placeholder="請輸入商品價格" size="small" style="width: auto" type="number" :min="0" @change="checkNumber(this.productArray[this.index].price)"></el-input>
                            </h1>
                            <el-col :span="15"></el-col>
                        </div>
                        <!-- </el-row> -->
                        <!-- <el-row class="row_three"> -->
                        <div style="text-align: center;">
                            <h1>剩餘數量:&nbsp;&nbsp;
                                <el-input v-model="this.productArray[this.index].stock" placeholder="請輸入剩餘數量" size="small" style="width: auto" type="number" :min="0" @change="checkStock(this.productArray[this.index].stock)">
                                </el-input>
                            </h1>
                            </div>
                        <!-- </el-row> -->
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18" class="product-detail">
                        <vue-editor v-model="this.productArray[this.index].description"></vue-editor>
                        <!-- <div v-text="this.productArray[this.index].description"></div> -->
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <!-- <el-col :span="18"> -->
                    <el-col :span="9">
                        <el-button style="width: 100%;height: 5vh;font-size: 20px;" @click="clickCancel(this.index) & (allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'first')">取消</el-button>
                    </el-col>
                    <el-col :span="9">
                        <el-button style="width: 100%;height: 5vh;font-size: 20px;" @click="clickSave(this.index) & (allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'first')">儲存</el-button>
                    </el-col>
                    <!-- </el-col> -->
                    <el-col :span="3"></el-col>
                </el-row>

                <p style="color: black;font-size: 25px;font-weight: bold;">商品詳情頁面模擬</p>
                <el-row class="product-briefing">
                    <el-col :span="3"></el-col>
                    <el-col :span="7" class="pro_Image">
                        <div class="image"><img :src="this.productArray[this.index].photo"></div>
                    </el-col>
                    <el-col :span="11" class="pro_intro">
                        <div class="pro_name">
                            <h3>{{this.productArray[this.index].productName}}</h3>
                        </div>
                        <el-row class="row_three">
                            <el-col :span="9">
                                <div class="pro_price">
                                    <h1>NT$ {{ this.productArray[this.index].price }}</h1>
                                </div>
                            </el-col>
                            <el-col :span="15"></el-col>
                        </el-row>
                        <el-row class="row_three">
                            <el-col :span="6">
                                <div class="quantity_text"><span>數量</span></div>
                            </el-col>
                            <el-col :span="6">
                                <div class="pro_input_quantity">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="this.productArray[this.index].stock" label="描述文字">
                                    </el-input-number>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="the_rest_of"><span>還剩下{{ this.productArray[this.index].stock }}個</span></div>
                            </el-col>
                            <el-col :span="6"></el-col>
                        </el-row>
                        <el-row class="add_procar">
                            <el-col :span="4"></el-col>
                            <el-col :span="8"><br><br>
                                <el-button type="success">加入購物車</el-button>
                            </el-col>
                            <el-col :span="12"></el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row class="product-briefing">
                    <el-col :span="3"></el-col>
                    <el-col :span="18" class="product-detail">
                        <div class="ql-editor" v-html="this.productArray[this.index].description"></div>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>
    </el-main>
</el-container>
</template>

<script>
import {
    VueEditor
} from 'vue3-editor';
import productController from './product.controller.js'
export default {
    name: 'product',
    components: {
        VueEditor,
    },
    data() {
        return {
            search: '',
            allowEdit: false,
            readOnly: true,
            tabPosition: 'first',
            tabName: "新增商品",
            num: 1,
            index: 0,
            productArray: [{
                productID: 0,
                productName: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                description: "<p>txt url</p><p class='ql-align-center'>product <span style='color: rgb(230, 100, 0);'>description</span></p>"
            }, {
                productID: 1,
                productName: "商品1",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                description: "<p>txt url</p>"
            }, {
                productID: 2,
                productName: "商品2",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                description: "p class='ql-align-center'>product2 <span style='color: rgb(230, 0, 255);'>description</span></p>"
            }, {
                productID: 3,
                productName: "商品3",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                description: "<p>txt url</p>"
            }, {
                productID: 4,
                productName: "商品4",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                description: "<p>txt url</p>"
            }, {
                productID: 5,
                productName: "商品5",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                description: "<p class='ql-align-center'>product <span style='color: rgb(230, 255, 0);'>description</span></p>"
            }],
            operationProduct: {
                productID: 0,
                productName: '',
                photo: '',
                price: 0,
                stock: 0,
                description: ''
            },
        }
    },
    methods: productController,
    computed: {
        tables: function () {
            var search = this.search;
            if (search) {
                return this.productArray.filter(function (dataNews) {
                    return Object.keys(dataNews).some(function (key) {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.productArray
        }
    }
}
</script>

<style scoped lang="scss" src="./product.scss"></style>
