<template>
  <el-row class="TOP">
    <el-col :span="5"></el-col>
    <el-col :span="14" class="RRRR">
      <el-container>
        <el-header class="logo_frame">
          <img class="login_logo" src="../../assets/logo.png" alt="">
        </el-header>
        <el-main>
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item
              prop="email"
              label="信箱"
              :rules="[
                { required: true, message: '請輸入信箱地址', trigger: 'blur' },
                { type: 'email', message: '請輸入正確的信箱地址', trigger: ['blur', 'change'] }
              ]"
            >
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
          </el-form>
          
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="密碼" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
          
            <el-form-item label="確認密碼" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登入</el-button>
            </el-form-item>
          </el-form>
        </el-main>
      </el-container>
    </el-col>
    <el-col :span="5" class="grid-content bg-purple"></el-col>
  </el-row>
</template>

<script>
export default {
    name: 'top',
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('請輸入密碼'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('請再次輸入密碼'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('兩次輸入不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.TOP{
  background-color: #42b983;
  margin-top: 40px;
}
.logo_frame{
  height: auto;
}


.BBBB{
  background-color:#ffffff;
}
.RRRR{
  background-color:#9ddaec94;
}
.login_logo{
  height: 100%;
  width: 10%;
  margin-top: 8%;
}
</style>