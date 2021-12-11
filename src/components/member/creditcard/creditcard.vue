<template>
    <div class="information-div-content">
        <el-row>
            <el-col :span="12" style="margin-top: 20px;"><div>我的信用卡</div></el-col>
            <el-col :span="12" style="margin-top: 20px;"><div><el-button @click="addCard()"> + 新增信用卡</el-button></div></el-col>
        </el-row>
        <hr>
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
        <el-dialog v-model="isAddShow" title="新增信用卡" width="30%">
            <el-form :model="form">
                <el-form-item label="卡號">
                    <el-input v-model="form.number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="安全碼">
                    <el-input v-model="form.safeCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年">
                    <el-input v-model="form.year" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="月">
                    <el-input v-model="form.month" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addClose()">Cancel</el-button>
                    <el-button type="primary" @click="onAddSubmit()">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
        <el-dialog v-model="isEditShow" title="修改信用卡" width="30%">
            <el-form :model="form">
                <el-form-item label="卡號">
                    <el-input v-model="form.number" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="安全碼">
                    <el-input v-model="form.safeCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年">
                    <el-input v-model="form.year" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="月">
                    <el-input v-model="form.month" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="windowsEditClose()">取消</el-button>
                    <el-button type="primary" @click="onEditSubmit()">完成</el-button>
                </span>
            </template>
        </el-dialog>
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
                form: {
                    number: "",
                    safeCode: "",
                    year: "",
                    month: "",
                },
                tableData: [
                    {
                        number: '20160503',
                        safeCode: 123,
                        deadline: '2013/02',
                    },
                    {
                        number: '20160502',
                        safeCode: 456,
                        deadline: '2013/02',
                    },
                    {
                        number: '20160504',
                        safeCode: 789,
                        deadline: '2013/02',
                    },
                    {
                        number: '20160501',
                        safeCode: 461,
                        deadline: '2013/02',
                    },
                ],
            }
        },
        methods: {
            addCard(){
                this.isAddShow = true;
                this.clearForm();
            },
            onAddSubmit(){
                this.tableData.push({number: this.form.number,deadline: this.form.year+'/'+this.form.month})
                this.isAddShow = false;
                this.clearForm();
            },
            addClose(){
                this.isAddShow = false;
                this.clearForm();
            },
            handleEdit(index) {
                this.isEditShow = true;
                this.currentClick = index;
                this.form.number = this.tableData[this.currentClick].number;
                this.form.safeCode = this.tableData[this.currentClick].safeCode;
                this.form.year = this.tableData[this.currentClick].number;
                this.form.month = this.tableData[this.currentClick].number;
            },
            handleDelete(index) {
                if(confirm('確認刪除?')){
                    this.tableData.splice(index, 1);
                }
            },
            onEditSubmit(){
                this.tableData[this.currentClick].number = this.form.number;
                this.tableData[this.currentClick].deadline = this.form.year.toString()+'/'+this.form.month.toString();
                this.clearForm();
                this.isEditShow = false;
            },
            windowsEditClose(){
                this.isEditShow = false;
                this.clearForm();
            },
            clearForm(){
                this.form.number = "";
                this.form.safeCode = "";
                this.form.year = "";
                this.form.month = "";
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