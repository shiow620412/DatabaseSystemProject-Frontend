import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue'
<<<<<<< HEAD
import product from '../components/test.vue'
import cart from '../components/ShopCart/ShopCart.vue'
import member from '../components/member/member/member.vue'
import information from '../components/member/information/information.vue'
import transactionRecord from '../components/member/transactionRecord/transactionRecord.vue'
=======
import cart from '../components/ShopCart/ShopCart.vue';
import ProContentTop from '../components/productpage/proContentTop.vue';
import indexHeader from "../components/top.vue"
>>>>>>> origin/main

const routes = [{
    path: '',
<<<<<<< HEAD
    component: index,
  },
  {
    path: '/product',
    component: product,
  },
  {
    path: "/member",
    component: member,
    redirect: "/member/information",
    children: [
      {
        path: '/member/information',
        component: information,
      },
      {
        path: '/member/transactionRecord',
        component: transactionRecord,
      }
    ]
  },
  {
    path: '/cart',
    component: cart
  },
=======
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
  }
  

>>>>>>> origin/main
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router