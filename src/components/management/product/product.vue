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
                                <el-image style="width: 100px; height: 100px" :src="imgURL + scope.row.Thumbnail" :preview-src-list="srcList" :initial-index="1">
                                </el-image>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="Price" label="商品價格" min-width="25%" align="center"></el-table-column>
                    <el-table-column prop="Stock" label="商品庫存" min-width="25%" align="center"></el-table-column>
                    <el-table-column label="在架上" min-width="18%" align="center">
                        <template v-slot="scope">
                                <el-tag :type="(scope.row.OnShelf === 'Yes') ? 'success' : 'error'" size="medium">{{ changeChinese(scope.row.OnShelf) }}</el-tag>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" min-width="25%" align="center">
                        <template #default="scope">
                            <div align="center" v-if="scope.row.OnShelf === 'Yes'">
                                <el-button size="mini" @click="(allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'two') & checkButton('edit') & editProduct(scope.row.ProductID)">編輯</el-button>
                                <el-button size="mini" @click="setPID(scope.row.ProductID) & (this.deleteDialogVisible = true)" type="danger">下架</el-button>
                            </div>
                            <div align="center" v-else>
                                <el-button size="mini" @click="setPID(scope.row.ProductID) & (this.onSelfDialogVisible = true)" type="success">上架</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="text-align: center">
                <el-pagination 
                    background 
                    @size-change="handleSizeChange" 
                    @current-change="handleCurrentChange" 
                    :current-page="currentPage" 
                    :page-sizes="[50, 100, 150]" 
                    :page-size="pageSize"
                    layout="total, prev, pager, next, jumper"
                    :total="this.productArray.total" />
                </div>
                <el-dialog v-model="deleteDialogVisible" width="20%">
                    <span>確定要將此商品下架嗎?</span>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="deleteDialogVisible = false">取消</el-button>
                            <el-button type="primary" @click="changeProductStatus(this.proID, false)">確定</el-button>
                        </span>
                    </template>
                </el-dialog>
                <el-dialog v-model="onSelfDialogVisible" width="20%">
                    <span>確定要將此商品上架嗎?</span>
                    <template #footer>
                        <span class="dialog-footer">
                            <el-button @click="onSelfDialogVisible = false">取消</el-button>
                            <el-button type="primary" @click="changeProductStatus(this.proID, true)">確定</el-button>
                        </span>
                    </template>
                </el-dialog>
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
                        <el-upload
                                class="avatar-uploader"
                                action="#"
                                accept=".jpg, .jpeg, .png, .jfif"
                                :show-file-list="false"
                                :before-upload="beforeAvatarUpload"
                                :on-change="handleChange"
                                name="image">
                            <div class="image" v-if="this.operationProduct.Thumbnail">
                                <img :src="imgURL + this.operationProduct.Thumbnail" class="avatar" />
                            </div>
                            <div class="image" v-else>
                                <span style="width: 100%;height: 100%;font-size: 100px;" class="el-icon-picture"></span>
                            </div>
                            <el-button style="width: 100%">{{ (this.tabName === '新增商品') ? '新增商品圖片' : '編輯商品圖片'}}</el-button>
                        </el-upload>
                    </el-col>
                    <el-col :span="11" class="pro_intro">
                        <div style="text-align: left;" class="pro_name_textarea_div">
                            <h1>商品名稱:&nbsp;&nbsp;<el-input type="textarea" v-model="this.operationProduct.ProductName" placeholder="請輸入商品名稱" size="small" class="pro_name_textarea" :autosize="{ minRows: 2, maxRows: 5 }"></el-input>
                            </h1>
                        </div>
                        <div style="text-align: left;" class="pro_info_div">
                            <h1>商品價格:&nbsp;&nbsp;
                                <span style="font-weight: normal;">NT$</span>
                                <el-input v-model="this.operationProduct.Price" placeholder="請輸入商品價格 (NT$)" size="small" style="width: 100%" type="number" :min="0" @change="checkPrice(this.operationProduct.Price)"></el-input>
                            </h1>
                            <el-col :span="15"></el-col>
                        </div>
                        <div style="text-align: left;" class="pro_info_div">
                            <h1>剩餘數量:&nbsp;&nbsp;
                                <el-input v-model="this.operationProduct.Stock" placeholder="請輸入剩餘數量" size="small" style="width: 100%" type="number" :min="0" @change="checkStock(this.operationProduct.Stock)">
                                </el-input>
                            </h1>
                        </div>
                        <div style="text-align: left;" class="pro_info_div" :disabled="(this.tabName === '新增商品') ? true : false" v-show="(this.tabName === '新增商品') ? true : false">
                            <h1>商品類型:&nbsp;&nbsp;
                                <el-select v-model="this.operationProduct.Type" placeholder="Select" size="medium">
                                    <el-option v-for="item in typesArray" :key="item.id" :label="item.name" :value="item.id"></el-option>
                                </el-select>
                            </h1>
                        </div>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="18" class="product-detail">
                        <vue-editor useCustomImageHandler @imageAdded="handleImageAdded" v-model="this.operationProduct.Description"></vue-editor>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="3"></el-col>
                    <el-col :span="9">
                        <el-button style="width: 100%;height: 5vh;font-size: 20px;" @click="clickCancel() & (allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'first')">取消</el-button>
                        </el-col>
                        <el-col :span="9">
                        <el-button style="width: 100%;height: 5vh;font-size: 20px;" @click="clickSave(this.proID) & (allowEdit = !allowEdit) & (readOnly = !readOnly) & (this.tabPosition = 'first')">儲存</el-button>
                    </el-col>
                    <el-col :span="3"></el-col>
                </el-row>
                <p style="color: black;font-size: 25px;font-weight: bold;">商品詳情頁面模擬</p>
                <productPage v-if="allowEdit & loaded" :SimulatedProduct="this.operationProduct" />
            </el-tab-pane>
        </el-tabs>
    </el-main>
</el-container>
</template>

<script>
import { ref } from 'vue'
import { VueEditor } from 'vue3-editor';
import productController from './product.controller';
import productPage from '../../product/product.vue';
import adminProductService from '../../../services/admin/product.service'
import categoryService from "../../../services/category.service"
export default {
    name: 'product',
    components: {
        VueEditor,
        productPage,
    },
    setup() {
        return {
            value: ref('')
        }
    },
    data() {
        return {
            search: '',
            allowEdit: false,
            readOnly: true,
            tabPosition: 'first',
            tabName: "新增商品",
            proID: 0,
            productArray: [],
            operationProduct: [],
            deleteDialogVisible: false,
            onSelfDialogVisible: false,
            currentPage: 1,
            pageSize: 50,
            loaded: false,
            typesArray:[]
        }
    },
    methods: productController,
    computed: {
        tables: function () {
            var search = this.search;
            if (search) {
                return this.productArray.result.filter(function (dataNews) {
                    return Object.keys(dataNews).some(function (key) {
                        return String(dataNews[key]).toLowerCase().indexOf(search) > -1
                    })
                })
            }
            return this.productArray.result
        }
    },
    watch:{
        '$route'(to){
            if(to.path === "/management/product"){
                this.operationProduct = [];
                this.allowEdit = !this.allowEdit
                this.readOnly = !this.readOnly
                this.tabPosition = 'first'
                adminProductService.getAllProducts().then(data => {
                    this.productArray = data;             
                })
            }
        }
    },
    mounted() {
        this.eventBus.emit('routeChanged');
        categoryService.getCategories().then(data =>{
            this.typesArray = data;
        });
        if (this.$route.params.id) {
            window.location.reload;
            this.allowEdit = !this.allowEdit
            this.readOnly = !this.readOnly
            this.tabPosition = 'two'
            
            if (parseInt(this.$route.params.id) !== 0) {
                this.checkButton('edit');
                this.editProduct(parseInt(this.$route.params.id));
            }
        } else {
            // window.location.reload();
            adminProductService.getAllProducts().then(data => {
                this.productArray = data;             
            })
        }
    }
}
</script>

<style scoped lang="scss" src="./product.scss"></style>
