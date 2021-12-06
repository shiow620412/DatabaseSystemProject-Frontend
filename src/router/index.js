import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue'
import cart from '../components/ShopCart/ShopCart.vue';
import ProContentTop from '../components/productpage/proContentTop.vue';


const routes = [
  {
    path: '',
    component: index        
  },
  {
    path: '/product',
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