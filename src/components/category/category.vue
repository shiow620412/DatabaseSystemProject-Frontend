<template>
    <div class="category-div-content">
        <div v-for="index in category_type" :key="index" style="display: inline-block;margin-left: 50px;">
            <router-link to="/"><img :src="index.photo" style="width: 50px;height: 50px;margin: auto auto;"></router-link>
            <p class="category-p">{{index.name}}</p>
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
        <el-col :span="20"><div class=""><subject :testTable="testTable"/></div></el-col>
    </el-row>
</template>

<script>
import subject from '../subject/subject.vue'
    export default {
        name: 'category',
        components: {
            subject
        },
        methods: {
            
        },
        data(){
            return{
                input1: "",
                input2: "",
                testTable:[
                    {
                        name: "tom",
                        price: 100
                    },
                    {
                        name: "tom",
                        price: 100
                    },
                    {
                        name: "karma",
                        price: 1827
                    },
                    {
                        name: "amy",
                        price: 100
                    },
                    {
                        name: "hi",
                        price: 100
                    },
                    {
                        name: "132",
                        price: 100
                    },
                    {
                        name: "tom",
                        price: 100
                    },
                    {
                        name: "tom",
                        price: 100
                    },
                    {
                        name: "tom",
                        price: 100
                    },
                    {
                        name: "tom",
                        price: 100
                    },
                ],
                category_type: [
                {
                    photo: require("../../assets/category1.png"),
                    name: "熱銷"
                },
                {
                    photo: require("../../assets/category2.png"),
                    name: "食品"
                },
                {
                    photo: require("../../assets/category3.png"),
                    name: "服裝"
                },
                {
                    photo: require("../../assets/category4.png"),
                    name: "電腦"
                },
                {
                    photo: require("../../assets/category5.png"),
                    name: "生活用品"
                },]
            }
        }
    }
</script>

<style scoped lang="scss" src="./category.scss"></style>