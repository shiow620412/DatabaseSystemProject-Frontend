import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import indexHeader from "../components/header/header.vue";

import memberRouter from "./member.router"
import managementRouter from "./management.router"
import identifyRouter from "./identify.router";
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
        path: '/cart',
        component: cart
      },
      memberRouter
    ]
  },
  managementRouter,
  identifyRouter
]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router