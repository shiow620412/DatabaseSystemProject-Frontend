import { createRouter, createWebHistory } from 'vue-router'
import index from '../view/index.vue'
import test from '../components/test.vue'

const routes = [
  {
    path: '/index',
    component: index        
  },
  {
    path: '/test',
    component: test
  }
  
]

const router =  createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
