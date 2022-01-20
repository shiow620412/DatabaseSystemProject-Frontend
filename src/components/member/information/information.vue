<template>
    <div class="information-div-content">
        <p style="margin: auto auto">我的個人檔案</p><hr>
        <el-descriptions class="margin-top" :column="1" size="medium" border>
            <template #extra>
            <el-button type="primary" size="medium" @click="clickEdit()">修改</el-button>
            </template>
            <el-descriptions-item>
            <template #label>
                <el-icon><user /></el-icon>
                姓名
            </template>
            {{userInfo.Name}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <el-icon><iphone /></el-icon>
                電話
            </template>
            {{userInfo.Phone}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <el-icon><Message /></el-icon>
                信箱
            </template>
            {{userInfo.Email}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <el-icon><office-building /></el-icon>
                住址
            </template>
            {{userInfo.Address}}
            </el-descriptions-item>
        </el-descriptions>
        <el-dialog v-model="isEditShow" title="修改個人資料" width="30%">
            <el-form :model="form">
                <el-form-item label="姓名">
                    <el-input v-model="form.Name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="電話">
                    <el-input v-model="form.Phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="信箱">
                    <el-input v-model="form.Email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="住址">
                    <el-input v-model="form.Address" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="windowsEditClose()">取消</el-button>
                    <el-button type="primary" @click="onEditSubmit(this.form.Email, this.form.Name, this.form.Address, this.form.Phone)">完成</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import {
  User,
  Iphone,
  Message,
  OfficeBuilding,
} from '@element-plus/icons'    
import UserService from '../../../services/user.service'
    export default {
        name: 'information',
        components: {
            User,
            Iphone,
            Message,
            OfficeBuilding,
        },
        methods: {
            clickEdit(){
                this.isEditShow = true;
                this.form.Name = this.userInfo.Name;
                this.form.Phone = this.userInfo.Phone;
                this.form.Email = this.userInfo.Email;
                this.form.Address = this.userInfo.Address;
            },
            windowsEditClose(){
                this.isEditShow = false;
                this.cleanEdit();
            },
            onEditSubmit(email, name, address, phone){
                this.isEditShow = false;
                this.userInfo.Name = this.form.Name;
                this.userInfo.Phone = this.form.Phone;
                this.userInfo.Email = this.form.Email;
                this.userInfo.Address = this.form.Address;
                UserService.EditInformation(email, name, address, phone);
                this.cleanEdit();
            },
            cleanEdit(){
                this.form.Name = '';
                this.form.Phone = '';
                this.form.Email = '';
                this.form.Address = '';
            }
        },
        mounted() {
            UserService.getInformation().then(data => {
                this.userInfo = data;
            })
        },
        data(){
            return{
                isEditShow: false,
                labelPosition: 'right',
                userInfo:{},
                form: {
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
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
        padding: 30px;
    }
</style>