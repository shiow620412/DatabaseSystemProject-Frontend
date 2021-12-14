<template>
    <div class="password-div-content">
        <p style="margin: auto auto">修改密碼</p><hr>
        <el-form :label-position="labelPosition" label-width="100px">
            <el-form-item label="原來密碼">
                <el-input v-model="PasswordformLabelAlign.originPassword"></el-input>
            </el-form-item>
            <el-form-item label="新密碼">
                <el-input v-model="PasswordformLabelAlign.newPassword"></el-input>
            </el-form-item>
            <el-form-item label="再次輸入">
                <el-input v-model="PasswordformLabelAlign.againPassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'password',
        components: {
            
        },
        methods: {
            
        },
        data(){
            return{
                labelPosition: 'right',
                PasswordformLabelAlign: {
                    originPassword: '',
                    newPassword: '',
                    againPassword: '',
                },
                form: {
                    name: '',
                },
            }
        }
    }
</script>

<style>
    .password-div-content{
        width: 90%;
        background-color: white;
        border-radius: 10px;
        margin: auto auto;
        padding: 20px;
    }
</style>