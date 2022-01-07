import managementPage from '../view/management.vue';
import mainManagement from '../components/management/main/main.vue';
import memberManagement from '../components/management/member/member.vue';
import orderManagement from '../components/management/order/order.vue';
import productManagement from '../components/management/product/product.vue'
const router = {
    path: '/management',
    component: managementPage,
    redirect: "/management/main",
    children: [{
      path: 'main',
      component: mainManagement
    }, {
      path: 'member',
      component: memberManagement
    }, {
      path: 'order',
      component: orderManagement
    }, {
      path: 'product',
      alias: '/product',
      component: productManagement
    }, {
      path: 'product/:id',
      component: productManagement
    }]
  }

export default router