<template>
    <div class="div-content">
        <a href="https://www.youtube.com/"><el-card class="card" v-for="i in 90" :key="i" id="max-height">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image"/>
            <div>
                <p>Yummy hamburger</p>
            </div>
            <el-button type="text" class="button">Operating</el-button>
        </el-card></a>
    </div>
    <a href="#max-height"><el-button type="info" class="return-top-button">回到頂部</el-button></a>
</template>

<script>
    export default {
        name: 'subject',
        components: {
            
        },
        methods: {
            
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
    .div-content{
        width: 75%;
        margin: 10px auto;
    }
    .image{
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
        float: right;
    }
</style>