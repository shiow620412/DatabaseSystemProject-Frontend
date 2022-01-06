<template>

            <el-container class="retrievePass_frame">
                <el-header>
                    <div class="retrieve_text">
                        <h3>忘記密碼</h3>
                    </div>
                </el-header>
                <el-main>
                    <el-form label-width="100px" class="email_frame" :model="findPasswordForm" @submit.prevent="submitForm(findPasswordForm.email)">
                      <el-row>
                          <el-col :span="21">
                          
                                  <el-form-item prop="email" label="信箱">
                                      <el-input v-model="findPasswordForm.email"></el-input>
                                  </el-form-item>
                            
                          </el-col>
                          <el-col :span="3"></el-col>
                      </el-row>
                      <el-row class="checkin_frame">
                          <el-col :span="4"></el-col>
                          <el-col :span="17">
                            <el-form-item>

                              <el-button class="checkin" type="primary" @click="submitForm(findPasswordForm.email)">送出</el-button>
                            </el-form-item>
                          </el-col>
                          <el-col :span="3"></el-col>
                      </el-row>
                    </el-form>
                </el-main>
            </el-container>

</template>

<script>
  import UserService from '../../../services/user.service'
  export default {
    name: '',
    data() {
      return {
        findPasswordForm: {
          email: '',
        },
      };
    },
    methods: {
      submitForm(email) {
        UserService.findPassword(email).then(data => {
          alert(data.Password);
        }).catch((error) => {
          console.log(error.response.data.message);
        })
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
        border-radius: 20px;
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