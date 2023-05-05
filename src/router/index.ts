import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthService from '@/services/AuthService'

async function routerGuarder(to:any, from:any, next:any) {
  const token = localStorage.getItem('access_token');
  if (token) {
    await AuthService.verifyToken(token).then(response => {
      next();
    }).catch(e => {
      localStorage.setItem('access_token', '-')
      next('/auth/login');
    });
  } else {
    next('/auth/login');
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    beforeEnter: routerGuarder,
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
