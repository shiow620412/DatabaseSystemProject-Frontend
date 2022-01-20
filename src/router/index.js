import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import indexHeader from "../components/header/header.vue";
import Payment from "../components/payment/payment.vue";

import memberRouter from "./member.router"
import managementRouter from "./management.router"
import userRouter from "./user.router";
const routes = [
  {
    path: '',
    component: indexHeader,
    children: [
      {
      path: '',
      alias: '/index',
      component: index
      },
      {
        path: '/product',
        component: Product
      },
      {
        path: '/payment',
        component: Payment
      },
      {
        path: '/cart',
        component: cart
      },
      {
        path:'/product/:id',
        component: Product
      },
      {
        path:'/category/:category',
        component: index
      },
      memberRouter
    ]
  },
 
  managementRouter,
  userRouter
]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router