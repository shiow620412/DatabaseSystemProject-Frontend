import identifyHeader from "../view/identifyHeader.vue"
import login from "../components/user/login/login.vue"
import register from "../components/user/register/register.vue";
import retrievePassword from "../components/user/retrievepassword/retrievePassword.vue"
import resetPassword from "../components/user/resetpassword/resetPassword.vue"

const router = {
    path: '/identify',
    component: identifyHeader,
    redirect: '/identify/login',
    children: [
      {
        path: '/identify/login',
        component: login
      },
      {
        path: '/identify/register',
        component: register
      },
      {
        path: '/identify/retrievePassword',
        component: retrievePassword
      },
      {
        path: '/identify/resetPassword',
        component: resetPassword
      }
    ]
}

export default router