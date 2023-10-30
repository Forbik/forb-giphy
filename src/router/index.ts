// Composables
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: 'Home',
        }
      },
      {
        path: 'details/:id',
        name: 'Details',
        component: () => import('@/views/Details.vue')
      },
      {
        path: 'user/:username',
        name: 'User',
        component: () => import('@/views/User.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  const mainTitle = 'Forb-Giphy'

  if (typeof title === 'string') {
    document.title = mainTitle + ` - ` + title
  } else {
    document.title = mainTitle
  }
  next()
})

export default router
