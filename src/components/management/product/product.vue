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
                <!-- 可以搜尋商品
                顯示出所有商品
                修改商品(可以刪除商品跟改變商品狀態)
                #需要加上換頁面或是無窮無窮滾動 -->
                <!-- <el-button @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'two')">編輯</el-button> -->

                <div style="margin-bottom: 10px" align="right">
                    <el-text style="font-size: 18px;font-weight: bold">搜尋: &nbsp;&nbsp;</el-text>
                    <el-input style="width: 250px" placeholder="Search" class="search" v-model="search"></el-input>
                </div>
                <el-table :data="tables" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'memberID' }" row-style="height: 10vh" max-height="490">
                    <el-table-column prop="productID" label="商品ID" min-width="15%" align="center" sortable></el-table-column>
                    <el-table-column prop="productName" label="商品名稱" min-width="25%" align="center" sortable></el-table-column>
                    <el-table-column label="商品圖片" min-width="25%" align="center">
                        <template #default="scope">
                            <!-- <div class="image"><img :src="scope.row.photo"></div> -->
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
                            <el-button size="mini" @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'two')" v-show="!scope.row.click">編輯</el-button>
                            <el-button size="mini" @click="(scope.row.click = false) & clickSave(scope.$index)" v-show="scope.row.click">儲存</el-button>
                            <!-- <el-button size="mini" @click="clickEdit(scope.$index, scope.row) & (this.isSave = true) & (this.isEdit = false) & (this.isDelete = true)" v-show="this.isEdit">編輯</el-button>
                            <el-button size="mini" @click="(this.isSave = false) & (this.isEdit = true) & (this.isDelete = false)" v-show="this.isSave">儲存</el-button> -->
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
                <el-row class="product-briefing">
                    <el-col :span="3"></el-col>
                    <el-col :span="7" class="pro_Image">
                        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
                    </el-col>

                    <el-col :span="11" class="pro_intro">
                        <div class="pro_name" style="text-align: center;">
                            <el-input v-model="this.product.name" placeholder="請輸入商品名稱"></el-input>
                        </div>
                        <el-row class="row_three">

                            <h1>商品價格:&nbsp;&nbsp;</h1>
                            <h1>TWD <el-input v-model="this.product.price" placeholder="請輸入商品價格" size="small" style="width: auto" type="number" :min="0" @change="checkNumber(this.product.price)"></el-input>
                            </h1>
                            <el-col :span="15"></el-col>
                        </el-row>
                        <el-row class="row_three">
                            <h1>剩餘數量:&nbsp;&nbsp;
                                <el-input v-model="this.product.stock" placeholder="請輸入剩餘數量" size="small" style="width: auto" type="number" :min="0" @change="checkStock(this.product.stock)">
                                </el-input>
                            </h1>
                        </el-row>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18" class="product-detail">
                        <vue-editor v-model="content"></vue-editor>
                        <!-- <div v-text="content"></div> -->
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18">
                        <el-button style="width: 100%;height: 5vh;font-size: 20px;" @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'first')">儲存</el-button>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>

                <p style="color: black;font-size: 25px;font-weight: bold;">商品詳情頁面模擬</p>
                <el-row class="product-briefing">
                    <el-col :span="3"></el-col>
                    <el-col :span="7" class="pro_Image">
                        <div class="image"><img src="http://www.am1470.com/data/activities/4988_747715_1.jpg"></div>
                    </el-col>
                    <el-col :span="11" class="pro_intro">
                        <div class="pro_name">
                            <h3>{{this.product.name}}</h3>
                        </div>
                        <el-row class="row_three">
                            <el-col :span="9">
                                <div class="pro_price">
                                    <h1>TWD {{this.product.price}}</h1>
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
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max=product.stock label="描述文字">
                                    </el-input-number>
                                </div>
                            </el-col>
                            <el-col :span="6">
                                <div class="the_rest_of"><span>還剩下{{product.stock}}個</span></div>
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
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18" class="product-detail">
                        <div class="ql-editor" v-html="content"></div>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
            </el-tab-pane>
        </el-tabs>

        <!-- <el-tabs :tab-position="tabPosition" style="height: 200px">
                <el-tab-pane label="soldOut">修改</el-tab-pane>
                <el-tab-pane label="sell">新增</el-tab-pane>
            </el-tabs> -->
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
            activeName: "0",
            allowEdit: false,
            readOnly: true,
            tabPosition: 'first',
            num: 1,
            productArray: [{
                productID: 0,
                productName: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                describe: "txt url"
            }, {
                productID: 1,
                productName: "商品1",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                describe: "txt url"
            }, {
                productID: 2,
                productName: "商品2",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                describe: "txt url"
            }, {
                productID: 3,
                productName: "商品3",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                describe: "txt url"
            }, {
                productID: 4,
                productName: "商品4",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                describe: "txt url"
            }, {
                productID: 5,
                productName: "商品5",
                photo: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                price: 515,
                stock: 10,
                describe: "txt url"
            }],
            product: {
                name: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
                price: 515,
                stock: 10,
                describe: {
                    src1: "文字敘述",
                    src2: "http:www...",
                    src3: "Image"
                }
            },
            content: "<h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6><p>Normal</p><p class='ql-align-right'>test-right</p>"
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
