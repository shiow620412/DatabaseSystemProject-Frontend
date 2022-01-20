<template>
    <el-row justify="end" >
    
       
            
            <el-space :size="10">
                <el-icon :size="50" color="#E6A23C"><Filter /></el-icon>
                <div >
                    <el-space :size="10">
                        <el-checkbox-group  @change="filterSelectEvent"  v-model="filterSelect" v-for="(element,key) in filter" :key="key">
                            <el-checkbox-button  :label="key"></el-checkbox-button>
                        </el-checkbox-group>
                    </el-space>
                </div>
             

                    <el-input size="small"  placeholder="最低價格" v-model="minPrice"></el-input>
                    <p>~</p>
                    <el-input size="small"  placeholder="最高價格" v-model="maxPrice"></el-input>
            
                <el-col :span="5">
                    <el-button @click="filterClickEvent">查詢</el-button>
                </el-col>
            </el-space>
         
      
    
               
      
      
    </el-row>

</template>

<script>

import {Filter} from '@element-plus/icons'
import filterController from "./filter.controller"

export default {
    name: 'productFilter',
    props: ["clear"],
    components:{
        Filter
    },
    watch:{
        clear(){
            this.filterSelect = [];
            this.minPrice = "";
            this.maxPrice = "";
        },
        "$route" (){
            
            

            this.filterSelect = [];
            this.minPrice = "";
            this.maxPrice = "";
            
            const expectQueryString = ["filter", "sort", "minPrice", "maxPrice"];
            expectQueryString.forEach(queryString => {
                if(this.$route.query[queryString]){
                    if(queryString === "minPrice"){
                        this.minPrice = this.$route.query[queryString];
                    }
                    if(queryString === "maxPrice"){
                        this.maxPrice = this.$route.query[queryString];
                    }
                    if(queryString === "filter" || queryString === "sort"){
                        Object.entries(this.filter).forEach((element) => {
                            const value = Object.values(element[1])[0];
                            if(this.$route.query[queryString] === value){
                                this.filterSelect = [element[0]];
                            }
                        })
                        
                    }
                
                
                }
            });
            
        }
    },
    data(){
        return{
            filterSelect: [],
            filter:{
                "有貨優先": {filter:"stock"},    
                "銷售數量": {filter:"sales"},    
                "新上市": {filter:"productId"},    
                "價格由低到高": {sort:"asc"},    
                "價格由高到低": {sort:"desc"}    
            },
            minPrice: "",
            maxPrice: ""
        }
    },
    methods: filterController,
    mounted(){
        
    }
}
</script>

<style scoped>
    .el-col-24{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .el-col-10{
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .el-col-3{
        margin: 0 3px;
    }
</style>