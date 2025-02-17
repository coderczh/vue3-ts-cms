import { createRouter, createWebHashHistory } from 'vue-router'

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('@/view/login/login.vue')
    },
    {
      path: '/main',
      component: () => import('@/view/main/main.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/view/404/404.vue')
    }
  ]
})

export default routes
