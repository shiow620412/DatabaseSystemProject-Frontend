<template>
    <div>
        <input v-model="Message" placeholder="edit me">
        <p>Message is: {{Message}}</p>

        <el-button v-on:click="plus" type="primary" round>button</el-button>
        <el-button v-on:click="reset" type="warning" round>reset</el-button>
        <p>count is : {{count}}</p>

        <div class="block">
            <span class="demonstration">Default&nbsp;&nbsp;</span>
            <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time"></el-date-picker>
        </div>
    </div>
    <div class="scrollbar-div">
        <el-scrollbar style="height:400px">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
        </el-scrollbar>
    </div><br>
    <el-space wrap>
        <el-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
            <template #header>
                <div class="card-header">
                    <span>Card name</span>
                    <el-button class="button" type="text">Operation button</el-button>
                </div>
            </template>
            <div v-for="o in 4" :key="o" class="text item">
                {{ 'List item ' + o }}
            </div>
        </el-card>
    </el-space>
</template>

<script>
    export default {
        name: 'res',
        data() {
            return {
                Message: 'Hello',
                count: 0
            }
        },
        methods: {
            plus() {
                this.count++
            },
            reset() {
                this.count = 0;
            }
        },  
    }
</script>

<style>
    .scrollbar-demo-item {
        background-color: rgb(38, 235, 241);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
    }

    .scrollbar-div {
        width: 700px;
        margin: 0px auto;
    }
</style>