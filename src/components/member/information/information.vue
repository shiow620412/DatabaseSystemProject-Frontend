<template>
    <div class="information-div-content">
        <h2 style="margin: auto auto">我的個人檔案</h2><hr>
        <el-form :label-position="labelPosition" label-width="100px">
            <el-form-item label="姓名">
                <el-input v-model="InfoformLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="信箱">
                <el-input v-model="InfoformLabelAlign.email"></el-input>
            </el-form-item>
            <el-form-item label="住址">
                <el-input v-model="InfoformLabelAlign.address"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
            </el-form-item>
        </el-form>
        <button @click="dialogVisible = true">test</button>
        <el-dialog v-model="dialogVisible" title="Tips" width="30%">
            <el-form :model="form">
                <el-form-item label="Promotion name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="close()">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false"
                    >Confirm</el-button
                    >
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'information',
        components: {
            
        },
        methods: {
            open(){

            },
            close(){
                this.dialogVisible = false;
                this.form.name = '';
            },
        },
        data(){
            return{
                dialogVisible: false,
                labelPosition: 'right',
                InfoformLabelAlign: {
                    name: '',
                    email: '',
                    type: '',
                    address: "",
                },
                form: {
                    name: '',
                },
            }
        }
    }
</script>

<style>
    .information-div-content{
        width: 90%;
        background-color: white;
        border-radius: 10px;
        margin: auto auto;
        padding: 20px;
    }
</style>