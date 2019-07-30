import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RootPage',
      component: () => import('@/components/RootView.vue')
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/login/LoginView.vue')
    },
    {
      path: '/info',
      name: 'InfoPage',
      component: () => import('@/views/main/info/InfoView.vue')
    },
    {
      path: '/main',
      name: 'MainPage',
      component: () => import('@/views/main/main//MainView.vue'),
      children: [
        {
          path: 'university',
          name: 'UniversityPage',
          component: () => import('@/views/main/university/UniversityView.vue')
        },
        {
          path: 'graduate',
          name: 'GraduatePage',
          component: () => import('@/views/main/gradute/GraduateView.vue')
        },
        {
          path: 'graduared',
          name: 'GraduateCarrerPage',
          component: () => import('@/views/main/graduated/GraduateCarrerView.vue')
        }
      ]
    }
  ]
})
