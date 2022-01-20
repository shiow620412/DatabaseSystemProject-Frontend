<template>

      <el-container class="login_frame">
        <el-header>
          <div class="login_text">
            <h3>登入會員</h3>
          </div>
        </el-header>
        <el-main>
          <el-form :model="loginForm" label-width="100px" class="account_frame" @submit.prevent="login(loginForm.account, loginForm.password)" 
          @keyup.enter="login(loginForm.account, loginForm.password)">
          <el-row>
            <el-col :span="21">
              
                <el-form-item label="帳號" prop="account">
                  <el-input v-model="loginForm.account"></el-input>
                </el-form-item>
            
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row>
            <el-col :span="21">
          
                <el-form-item label="密碼" prop="pass">
                  <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
                </el-form-item>
  
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
          <el-row class="checkin_frame">
            <el-col :span="4"></el-col>
            <el-col :span="17">
              <el-button class="checkin" type="primary" @click="login(loginForm.account, loginForm.password)">登入</el-button>
            </el-col>
            <el-col :span="3"></el-col>
          </el-row>
           <el-row>
          <el-col :span="14"></el-col>
          <el-col :span="10">
            <div class="Forgot_password">
              <router-link to="/user/retrievePassword">忘記密碼</router-link>
            </div>
          </el-col>
        </el-row>
        <el-row class="jump_page">
          <el-col :span="7"></el-col>
          <el-col :span="6" class="text">
            <span>註冊為WSS會員</span>
          </el-col>
          <el-col :span="4">
            <div class="subject_link">
              <router-link to="/user/register">註冊</router-link>
            </div>
          </el-col>
          <el-col :span="7"></el-col>
        </el-row>
          </el-form>
        </el-main>
       
      </el-container>

</template>

<script>
import loginController from './login.controller'
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          account: '',
          password: ''
        }
      };
    },
    methods: loginController,
    mounted(){
      
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .frame {
    background-color: #EFFFE4;
    height: calc(100vh - 100px);
    width: 100%;
  }

  .login_frame {
    position: relative;
    border-radius: 20px;
    top: 70px;
    height: 450px;
    background-color: #FFF389;
  }

  .login_text {
    height: 100%;
    width: 100%;
    font-size: 20pt;
  }

  .account_frame {
    position: relative;
    margin-top: 30px;
  }

  .password_frame {
    position: relative;
    margin-top: 20px;
  }

  .checkin_frame {
    position: relative;
    margin-top: 20px;
  }

  .checkin {
    width: 100%;
    color: #2C5F14;
    background-color: #a4ff67;
  }

  .Forgot_password {
    font-weight: bold;
    color: #27e3fc;
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
    top: 30px;
  }
</style>