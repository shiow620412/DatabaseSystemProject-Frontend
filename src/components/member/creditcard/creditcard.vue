<template>
    <div class="information-div-content">
        <el-row>
            <el-col :span="12" style="margin-top: 20px;"><div>我的信用卡</div></el-col>
            <el-col :span="12" style="margin-top: 20px;"><div><el-button @click="addCard()"> + 新增信用卡</el-button></div></el-col>
        </el-row>
        <hr>
        <div v-if="isEditShow" class="hidden-div-edit">
            <el-form :label-position="labelPosition" label-width="100px">
                <el-form-item label="卡號">
                    <el-input v-model="CardformLabelAlign.number" require></el-input>
                </el-form-item>
                <el-form-item label="安全碼">
                    <el-input v-model="CardformLabelAlign.safeCode"></el-input>
                </el-form-item>
                <el-form-item label="年">
                    <el-input v-model="CardformLabelAlign.year"></el-input>
                </el-form-item>
                <el-form-item label="月">
                    <el-input v-model="CardformLabelAlign.month"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onEditSubmit()">Create</el-button>
                    <el-button @click="windowsEditClose()">Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div v-if="isAddShow" class="hidden-div-add">
            <el-form :label-position="labelPosition" label-width="100px">
                <el-form-item label="卡號">
                    <el-input v-model="CardformLabelAlign.number" require></el-input>
                </el-form-item>
                <el-form-item label="安全碼">
                    <el-input v-model="CardformLabelAlign.safeCode"></el-input>
                </el-form-item>
                <el-form-item label="年">
                    <el-input v-model="CardformLabelAlign.year"></el-input>
                </el-form-item>
                <el-form-item label="月">
                    <el-input v-model="CardformLabelAlign.month"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onAddSubmit()">Create</el-button>
                    <el-button @click="windowsAddClose()">Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="order-div">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="number" label="卡號" width="180" align="center"/>
                <el-table-column prop="deadline" label="到期日" width="180" align="center"/>
                <el-table-column align="right">
                <template #default="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index)">Edit</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">Delete</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'creditCard',
        components: {
            
        },
        data(){
            return{
                isEditShow: false,
                isAddShow: false,
                currentClick: 0,
                labelPosition: 'right',
                CardformLabelAlign: {
                    number: '',
                    safeCode: '',
                    year: '',
                    month: '',
                },
                tableData: [
                    {
                        number: '20160503',
                        deadline: '2013/02',
                    },
                    {
                        number: '20160502',
                        deadline: '2013/02',
                    },
                    {
                        number: '20160504',
                        deadline: '2013/02',
                    },
                    {
                        number: '20160501',
                        deadline: '2013/02',
                    },
                ],
            }
        },
        methods: {
            addCard(){
                this.isAddShow = true;
            },
            onAddSubmit(){
                this.tableData.push({number: this.CardformLabelAlign.number,deadline: this.CardformLabelAlign.year.toString()+'/'+this.CardformLabelAlign.month.toString()})
                this.isAddShow = false;
                this.CardformLabelAlign.number = "";
                this.CardformLabelAlign.safeCode = "";
                this.CardformLabelAlign.year = "";
                this.CardformLabelAlign.month = "";
            },
            windowsAddClose(){
                this.isAddShow = false;
            },
            handleEdit(index) {
                this.isEditShow = true;
                this.currentClick = index;
            },
            handleDelete(index) {
                if(confirm('確認刪除?')){
                    this.tableData.splice(index, 1);
                }
            },
            onEditSubmit(){
                this.tableData[this.currentClick].number = this.CardformLabelAlign.number;
                this.tableData[this.currentClick].deadline = this.CardformLabelAlign.year.toString()+'/'+this.CardformLabelAlign.month.toString();
                this.isEditShow = false;
            },
            windowsEditClose(){
                this.isEditShow = false;
                this.CardformLabelAlign.number = "";
                this.CardformLabelAlign.safeCode = "";
                this.CardformLabelAlign.year = "";
                this.CardformLabelAlign.month = "";
            },
        },
    }
</script>

<style>
    .information-div-content{
        width: 90%;
        background-color: white;
        border-radius: 10px;
        margin: auto auto;
    }
    .hidden-div-edit{
        position: fixed;
        left: 700px;
        z-index: 100;
        background-color: white;
        border: 4px solid #EE8812;
        border-radius: 10px;
        padding: 10px;
    }
    .hidden-div-add{
        position: fixed;
        left: 700px;
        z-index: 100;
        background-color: white;
        border: 4px solid #EE8812;
        border-radius: 10px;
        padding: 10px;
    }
    .order-div{
        margin: 20px;
    }
</style>