
import memberAside from '../components/member/aside/aside.vue';
import creditCard from '../components/member/creditcard/creditcard.vue'
import information from "../components/member/information/information.vue";
import order from "../components/member/order/order.vue";
import password from '../components/member/changePassword/changePassword.vue'

const router = {
    path: "/member",
    component: memberAside,
    redirect: "/member/information",
    children: [
      {
        path: '/member/information',
        component: information,
      },
      {
        path: '/member/creditCard',
        component: creditCard,
      },
      {
        path: '/member/order',
        component: order,
      },
      {
        path: '/member/password',
        component: password,
      },
    ]
}
export default router