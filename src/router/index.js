import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue'
import test from '../components/test.vue'
import cart from '../components/ShopCart/ShopCart.vue';

const routes = [
  {
    path: '/index',
    component: index        
  },
  {
    path: '/test',
    component: test
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