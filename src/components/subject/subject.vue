<template>
    <el-col :span="20">
    
        <productFilter v-show="filterShow" 
            @filterProduct="requestFilterProduct" ref="productFilter"
        ></productFilter>
    
        <el-row>
            <ul v-infinite-scroll="RequestNewPage" style="margin-block-start: 0em;padding-inline-start: 0px; width:100%">
                <a href="#max-height"><el-button type="info" class="return-top-button el-icon-upload2"><p>TOP</p></el-button></a> 
                <div class="subject-div-content">
                    <el-card class="card" v-for="i in productData" :key="i" id="max-height">
                        <router-link :to="`/product/${i.ProductID}`">
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="subject-image"/></router-link>
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
                filterOptions:{
                    stock: "有貨優先",
                    sales: "銷售數量",
                    productId: "新上市",
                    asc: "價格由低到高",
                    desc: "價格由高到低",
                },
                currentPage:1,
                maxPage:0,
                productData:[],
                categoryId:-1,
                filterObj:{},
                filterShow: false
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
                this.$refs.productFilter.filterSelect = [];
                this.$refs.productFilter.minPrice = "";
                this.$refs.productFilter.maxPrice = "";
            });
            this.eventBus.on("changeSearchCategory", (searchObject) => {
                const {categoryId, productName} = searchObject;
                console.log("changeSearchCategory", categoryId);
                console.log("changeSearchCategory", productName);
                this.categoryId = categoryId;
                this.$route.query = {
                    productName
                };

                this.$refs.productFilter.filterSelect = [];
                this.$refs.productFilter.minPrice = "";
                this.$refs.productFilter.maxPrice = "";
            });
            this.eventBus.on("searchEvent", (query) => {
                console.log("searchEvent ", this.filterObj)
                this.filterObj = {productName: query}
                this.$refs.productFilter.filterSelect = [];
                this.$refs.productFilter.minPrice = "";
                this.$refs.productFilter.maxPrice = "";
            })
        }
    }
</script>

<style scoped>
    .el-col{
        /* background-color: #EFFFE4; */
        min-height: 100vh;
    }
    .subject-image{
        width: 100%;
    }
    .card{
        width: 200px;
        height: 320px;
        margin: 10px;
        display: inline-block;
    }
    .card:hover{
        transform: scale(1.1);
    }
    .return-top-button{
        position: fixed;
        left: 1440px;
        top: 0px;
        background-color: #E4FFD3;
        color: black;
    }
    .el-card__body p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
