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
    import productService from "../../services/product.service"
    export default {
        name: 'category',
        components: {
            subject
        },
        data(){
            return{
                testTable: [
                    {
                        date: '2016-05-03',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 10
                    },
                    {
                        date: '2016-05-02',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 16
                    },
                    {
                        date: '2016-05-04',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 3
                    },
                    {
                        date: '2016-05-01',
                        name: 'Tom',
                        address: 'No. 189, Grove St, Los Angeles',
                        stock: 56
                    }
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
        },
        mounted(){
            productService.getProducts().then(data => {
                this.testTable = data
            })
        }
    }
</script>

<style scoped lang="scss" src="./category.scss"></style>