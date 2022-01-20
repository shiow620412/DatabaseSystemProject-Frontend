<template>
    <el-col :span="20">
    
        <productFilter v-show="filterShow" :clear="clearFilter"
            @filterProduct="requestFilterProduct"
        ></productFilter>
    
        <el-row>
            <ul v-infinite-scroll="RequestNewPage" style="margin-block-start: 0em;padding-inline-start: 0px; width:100%">
                <a href="#max-height"><el-button type="info" class="return-top-button el-icon-upload2"><p>TOP</p></el-button></a> 
                <div class="subject-div-content">
                    <template  v-for="i in productData" :key="i" >

                        <router-link :to="`/product/${i.ProductID}`">
                            <el-card class="card">
                                <!-- <router-link :to="`/product/${i.ProductID}`">
                                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="subject-image"/></router-link> -->
                                    <el-image :src="imgURL + i.Thumbnail" class="subject-image">
                                    </el-image>
                                <div>
                                    <p>{{i.ProductName}}</p>
                                </div>
                                <p style="color: red;">$ {{i.Price}}</p>
                            </el-card>
                        </router-link>
                    </template>
                </div>
            </ul>
        </el-row>
    </el-col>
</template>

<script>
    import productFilter from "../filter/filter.vue"
    import subjectController from "./subject.controller"
    import productService from "../../services/product.service"
    export default {
        name: 'subject',
        components: {
            productFilter
        },
        methods: subjectController,
        data() {
            return {
                clearFilter: 0,
                setFilter:{},
                currentPage:1,
                maxPage:0,
                productData:[],
                categoryId:-1,
                filterObj:{},
                filterShow: false,

            }
        },
        watch:{
            categoryId :"watchCategory",
            filterObj: function(){
                
                this.currentPage = 1;
                if(this.filterObj.productName){
                    
                    if(this.categoryId){
                        
                        productService.searchCategoryProductByName(this.categoryId, this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages
                        });
                    }else{
                        
                        productService.searchAllProductByName(this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages;
                        })
                    }
                }else{
                    if(this.categoryId){
                        
                        productService.getProductsByCategory(this.categoryId, this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages
                        });
                    }else{
                        
                        productService.getProducts(this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages;
                        })
                    }
                }
            
                
            }, "$route": function(){
                
                if(this.$route.params.category){      
                    if(this.categoryId !== this.$route.params.category)              
                        this.categoryId = this.$route.params.category;
                    else
                        this.watchCategory();
                }else{
                    this.filterShow = false;
                    if(this.categoryId === 0)
                        this.watchCategory();
                    else
                        this.categoryId = 0;
                }
            }
        },
        mounted(){
            this.categoryId = this.$route.params.category ? this.$route.params.category : 0;
            this.eventBus.on("changeCategory", (categoryId) => {
                
                if(this.categoryId === categoryId && categoryId === 0){
                    this.filterObj = {};
                }
                this.categoryId = categoryId;
                this.$route.query = {};                
                this.clearFilter = Math.random();
            });
            this.eventBus.on("changeSearchCategory", (searchObject) => {
                const {categoryId, productName} = searchObject;
                
                
                this.categoryId = categoryId;
                this.$route.query = {
                    productName
                };
                this.clearFilter = Math.random();
            });
            this.eventBus.on("searchEvent", (query) => {
                
                
                this.$route.query = {productName: query}                
                if(this.categoryId === 0){
                    this.filterObj = this.$route.query;
                }else{
                    this.categoryId = 0;
                }
                this.clearFilter = Math.random();
            })
        }
    }
</script>

<style scoped lang="scss" src="./subject.scss"> </style>
