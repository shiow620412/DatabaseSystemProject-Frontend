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
              <el-form label-width="100px" class="check_pass_frame">
                <el-form-item label="名稱" prop="checkPass">
                  <el-input type="password" v-model="dynamicValidateForm.name" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
             <el-col :span="21">
              <el-form label-width="100px" class="email_frame">
                <el-form-item prop="email" label="信箱" >
                  <el-input v-model="dynamicValidateForm.email"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
              <el-form label-width="100px" class="account_frame">
                <el-form-item prop="account" label="帳號">
                  <el-input v-model="dynamicValidateForm.account"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
              <el-form label-width="100px" class="password_frame">
                <el-form-item label="密碼" prop="pass">
                  <el-input type="password" v-model="dynamicValidateForm.password" autocomplete="off"></el-input>
                </el-form-item>
              </el-form>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row class="checkin_frame">
            <el-col :span="4"></el-col>
            <el-col :span="17">
              <el-button class="checkin" type="primary" @click="submitForm(dynamicValidateForm.email, dynamicValidateForm.account, dynamicValidateForm.password, dynamicValidateForm.name)">註冊</el-button>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
        </el-main>
        <el-row class="jump_page">
          <el-col :span="7"></el-col>
          <el-col :span="6" class="text">
            <span>已註冊WSS會員？</span>
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
  import UserService from '../../../services/user.service'
  export default {
    name: 'top',
    data() {
      return {
        dynamicValidateForm: {
          email: '',
          account: '',
          password: '',
          name: ''
        },
      };
    },
    methods: {
      submitForm(email, account, password, name) {
        UserService.register(email, account, password, name).then(data => {
          console.log(data);
          alert("註冊成功");
          this.$router.push({path: '/identify/login'});
        }).catch((error) => {
          alert(error.response.data.message);
        })
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
    background-color: #FFF389;
  }

  .register_text {
    height: 100%;
    width: 100%;
    font-size: 20pt;
  }

  .email_frame {
    margin-top: 10px;
  }

  .account_frame {
    margin-top: 10px;
  }

  .password_frame {
    margin-top: 10px;
  }

  .check_pass_frame {
    margin-top: 30px;
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