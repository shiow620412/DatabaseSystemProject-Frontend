<template>
    <div class="category-div-content">
        <div v-for="index in category_type" :key="index" style="display: inline-block;margin-left: 20px;">
            <el-button class="category-button"><img :src="index.photo" style="width: 100%;"></el-button>
            <p>{{index.name}}</p>
        </div>
    </div>
    <subject :testTable="testTable"/>
</template>

<script>
import subject from '../subject/subject.vue'
    export default {
        name: 'category',
        components: {
            subject
        },
        data(){
            return{
                testTable:[
                    {
                        name: "tom"
                    },
                    {
                        name: "amy"
                    },
                    {
                        name: "hi"
                    },
                    {
                        name: "132"
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
                    photo: require("../../assets/category4.jpg"),
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