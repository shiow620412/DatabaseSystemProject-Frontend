<template>
    <div class="information-div-content">
        <el-row>
            <el-col :span="12" style="margin-top: 20px;"><div>我的信用卡</div></el-col>
            <el-col :span="12" style="margin-top: 20px;"><div><el-button @click="addCard()"> + 新增信用卡</el-button></div></el-col>
        </el-row>
        <hr>
        <div class="order-div">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="CreditCardNumber" label="卡號" width="180" align="center"/>
                <el-table-column prop="ExpireYear" label="年" width="180" align="center"/>
                <el-table-column prop="ExpireMonth" label="月" width="180" align="center"/>
                <el-table-column align="right">
                <template #default="scope">
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index)">Delete</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <el-dialog v-model="isAddShow" title="新增信用卡" width="22%">
            <el-form :model="form">
                <el-form-item label="卡號">
                    <el-input v-model="form.CreditCardNumber" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="安全碼">
                    <el-input v-model="form.SecurityCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="年">
                    <el-input v-model="form.ExpireYear" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="月">
                    <el-input v-model="form.ExpireMonth" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="addClose()">取消</el-button>
                    <el-button type="primary" @click="onAddSubmit()">確認</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    import UserService from '../../../services/user.service'
    export default {
        name: 'creditCard',
        components: {
            
        },
        data(){
            return{
                isAddShow: false,
                currentClick: 0,
                labelPosition: 'right',
                form: {
                    CreditCardNumber: "",
                    SecurityCode: "",
                    ExpireYear: "",
                    ExpireMonth: "",
                },
                tableData: [],
            }
        },
        mounted() {
            UserService.getCreditCard().then(data => {
                this.tableData = data;
            })
        },
        methods: {
            addCard(){
                this.isAddShow = true;
                this.clearForm();
            },
            onAddSubmit(){
                this.tableData.push({CreditCardNumber: this.form.CreditCardNumber,ExpireYear: this.form.ExpireYear, ExpireMonth: this.form.ExpireMonth});
                UserService.AddCreditCard(this.form.CreditCardNumber, this.form.SecurityCode, parseInt(this.form.ExpireYear), parseInt(this.form.ExpireMonth));
                this.isAddShow = false;
                this.clearForm();
            },
            addClose(){
                this.isAddShow = false;
                this.clearForm();
            },
            handleDelete(index) {
                if(confirm('確認刪除?')){
                    UserService.DeleteCreditCard(this.tableData[index].CreditCardNumber);
                    this.tableData.splice(index, 1);
                }
            },
            clearForm(){
                this.form.CreditCardNumber = "";
                this.form.SecurityCode = "";
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