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
      path: '/main',
      name: 'MainPage',
      component: () => import('@/views/main/main//MainView.vue'),
      children: [
        {
          path: 'test',
          name: 'TestPage',
          component: () => import('@/views/main/test/TestView.vue'),
        }
      ]
    }
  ]
})
