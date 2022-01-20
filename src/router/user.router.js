import user from "../view/user.vue"
import login from "../components/user/login/login.vue"
import register from "../components/user/register/register.vue";
import retrievePassword from "../components/user/retrievepassword/retrievePassword.vue"
const path = '/user';
const router = {
    path: path,
    component: user,
    redirect: path+'/login',
    children: [
      {
        path: path+'/login',
        component: login
      },
      {
        path: path+'/register',
        component: register
      },
      {
        path: path+'/retrievePassword',
        component: retrievePassword
      }
    ]
}

export default router