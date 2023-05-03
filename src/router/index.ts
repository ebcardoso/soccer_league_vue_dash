import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/HomeView.vue')
  },
  //Auth
  {
    path: '/auth/login',
    name: 'authLogin',
    component: () => import('@/views/auth/LoginView.vue')
  },
  //Page Not Found
  { 
    path: '/:pathMatch(.*)',
    name: 'error404View',
    component: () => import('@/views/pages/Error404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
