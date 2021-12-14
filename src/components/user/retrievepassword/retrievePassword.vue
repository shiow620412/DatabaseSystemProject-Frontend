<template>
    <el-row class="frame">
        <el-col :span="7"></el-col>
        <el-col :span="10" class="retrievePass_frame">
            <el-container>
                <el-header>
                    <div class="retrieve_text">
                        <h3>忘記密碼</h3>
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
                    <el-row class="checkin_frame">
                        <el-col :span="4"></el-col>
                        <el-col :span="17">
                            <el-button class="checkin" type="primary" @click="submitForm('ruleForm')">登入</el-button>
                        </el-col>
                        <el-col :span="3"></el-col>
                    </el-row>
                </el-main>
            </el-container>
        </el-col>
        <el-col :span="7"></el-col>
    </el-row>
</template>

<script>
  export default {
    name: '',
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

<style scoped>
    .frame {
        background-color: #EFFFE4;
        height: 600px;
        width: 100%;
    }

    .retrievePass_frame {
        position: relative;
        top: 100px;
        height: 350px;
        background-color: #FFF389;
    }

    .retrieve_text {
        height: 100%;
        width: 100%;
        font-size: 20pt;
    }

    .email_frame {
        margin-top: 50px;
    }

    .checkin_frame {
      margin-top: 10px;
    }

    .checkin {
        width: 100%;
        color: #2C5F14;
        background-color: #a4ff67;
    }
</style>