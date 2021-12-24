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
            {{userInfo.name}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <el-icon><iphone /></el-icon>
                電話
            </template>
            {{userInfo.phone}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <el-icon><Message /></el-icon>
                信箱
            </template>
            {{userInfo.email}}
            </el-descriptions-item>
            <el-descriptions-item>
            <template #label>
                <el-icon><office-building /></el-icon>
                住址
            </template>
            {{userInfo.address}}
            </el-descriptions-item>
        </el-descriptions>
        <el-dialog v-model="isEditShow" title="修改個人資料" width="30%">
            <el-form :model="form">
                <el-form-item label="姓名">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="電話">
                    <el-input v-model="form.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="信箱">
                    <el-input v-model="form.email" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="住址">
                    <el-input v-model="form.address" autocomplete="off"></el-input>
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
import {
  User,
  Iphone,
  Message,
  OfficeBuilding,
} from '@element-plus/icons'    
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
                this.form.name = this.userInfo.name;
                this.form.phone = this.userInfo.phone;
                this.form.email = this.userInfo.email;
                this.form.address = this.userInfo.address;
            },
            windowsEditClose(){
                this.isEditShow = false;
                this.cleanEdit();
            },
            onEditSubmit(){
                this.isEditShow = false;
                this.userInfo.name = this.form.name;
                this.userInfo.phone = this.form.phone;
                this.userInfo.email = this.form.email;
                this.userInfo.address = this.form.address;
                this.cleanEdit();
            },
            cleanEdit(){
                this.form.name = '';
                this.form.phone = '';
                this.form.email = '';
                this.form.address = '';
            }
        },
        data(){
            return{
                isEditShow: false,
                labelPosition: 'right',
                userInfo:{
                    name: 'kooriookami',
                    phone: '18100000000',
                    email: '123@gmail.com',
                    address: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province',
                },
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