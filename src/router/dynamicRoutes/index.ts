import type { RouteRecordRaw } from 'vue-router'
import { systemRoutes } from './systemRoutes'

export const dynamicRoutes: RouteRecordRaw[] = [...systemRoutes]
