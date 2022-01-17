<template>
    <el-col :span="20">
    
        <productFilter v-show="filterShow" :clear="clearFilter"
            @filterProduct="requestFilterProduct"
        ></productFilter>
    
        <el-row>
            <ul v-infinite-scroll="RequestNewPage" style="margin-block-start: 0em;padding-inline-start: 0px; width:100%">
                <a href="#max-height"><el-button type="info" class="return-top-button el-icon-upload2"><p>TOP</p></el-button></a> 
                <div class="subject-div-content">
                    <el-card class="card" v-for="i in productData" :key="i" id="max-height">
                        <!-- <router-link :to="`/product/${i.ProductID}`">
                            <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="subject-image"/></router-link> -->
                        <router-link :to="`/product/${i.ProductID}`">
                            <el-image :src="i.Thumbnail" class="subject-image">
                            </el-image>
                        </router-link>
                        <div>
                            <p>{{i.ProductName}}</p>
                        </div>
                        <p style="color: red;">$ {{i.Price}}</p>
                    </el-card>
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
                currentPage:1,
                maxPage:0,
                productData:[],
                categoryId:-1,
                filterObj:{},
                filterShow: false,

            }
        },
        watch:{
            categoryId: function(){
                if(this.categoryId !== 0){
                    this.filterShow = true;
                }else{
                    this.filterShow = false;
                }
                this.currentPage = 1;
                console.log("query", this.$route.query)
                if(Object.keys(this.$route.query).length > 0){
                    
                    const expectQueryString = ["productName", "filter", "sort", "minPrice", "maxPrice"];
                    const filterObj = {};
                    expectQueryString.forEach(queryString => {
                        if(this.$route.query[queryString]){
                            filterObj[queryString] = this.$route.query[queryString];
                            if(queryString === "minPrice"){
                                this.$refs.productFilter.minPrice = filterObj[queryString];
                            }
                            if(queryString === "maxPrice"){
                                this.$refs.productFilter.maxPrice = filterObj[queryString];
                            }
                            if(queryString === "filter" || queryString === "sort"){
                                console.log("123", this.filterOptions[filterObj[queryString]]);
                                this.$refs.productFilter.filterSelect = [this.filterOptions[filterObj[queryString]]];
                            }
                        
                        
                        }
                    });
                    this.filterObj = filterObj;
                    console.log("watch categoryId", this.filterObj);
                    return;
                }else{
                    this.filterObj = {}
                    console.log("watch categoryId else");
                }               
            },
            filterObj: function(){
                
                this.currentPage = 1;
                if(this.filterObj.productName){
                    if(this.categoryId){
                        console.log("search product with category")
                        productService.searchCategoryProductByName(this.categoryId, this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages
                        });
                    }else{
                        console.log("search product ")
                        productService.searchAllProductByName(this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages;
                        })
                    }
                }else{
                    if(this.categoryId){
                        console.log(" filterObj if true")
                        productService.getProductsByCategory(this.categoryId, this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages
                        });
                    }else{
                        console.log(" filterObj if false")
                        productService.getProducts(this.currentPage, this.filterObj).then(data =>{
                            this.productData = data.result;
                            this.maxPage = data.pages;
                        })
                    }
                }
            
                console.log("filterObj", this.filterObj);
            }
        },
        mounted(){
            this.categoryId = this.$route.params.category ? this.$route.params.category : 0;
            this.eventBus.on("changeCategory", (categoryId) => {
                console.log("changeCategory ", this.categoryId);
                if(this.categoryId === categoryId && categoryId === 0){
                    this.filterObj = {};
                }
                this.categoryId = categoryId;
                this.$route.query = {};                
                this.clearFilter = Math.random();
            });
            this.eventBus.on("changeSearchCategory", (searchObject) => {
                const {categoryId, productName} = searchObject;
                console.log("changeSearchCategory", categoryId);
                console.log("changeSearchCategory", productName);
                this.categoryId = categoryId;
                this.$route.query = {
                    productName
                };
                this.clearFilter = Math.random();
            });
            this.eventBus.on("searchEvent", (query) => {
                console.log("searchEvent ", this.filterObj)
                this.filterObj = {productName: query}                
                this.clearFilter = Math.random();
            })
        }
    }
</script>

<style scoped lang="scss" src="./subject.scss"> </style>
