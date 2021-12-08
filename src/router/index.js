import {
  createRouter,
  createWebHistory
} from 'vue-router'
import index from '../view/index.vue'
import product from '../components/productpage/proContentTop.vue'
import cart from '../components/ShopCart/ShopCart.vue'
import member from '../components/member/member/member.vue'
import information from '../components/member/information/information.vue'
import order from '../components/member/order/order.vue'
import indexHeader from '../components/header/header.vue'
const routes = [{
    path: '',
    component: indexHeader,
    children:[
      {
        path: "",
        component: index
      },
      {
        path: '/product',
        component: product,
      },
      {
        path: '/cart',
        component: cart
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
            path: '/member/order',
            component: order,
          }
        ]
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router