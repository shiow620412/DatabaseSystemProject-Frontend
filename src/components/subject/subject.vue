<template>
    <ul v-infinite-scroll="load" style="margin-block-start: 0em;padding-inline-start: 0px;">
        <a href="#max-height"><el-button type="info" class="return-top-button el-icon-upload2"><p>TOP</p></el-button></a> 
        <div class="subject-div-content">
            <el-card class="card" v-for="i in getTable" :key="i" id="max-height">
                <router-link :to="`/product/${i.ProductID}`">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="subject-image"/></router-link>
                    <div>
                        <p>{{i.ProductName}}</p>
                    </div>
                    <p style="color: red;">$ {{i.Price}}</p>
            </el-card>
        </div>
    </ul>
</template>

<script>
    export default {
        name: 'subject',
        components: {
            
        },
        methods: {
            load(){
                this.$emit('custom-event-trigger');
                console.log("Down");
            },
        },
        props:{
            getTable: Array,
        },
        data() {
            return {

            }
        },
        mounted(){
            
        }
    }
</script>

<style>
    .subject-div-content{
        background-color: #EFFFE4;
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
</style>