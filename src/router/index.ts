import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

function routerGuarder(to:any, from:any, next:any) {
  if (localStorage.getItem('access_token')) {
    next();
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
