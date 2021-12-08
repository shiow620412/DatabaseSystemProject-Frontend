import {
  createRouter,
  createWebHistory
} from 'vue-router'
//import index from '../view/index.vue';
import login from '../components/memberAccount/login.vue';
import Product from '../components/product/product.vue';
import cart from '../components/ShopCart/ShopCart.vue';

const routes = [
  /*{
    path: '/index',
    component: index        
  },*/
  {
    path: '/login',
    component: login
  },
  {
    path: '/product',
    component: Product
  },
  {
    path: '/cart',
    component: cart
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router