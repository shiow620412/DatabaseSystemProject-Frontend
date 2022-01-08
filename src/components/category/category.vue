<template>
    <div class="category-div-content">
        <div v-for="(i,index) in category_type" :key="i" style="display: inline-block;margin-left: 50px;">
            <router-link :to="`/category/${index+1}`" @click="OnSelectCategoy(index, searchName, '00000', input1, input2)"><img :src="i.photo" style="width: 50px;height: 50px;margin: auto auto;"></router-link>
            <p class="category-p">{{i.name}}</p>
        </div>
    </div>
    <el-row>
        <el-col :span="4" style="background-color: #E4FFD3;height: 800px;">
            <div style="width: 90%;margin: auto auto;">
                <router-link style="text-decoration: none;" :to="{query: {id:true}}" @click="changefilter(searchName, '10000', input1, input2)"><p style="position: positive;left: -20px;">> 新上市</p></router-link>
                <router-link style="text-decoration: none;" to="/" @click="changefilter(searchName, '01000', input1, input2)"><p style="position: positive;left: -20px;">> 有貨優先</p></router-link>
                <router-link style="text-decoration: none;" to="/" @click="changefilter(searchName, '00100', input1, input2)"><p style="position: positive;left: -20px;">> 價錢低到高</p></router-link>
                <router-link style="text-decoration: none;" to="/" @click="changefilter(searchName, '00010', input1, input2)"><p style="position: positive;left: -20px;">> 價錢高到低</p></router-link>
                <el-row>
                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div><el-input v-model="input1" /></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">~</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div><el-input v-model="input2" /></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                </el-row><br>
                <el-button @click="changefilter(searchName, '00001',this.input1,this.input2)">搜尋</el-button>
            </div>
        </el-col>
        <el-col :span="20"><div class=""><subject :getTable="inputTable" @custom-event-trigger="RequestNewPage"/></div></el-col>
    </el-row>
</template>

<script>
import subject from '../subject/subject.vue'
import productService from "../../services/product.service"
import CategoryController from './category.controller'
    export default {
        name: 'category',
        components: {
            subject
        },
        methods: CategoryController,
        data(){
            return{
                searchName: '',
                filter: "00000",
                max_page: 0,
                current_page: 1,
                category: -1,
                input1: "",
                input2: "",
                inputTable:[],
                category_type: [
                    {
                        photo: require("../../assets/category1.png"),
                        name: "水果"
                    },
                    {
                        photo: require("../../assets/category2.png"),
                        name: "食品"
                    },
                    {
                        photo: require("../../assets/category3.png"),
                        name: "電腦"
                    },
                    {
                        photo: require("../../assets/category4.png"),
                        name: "衣服"
                    },
                    {
                        photo: require("../../assets/category5.png"),
                        name: "日用品"
                    },
                    {
                        photo: require("../../assets/category6.png"),
                        name: "飲料"
                    },
                ]
            }
        },
        mounted(){
            this.eventBus.emit("ishide", localStorage.getItem("isLogin"));
            this.eventBus.on("click-send-msg", (msgData) => (
                this.searchByName(msgData.toString()),
                this.searchName = msgData
            ));
            this.eventBus.on("notifyReload", (msgData) => (
                console.log(msgData),
                productService.getProducts().then(data => {
                    this.ResolveOverlongString(data, 0);
                    this.current_page = 1;
                    this.name = '';
                })
            ));
            if(this.$route.params.category){
                productService.getProductBySearchAndCategory(this.$route.params.category,this.searchName,this.filter,this.input1,this.input2).then(data => {
                    this.ResolveOverlongString(data, 0);
                    this.category = parseInt(this.$route.params.category)-1;
                })
            }
            else if(this.$route.query.q){
                productService.getProductBySearch(this.$route.query.q).then(data => {
                    this.ResolveOverlongString(data, 0);
                })
            }
            else{
                productService.getProducts().then(data => {
                    this.ResolveOverlongString(data, 0);
                })
            }
        }
    }
</script>

<style scoped lang="scss" src="./category.scss"></style>