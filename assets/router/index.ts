import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/workspace',
      name: 'workspace',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../HelloWorld.vue')
    },
  ]
})

export default router
