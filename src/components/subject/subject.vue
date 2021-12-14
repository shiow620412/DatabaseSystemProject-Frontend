<template>
    <a href="#max-height"><el-button type="info" class="return-top-button">回到頂部</el-button></a> 
    <div class="subject-div-content">
        <a href="https://www.youtube.com/"><el-card class="card" v-for="i in testTable" :key="i" id="max-height">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="subject-image"/>
            <div>
                <p>{{i.name}}</p>
            </div>
            <p style="color: red;">$ {{i.price}}</p>
        </el-card></a>
    </div>
</template>

<script>
    export default {
        name: 'subject',
        components: {
            
        },
        methods: {
            
        },
        props:{
            testTable: Array
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
        height: 800px;
    }
    .subject-image{
        width: 100%;
    }
    .card{
        width: 200px;
        margin: 10px;
        display: inline-block;
    }
    .card:hover{
        transform: scale(1.1);
    }
    .return-top-button{
        position: fixed;
        left: 1380px;
        top: 50px;
    }
</style>