import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AuthService from '@/services/AuthService'

async function routerGuarder(to:any, from:any, next:any) {
  const token = localStorage.getItem('access_token');
  if (token) {
    await AuthService.verifyToken(token).then(response => {
      next();
    }).catch(e => {
      localStorage.setItem('access_token', '')
      localStorage.setItem('refresh_token', '')
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
  {
    path: '/auth/reset_password/confirm/:uid/:token/',
    name: 'authResetPasswordConfirmPath',
    component: () => import('@/views/auth/ResetPasswordConfirmView.vue')
  },
  //Profile
  {
    path: '/profile',
    name: 'profilePath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/auth/ProfileView.vue')
  },
  //Users
  {
    path: '/users',
    name: 'usersIndexPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/users/UsersIndexView.vue')
  },
  {
    path: '/users/:id',
    name: 'usersShowPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/users/UsersShowView.vue')
  },
  {
    path: '/users/new',
    name: 'usersCreatePath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/users/UsersCreateView.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'usersEditPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/users/UsersEditView.vue')
  },
  //Competition
  {
    path: '/competitions',
    name: 'competitionsIndexPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/competitions/CompetitionsIndexView.vue')
  },
  {
    path: '/competitions/:id',
    name: 'competitionsShowPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/competitions/CompetitionsShowView.vue')
  },
  {
    path: '/competitions/new',
    name: 'competitionsCreatePath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/competitions/CompetitionsCreateView.vue')
  },
  {
    path: '/competitions/:id/edit',
    name: 'competitionsEditPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/competitions/CompetitionsEditView.vue')
  },
  //Teams
  {
    path: '/teams',
    name: 'teamsIndexPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/teams/TeamsIndexView.vue')
  },
  {
    path: '/teams/:id',
    name: 'teamsShowPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/teams/TeamsShowView.vue')
  },
  {
    path: '/teams/new',
    name: 'teamsCreatePath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/teams/TeamsCreateView.vue')
  },
  {
    path: '/teams/:id/edit',
    name: 'teamsEditPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/teams/TeamsEditView.vue')
  },
  //Leagues
  {
    path: '/leagues',
    name: 'leaguesIndexPath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/leagues/LeaguesIndexView.vue')
  },
  {
    path: '/leagues/new',
    name: 'leaguesCreatePath',
    beforeEnter: routerGuarder,
    component: () => import('@/views/leagues/LeaguesCreateView.vue')
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
