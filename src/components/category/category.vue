<template>

        <el-col :span="4" style="height: auto">

            <el-card :body-style="{padding:0}" v-show="category.length > 0">
                <template #header >
                    <el-row justify="center" class="card-header">
                        商品分類
                    </el-row>
                </template>
                <template v-for="element in category" :key="element">
                    <template v-if="element.searchCount !== undefined">
                        <el-row  justify="center" v-if="element.searchCount > 0">
                            <router-link :to="{
                                    path:`/category/${element.id}`,
                                    query: {
                                        productName: searchName
                                    }
                                }"  @click="changeSearchCategory(element.id, searchName)">
                                <el-button type="text" :class="{active:element.isActive}">
                                    {{element.name.concat(`(${element.searchCount})`)}}
                                </el-button>
                            </router-link>
                        </el-row>
                    </template>
                    <template v-else>
                        <el-row  justify="center">
                            <router-link :to="'/category/'+element.id" @click="changeCategory(element.id)" >
                                <el-button type="text" :class="{active:element.isActive}">
                                    {{element.name}}
                                </el-button>
                            </router-link>
                        </el-row>

                    </template>
                </template>
            
            </el-card>
            
        </el-col>
    

</template>

<script>

import productService from "../../services/product.service"
import categoryService from "../../services/category.service"
import CategoryController from './category.controller'
    export default {
        name: 'category',
        components: {
        },
        data(){
            return{
                sourceCategory:'',
                category:[],
                searchName: '',
            }
        },
        watch:{
            searchName(){
                if(this.searchName === '')
                    return
                
                productService.countProductInCategoryByName(this.searchName).then(async data => {
                    if(this.sourceCategory === '' ){
                        await (categoryService.getCategories().then(data =>{
                            this.sourceCategory = JSON.stringify(data);                           
                        }))
                    }
                    this.category = JSON.parse(this.sourceCategory).map(element => {
                        const findQuantity = data.find(x => x.TypeName === element.name)
                        if(findQuantity){
                            element.searchCount = findQuantity.quantity;
                        }else{
                            element.searchCount = 0;
                        }
                        return element;
                    });
                    
                    if(this.$route.params.category){
                        this.changeActiveCategory(this.category, Number(this.$route.params.category));
                    }
                })
            },
            "$route": function(){
                if(this.$route.query.productName){
                    
                    if(this.searchName === this.$route.query.productName){
                        this.$route.params.category ? this.changeActiveCategory(this.category, Number(this.$route.params.category)) : this.changeActiveCategory(this.category, 0);
                    }else{
                        this.searchName = this.$route.query.productName;
                    }
                }else{
                    this.category = JSON.parse(this.sourceCategory); 
                    if(this.$route.params.category){
                        this.changeActiveCategory(this.category, Number(this.$route.params.category));
                    }
                    this.searchName = '';
                }
            }
        },
        methods: CategoryController,
        mounted(){
            this.searchName = this.$route.query.productName ? this.$route.query.productName : '';
            if(this.$route.query.productName){
                this.searchName = this.$route.query.productName;
            }else{
                categoryService.getCategories().then(data =>{
                    this.category = data
                    this.sourceCategory = JSON.stringify(this.category);
                    this.changeActiveCategory(this.category, Number(this.$route.params.category))                    
                });
            }
            this.eventBus.on("recoverCategory", ()=>{
                this.category = JSON.parse(this.sourceCategory);
                this.changeCategory(0, true);
                this.searchName = '';
            })
            this.eventBus.on("searchEvent", (query) => {
                this.searchName = query;               
            })

        }
    }
</script>

<style scoped lang="scss" src="./category.scss"></style>