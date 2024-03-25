import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/HomePage.vue')
    },
    {
      path: '/persona/:id',
      name: 'persona',
      component: () => import('@/views/persona/PersonaPage.vue')
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('@/views/skill/SkillPage.vue')
    }
  ]
})

export default router
