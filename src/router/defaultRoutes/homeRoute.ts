import type { RouteRecordRaw } from 'vue-router'

export const homeRoute: RouteRecordRaw = {
  path: '/home',
  name: 'home',
  component: () => import('@/views/Home/Home.vue'),
}
