import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // for customizing vuetify components
    {
      path: '/components',
      name: 'components',
      component: () => import('./views/Components.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/views/Main.vue'),
      redirect: { name: 'home' },
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/Home.vue')
        },
        {
          path: 'promotions',
          name: 'promotions',
          component: () => import('@/views/promotions/Promotions.vue')
        },
        {
          path: 'letspay',
          name: 'letspay',
          component: () => import('@/views//letspay/Letspay.vue')
        },
        {
          path: 'financial',
          name: 'financial',
          component: () => import('@/views/financial/Financial.vue')
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/member/Member.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login'
    }
  ]
})
