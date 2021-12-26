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
                <el-button type="primary" @click="OnSubmit(PasswordformLabelAlign.originPassword, PasswordformLabelAlign.newPassword, PasswordformLabelAlign.againPassword)">修改</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import UserService from '../../../services/user.service'
    export default {
        name: 'password',
        components: {
            
        },
        data(){
            return{
                labelPosition: 'right',
                PasswordformLabelAlign: {
                    originPassword: '',
                    newPassword: '',
                    againPassword: '',
                },
            }
        },
        methods: {
            OnSubmit(originPassword, newPassword, againPassword){
                if(newPassword===againPassword){
                    UserService.ChangePassword(originPassword, newPassword).then(data => {
                        alert(data.message);
                        this.clearForm();
                    }).catch((error) => {
                        alert(error.response.data.message);
                    })
                }else{
                    alert("驗證密碼請保持跟新密碼一致");
                }
            },
            clearForm(){
                this.PasswordformLabelAlign.originPassword = '';
                this.PasswordformLabelAlign.newPassword = '';
                this.PasswordformLabelAlign.againPassword = '';
            }
        },
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