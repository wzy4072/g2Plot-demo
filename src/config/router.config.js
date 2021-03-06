// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const rootRouter = {
  key: '',
  name: 'tempIndex',
  path: '/',
  component: BasicLayout,
  redirect: '/temp1',
  meta: {
    title: ''
  },
  children: []
}

export const asyncRouterMap = []

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  rootRouter,
  {
    name: 'empty',
    path: '/empty',
    component: BlankLayout,
    meta: {},
    children: [
      {
        path: '/temp1',
        name: 'temp1',
        component: () => import(/* webpackChunkName: "t1" */ '@/views/user/Temp1')
      },
      {
        path: '/temp2',
        name: 'temp2',
        component: () => import(/* webpackChunkName: "t2" */ '@/views/user/Temp2')
      },
      {
        path: '/temp3',
        name: 'temp3',
        component: () => import(/* webpackChunkName: "t3" */ '@/views/user/chartGroup/index')
      },
      {
        path: '/temp4',
        name: 'temp4',
        component: () => import(/* webpackChunkName: "t4" */ '@/views/user/Temp4')
      },
      {
        path: '/demo5',
        name: 'demo5',
        component: () => import(/* webpackChunkName: "t4" */ '@/views/Demo5/index')
      },
      {
        path: '/demo6',
        name: 'demo6',
        component: () => import(/* webpackChunkName: "t4" */ '@/views/Demo6/index')
      },
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
