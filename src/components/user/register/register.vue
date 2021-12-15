<template>
  <el-row class="frame">
    <el-col :span="7"></el-col>
    <el-col :span="10" class="login_frame">
      <el-container>
        <el-header>
          <div class="register_text">
            <h3>註冊會員</h3>
          </div>
        </el-header>
        <el-main>
          <el-row>
            <el-col :span="21">
              <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="email_frame">
                <el-form-item prop="email" label="信箱" :rules="[
                    { required: true, message: '請輸入信箱', trigger: 'blur' },
                    { type: 'email', message: '請輸入正確的信箱', trigger: ['blur', 'change'] }
                  ]">
                  <el-input v-model="dynamicValidateForm.email"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
              <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="account_frame">
                <el-form-item prop="account" label="帳號" :rules="[
                    { required: true, message: '請輸入帳號', trigger: 'blur' },
                    { type: 'account', message: '請輸入正確的帳號', trigger: ['blur', 'change'] }
                  ]">
                  <el-input v-model="dynamicValidateForm.account"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="password_frame">
                <el-form-item label="密碼" prop="pass">
                  <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
              <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="check_pass_frame">
                <el-form-item label="確認密碼" prop="checkPass">
                  <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row class="checkin_frame">
            <el-col :span="4"></el-col>
            <el-col :span="17">
              <el-button class="checkin" type="primary" @click="submitForm('ruleForm')">登入</el-button>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
        </el-main>
        <el-row class="jump_page">
          <el-col :span="7"></el-col>
          <el-col :span="6" class="text">
            <span>已註冊SHOP會員？</span>
          </el-col>
          <el-col :span="4">
            <div class="subject_link">
              <router-link to="/identify/login">登入</router-link>
            </div>
          </el-col>
          <el-col :span="7"></el-col>
        </el-row>
      </el-container>
    </el-col>
    <el-col :span="7"></el-col>
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
          pass: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPass: [{
            validator: validatePass2,
            trigger: 'blur'
          }],
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
  .frame {
    background-color: #EFFFE4;
    height: 600px;
    width: 100%;
  }

  .login_frame {
    position: relative;
    top: 30px;
    height: 520px;
    border-radius: 20px;
    background-color: #FFF389;
  }

  .register_text {
    height: 100%;
    width: 100%;
    font-size: 20pt;
  }

  .email_frame {
    margin-top: 30px;
  }

  .account_frame {
    margin-top: 10px;
  }

  .password_frame {
    margin-top: 10px;
  }

  .check_pass_frame {
    margin-top: 10px;
  }

  .checkin_frame {
    margin-top: 10px;
  }

  .checkin {
    width: 100%;
    color: #2C5F14;
    background-color: #a4ff67;
  }

  .text {
    font-weight: bold;
    color: #9ca1a1;
  }

  .subject_link {
    font-weight: bold;
    color: #2C5F14;
  }

  .jump_page {
    top: 20px;
  }
</style>