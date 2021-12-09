import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import register from '../components/register/register.vue'
import login from '../components/login/login.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import indexHeader from "../components/header/header.vue";
import memberAside from '../components/member/member/member.vue'
import information from "../components/member/information/information.vue"
import order from "../components/member/order/order.vue"
import managementPage from '../view/management.vue';
import mainManagement from '../components/management/main/main.vue';
import memberManagement from '../components/management/member/member.vue';
import orderManagement from '../components/management/order/order.vue';
import productManagement from '../components/management/product/product.vue'

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
          path: '/member/order',
          component: order,
        }
      ]
    }]
  }, {
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