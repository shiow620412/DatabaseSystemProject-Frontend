<template>
    <div class="category-div-content">
        <div v-for="(i,index) in category_type" :key="index" style="display: inline-block;margin-left: 50px;">
            <router-link to="/" @click="OnSelectProduct(index)"><img :src="i.photo" style="width: 50px;height: 50px;margin: auto auto;"></router-link>
            <p class="category-p">{{i.name}}</p>
        </div>
    </div>
    <el-row>
        <el-col :span="4" style="background-color: #E4FFD3;height: 800px;">
            <div style="width: 90%;margin: auto auto;">
                <p style="position: positive;left: -20px;">> 新上市</p>
                <p>> 有貨優先</p>
                <p>> 價錢低到高</p>
                <p>> 價錢高到低</p>
                <el-row>
                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div><el-input v-model="input1" /></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple-light">~</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"></div><el-input v-model="input2" /></el-col>
                    <el-col :span="1"><div class="grid-content bg-purple"></div></el-col>
                </el-row>
            </div>
        </el-col>
        <el-col :span="20"><div class=""><subject :getTable="inputTable"/></div></el-col>
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
                category: 0,
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
            productService.getProducts().then(data => {
                this.ResolveOverlongString(data);
            })
        }
    }
</script>

<style scoped lang="scss" src="./category.scss"></style>