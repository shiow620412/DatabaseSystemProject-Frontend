import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue';
import cart from '../components/ShopCart/ShopCart.vue';
import ProContentTop from '../components/productpage/proContentTop.vue';
import indexHeader from "../components/top.vue";

import adminHeader from '../view/management.vue';
import member from '../components/management/member/member.vue';


const routes = [
  {
    path: '',
    component: indexHeader,
    // alias: 'index',
    children: [{
      path: '',
      alias: '/index',
      component: index
    },{
      path: '/product',
      component: ProContentTop
    },
    {
      path: '/cart',
      component: cart
    }]
  }, {
    path: '/management',
    component: adminHeader,
    children: [{
      path: 'member',
      component: member
    }]
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router