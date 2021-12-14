<template>
    <div class="category-div-content">
        <div v-for="index in category_type" :key="index" style="display: inline-block;margin-left: 50px;">
            <router-link to="/"><img :src="index.photo" style="width: 50px;height: 50px;margin: auto auto;">
            <p>{{index.name}}</p></router-link>
        </div>
    </div>
    <el-row>
        <el-col :span="6"><div class="" style="background-color: #E4FFD3;height: 800px;">123</div></el-col>
        <el-col :span="18"><div class=""><subject :testTable="testTable"/></div></el-col>
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
                testTable:[
                    {
                        name: "tom",
                        price: 100
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