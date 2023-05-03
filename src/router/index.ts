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
    name: 'authLoginPath',
    component: () => import('@/views/auth/LoginView.vue')
  },
  {
    path: '/auth/forgot_password',
    name: 'authForgotPasswordPath',
    component: () => import('@/views/auth/PasswordForgotView.vue')
  },
  //Page Not Found
  { 
    path: '/:pathMatch(.*)',
    name: 'error404Path',
    component: () => import('@/views/pages/Error404View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
