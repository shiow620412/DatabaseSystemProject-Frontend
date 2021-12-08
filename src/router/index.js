import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue'
import product from '../components/productpage/proContentTop.vue'
import cart from '../components/ShopCart/ShopCart.vue'
import member from '../components/member/member/member.vue'
import information from '../components/member/information/information.vue'
import transactionRecord from '../components/member/transactionRecord/transactionRecord.vue'

const routes = [{
    path: '',
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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router