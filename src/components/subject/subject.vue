<template>
    <ul v-infinite-scroll="load" style="margin-block-start: 0em;padding-inline-start: 0px;">
    <a href="#max-height"><el-button type="info" class="return-top-button el-icon-upload2"><p>TOP</p></el-button></a> 
    <div class="subject-div-content">
        <a href="https://www.youtube.com/"><el-card class="card" v-for="i in getTable" :key="i" id="max-height">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="subject-image"/>
            <div>
                <p>{{i.ProductName}}</p>
            </div>
            <p style="color: red;">$ {{i.Price}}</p>
        </el-card></a>
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
                this.$emit('custom-event-trigger')
            }
        },
        props:{
            getTable: Array,
        },
        data() {
            return {
                tableData: [
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
                ]
            }
        }
    }
</script>

<style>
    .subject-div-content{
        background-color: #EFFFE4;
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