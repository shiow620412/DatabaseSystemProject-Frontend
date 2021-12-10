import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import identifyHeader from '../view/identifyHeader.vue'
import register from '../components/user/register/register.vue'
import login from '../components/user/login/login.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import indexHeader from "../components/header/header.vue";
import memberAside from '../components/member/member/member.vue'
import adminHeader from '../view/management.vue';
import member from '../components/management/member/member.vue';
import information from "../components/member/information/information.vue"
import order from "../components/member/order/order.vue"
import retrievePassword from '../components/user/retrievepassword/retrievePassword.vue'
import resetPassword  from '../components/user/resetpassword/resetPassword.vue'

const routes = [
  {
    path: '',
    component: indexHeader,
    children: [{
      path: '',
      alias: '/index',
      component: index
    },
    {
      path: '/product',
      component: Product
    },
    {
      path: '/cart',
      component: cart
    },{
      path: "/member",
      component: memberAside,
      redirect: "/member/information",
      children: [
        {
          path: '/member/information',
          component: information,
        },
        {
          path: '/member/order',
          component: order,
        }
      ]
    }]
  }, {
    path: '/management',
    component: adminHeader,
    children: [{
      path: 'member',
      component: member
    }]
  },
  {
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
  },
  ]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router