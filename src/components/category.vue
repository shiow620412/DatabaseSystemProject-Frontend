<template>
    <div class="category-div-content">
        <div v-for="index in category_type" :key="index" style="display: inline-block;margin-left: 20px;">
            <el-button class="category-button"><img :src="index.photo" style="width: 100%;"></el-button>
            <p>{{index.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'category',
        components: {
            
        },
        data(){
            return{
                category_type: [
                {
                    photo: require("../assets/category1.png"),
                    name: "熱銷"
                },
                {
                    photo: require("../assets/category2.png"),
                    name: "食品"
                },
                {
                    photo: require("../assets/category3.png"),
                    name: "服裝"
                },
                {
                    photo: require("../assets/category4.jpg"),
                    name: "電腦"
                },
                {
                    photo: require("../assets/category5.png"),
                    name: "生活用品"
                },]
            }
        }
    }
</script>

<style>
    .category-div-content{
        background-color: #F8F8F8;
        height: 150px;
        padding-top: 25px;
        text-align: center;
    }
    .category-button{
        width: 80px;
        height: 80px;
    }
    .category-button:hover{
        transform: scale(1.2);
    }
    p{
        text-align: center;
        margin-bottom: 20px;
    }
</style>