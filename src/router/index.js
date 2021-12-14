import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import indexHeader from "../components/header/header.vue";
import memberAside from '../components/member/aside/aside.vue';
import creditCard from '../components/member/creditcard/creditcard.vue'
import information from "../components/member/information/information.vue";
import order from "../components/member/order/order.vue";
import password from '../components/member/changePassword/changePassword.vue'

import managementPage from '../view/management.vue';
import mainManagement from '../components/management/main/main.vue';
import memberManagement from '../components/management/member/member.vue';
import orderManagement from '../components/management/order/order.vue';
import productManagement from '../components/management/product/product.vue'

import identifyRouter from "./identify.router";
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
    },
    {
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
        },
        {
          path: '/member/password',
          component: password,
        },
      ]
    }]
  }, 
  {
    path: '/management',
    component: managementPage,
    children: [{
      path: 'main',
      component: mainManagement
    }, {
      path: 'member',
      component: memberManagement
    }, {
      path: 'order',
      component: orderManagement
    }, {
      path: 'product',
      component: productManagement
    }]
  },
  identifyRouter
]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router