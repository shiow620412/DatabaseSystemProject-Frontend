import { createRouter, createWebHistory } from 'vue-router'
import index from '../view/index.vue'


const routes = [
  {
    path: '/index',
    component:index        
  },
  {
    
  }
  
]

const router =  createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
