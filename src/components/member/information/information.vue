<template>
    <div class="information-div-content">
        <h2 style="margin: auto auto">我的個人檔案</h2><hr>
        <div class="information-div-inner">
            <el-form :label-position="labelPosition" label-width="100px">
                <el-form-item label="姓名">
                    <el-input v-model="InfoformLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="信箱">
                    <el-input v-model="InfoformLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="住址">
                    <el-input v-model="InfoformLabelAlign.address"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'information',
        components: {
            
        },
        data(){
            return{
                labelPosition: 'right',
                InfoformLabelAlign: {
                    name: '',
                    region: '',
                    type: '',
                    address: "",
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
    }
    .information-div-inner{
        padding: 20px;
    }
</style>