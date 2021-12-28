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
                <el-table :data="tables" style="width: 100%;font-size: 15px" :default-sort="{ prop: 'ProductID' }" row-style="height: 10vh" max-height="450">
                    <el-table-column prop="ProductID" label="商品ID" min-width="15%" align="center" sortable></el-table-column>
                    <el-table-column prop="ProductName" label="商品名稱" min-width="25%" align="center" sortable></el-table-column>
                    <el-table-column label="商品圖片" min-width="25%" align="center">
                        <template #default="scope">
                            <div class="demo-image__preview">
                                <el-image style="width: 100px; height: 100px" :src="scope.row.Thumbnail" :preview-src-list="srcList" :initial-index="1">
                                </el-image>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Price" label="商品價格" min-width="25%" align="center"></el-table-column>
                    <el-table-column prop="Stock" label="商品庫存" min-width="25%" align="center"></el-table-column>
                    <el-table-column label="操作" min-width="20%" align="center">
                        <template #default="scope">
                            <div align="center">
                            <el-button size="mini" @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'two') & checkButton('edit') & editProduct(scope.$index, scope.row)">編輯</el-button>
                            <el-button size="mini" @click="deleteProduct(scope.$index, scope.row.ProductID)" type="danger">刪除</el-button>
                            </div>
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
                        <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" limit="1" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :on-progress="checkImg" :on-exceed="handleExceed">
                            <div class="image" v-if="this.productArray[this.index].Thumbnail">
                                <img style="width: 100%;height: 100%" :src="this.productArray[this.index].Thumbnail" />
                            </div>
                            <div class="image" v-else>
                                <span style="width: 100%;height: 100%;font-size: 100px;" class="el-icon-picture"></span>
                            </div>
                            <el-button style="width: 100%" @click="clickPhoto(this.index)">{{ (this.tabName === '新增商品') ? '新增商品圖片' : '編輯商品圖片'}}</el-button>
                        </el-upload>
                    </el-col>

                    <el-col :span="11" class="pro_intro">
                        <div style="text-align: left;" class="pro_name_textarea_div">
                            <h1>商品名稱:&nbsp;&nbsp;<el-input type="textarea" v-model="this.productArray[this.index].ProductName" placeholder="請輸入商品名稱" size="small" class="pro_name_textarea" :autosize="{ minRows: 2, maxRows: 5 }"></el-input>
                                <!-- <h1>商品名稱:&nbsp;&nbsp;<el-input type="textarea" v-model="this.productArray[this.index].ProductName" placeholder="請輸入商品名稱" size="small" class="pro_name_textarea" max-height="100%"></el-input> -->
                            </h1>
                        </div>
                        <div style="text-align: left;" class="pro_info_div">
                            <h1>商品價格:&nbsp;&nbsp;
                                <span style="font-weight: normal;">NT$</span>
                                <el-input v-model="this.productArray[this.index].Price" placeholder="請輸入商品價格 (NT$)" size="small" style="width: 100%" type="number" :min="0" @change="checkNumber(this.productArray[this.index].Price)"></el-input>
                            </h1>
                            <el-col :span="15"></el-col>
                        </div>
                        <div style="text-align: left;" class="pro_info_div">
                            <h1>剩餘數量:&nbsp;&nbsp;
                                <el-input v-model="this.productArray[this.index].Stock" placeholder="請輸入剩餘數量" size="small" style="width: 100%" type="number" :min="0" @change="checkStock(this.productArray[this.index].Stock)">
                                </el-input>
                            </h1>
                        </div>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18" class="product-detail">
                        <vue-editor v-model="this.productArray[this.index].description"></vue-editor>
                        <!-- <vue-editor useCustomImageHandler @imageAdded="handleImageAdded" v-model="this.productArray[this.index].description" :acceptDescription="this.productArray[this.index].description"></vue-editor> -->
                        <!-- <div v-text="this.productArray[this.index].description"></div> -->
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18">
                        <el-button style="width: 100%;height: 5vh;font-size: 20px;" @click="clickSave(this.index) & (allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'first')">儲存</el-button>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>

                <p style="color: black;font-size: 25px;font-weight: bold;">商品詳情頁面模擬</p>
                <productPage :product="this.productArray[this.index]" />
            </el-tab-pane>
        </el-tabs>
    </el-main>
</el-container>
</template>

<script>
import {
    VueEditor
} from 'vue3-editor';
import productController from './product.controller';
import productPage from '../../product/product.vue';
// import imageService from '../../../services/image.service'
export default {
    name: 'product',
    components: {
        VueEditor,
        productPage,
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
                ProductID: 0,
                ProductName: "-特價- FCMM 防風 外套 騎車 韓國正品｜ 96LINE.TW 韓國代購",
                Thumbnail: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                Price: 515,
                Stock: 10,
                description: "<p>txt url</p><p class='ql-align-center'>product <span style='color: rgb(230, 100, 0);'>description</span></p>"
            }, {
                ProductID: 1,
                ProductName: "商品1",
                Thumbnail: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                Price: 515,
                Stock: 10,
                description: "<p>txt url</p>"
            }, {
                ProductID: 2,
                ProductName: "商品2",
                Thumbnail: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                Price: 515,
                Stock: 10,
                description: "p class='ql-align-center'>product2 <span style='color: rgb(230, 0, 255);'>description</span></p>"
            }, {
                ProductID: 3,
                ProductName: "商品3",
                Thumbnail: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                Price: 515,
                Stock: 10,
                description: "<p>txt url</p>"
            }, {
                ProductID: 4,
                ProductName: "商品4",
                Thumbnail: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                Price: 515,
                Stock: 10,
                description: "<p>txt url</p>"
            }, {
                ProductID: 5,
                ProductName: "商品5",
                Thumbnail: "http://www.am1470.com/data/activities/4988_747715_1.jpg",
                Price: 1000,
                Stock: 1,
                description: "<p class='ql-align-center'>product <span style='color: rgb(230, 255, 0);'>description</span></p>"
            }],
            operationProduct: {
                ProductID: 0,
                ProductName: '',
                Thumbnail: '',
                Price: 0,
                Stock: 0,
                description: ''
            },
            testData: "Test send data"
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
    },
    // mounted() {
    //     imageService.getImage().then(data => {
    //         this.ResolveOverlongString(data, 0);
    //     })
    // }
}
</script>

<style scoped lang="scss" src="./product.scss"></style>
