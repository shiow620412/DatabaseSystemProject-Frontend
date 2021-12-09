import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import register from '../components/register/register.vue';
import login from '../components/login/login.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import indexHeader from "../components/header/header.vue";
import memberAside from '../components/member/aside/aside.vue';
import adminHeader from '../view/management.vue';
import member from '../components/management/member/member.vue';
import creditCard from '../components/member/creditcard/creditcard.vue'
import information from "../components/member/information/information.vue";
import order from "../components/member/order/order.vue";

const routes = [
  {
    path: '',
    component: indexHeader,
    children: [{
      path: '',
      alias: '/index',
      component: index
    },{
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
          path: '/member/creditCard',
          component: creditCard,
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
    path: '/login',
    component: login
  },
  {
    path: '/register',
    component: register
  }]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router