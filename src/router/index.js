import {
  createRouter,
  createWebHistory
} from 'vue-router'
//import index from '../view/index.vue'
import ProContentTop from '../components/productpage/proContentTop.vue';
import cart from '../components/ShopCart/ShopCart.vue';

const routes = [
  /*{
    path: '/index',
    component: index        
  },*/
  {
    path: '',
    component: ProContentTop
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