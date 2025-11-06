import type { RouteRecordRaw } from 'vue-router'
import { homeRoute } from './homeRoute'

export const defaultRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/layouts/AppLayout.vue'),
    redirect: '/home',
    children: [homeRoute],
  },
  {
    path: '/:pathMathch(.*)*',
    name: '404',
    component: () => import('@/views/NotFound/NotFound.vue'),
  },
]
