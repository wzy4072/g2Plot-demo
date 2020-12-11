// eslint-disable-next-line
import * as loginService from '@/api/login'
import { BasicLayout, BlankLayout, PageView, RouteView } from '@/layouts'
import { leftMenuTreeBean } from '@/api/businessBasic'

import tempAsyncRouterMap from './tempAsyncRouterMap'
import qyd from './qyd'

function initMenus(tree) {
  if (!tree || tree.length === 0) return null
  return tree.map((item) => {
    const { url: path, menuId, mainId, vueName: name, redirect, hidden, component, menuName: title, icon } = item
    // const componentVm = (() => import('@/views' + component)) || RouteView
    const componentVm = component ? (resolve) => require([`@/views${component}`], resolve) : RouteView
    return {
      name: name || menuId,
      path: path || name || menuId,
      component: componentVm,
      hidden: hidden === '0' ? false : true,
      meta: {
        title,
        icon: icon || null,
        menuId: mainId !== '0' ? mainId : menuId
      },
      children: initMenus(item.list),
    }
  })
}

// 前端未找到页面路由（固定不用改）
const notFoundRouter = {
  path: '*', redirect: '/404', hidden: true
}

// 根级菜单
const rootRouter = {
  key: '',
  name: 'index',
  path: '/',
  component: BasicLayout,
  redirect: '/dashboard',
  meta: {
    title: '首页'
  },
  children: [
    {
      name: 'dashboard',
      path: '/dashboard',
      component: () => import('@/views/dashboard/Dashboard'),
      meta: { title: '主页大屏', icon: 'home', menuId: null }
    },
    {
      name: 'demos',
      path: '/demos',
      component: RouteView,
      meta: { title: '营收稽核' },
      children: [
        {
          name: 'demo1',
          path: 'demo1',
          component: () => import('@/views/demos/demo1'),
          meta: { title: '支票/网银汇款一级稽核', }
        },
        {
          name: 'demo2',
          path: 'demo2',
          component: () => import('@/views/demos/demo2'),
          meta: { title: '社会渠道资金稽核-一级稽核', }
        },
        {
          name: 'demo3',
          path: 'demo3',
          component: () => import('@/views/demos/demo3'),
          meta: { title: '社会渠道二级稽核', }
        },
        {
          name: 'demo4',
          path: 'demo4',
          component: () => import('@/views/demos/demo4'),
          meta: { title: '社会渠道二级稽核月结', }
        },
        {
          name: 'demo5',
          path: 'demo5',
          component: () => import('@/views/demos/demo5'),
          meta: { title: '电子渠道一级稽核', }
        },
        {
          name: 'demo6',
          path: 'demo6',
          component: () => import('@/views/demos/demo6'),
          meta: { title: '电子渠道二级稽核', }
        },
        {
          name: 'demo7',
          path: 'demo7',
          component: () => import('@/views/demos/demo7'),
          meta: { title: '电子渠道二级稽核月结', }
        },
        {
          name: 'demo8',
          path: 'demo8',
          component: () => import('@/views/demos/demo8'),
          meta: { title: '政企渠道一级稽核', }
        },
        {
          name: 'demo9',
          path: 'demo9',
          component: () => import('@/views/demos/demo9'),
          meta: { title: '政企渠道二级稽核', }
        },
        {
          name: 'demo10',
          path: 'demo10',
          component: () => import('@/views/demos/demo10'),
          meta: { title: '政企渠道二级稽核月结', }
        },
        {
          name: 'demo11',
          path: 'demo11',
          component: () => import('@/views/demos/demo11'),
          meta: { title: '直营店日结-支票/网银汇款', }
        },
      ]
    },

  ]
}
const page404 = {
  name: '404',
  path: '*',
  hidden: true,
  component: () => import('@/views/exception/404'),
  meta: {}
}

// 前端菜单

export const generatorDynamicRouter = () => {
  return new Promise((resolve, reject) => {
    // rootRouter.children.push(...qyd)
    // rootRouter.children.push(...tempAsyncRouterMap)
    // rootRouter.children.push(page404)
    resolve([rootRouter])
  })
}

// 真实接口

// export const generatorDynamicRouter = () => {
//   return leftMenuTreeBean().then(res => {
//     const syncRoutes = initMenus(res.data)
//     rootRouter.children.push(...syncRoutes)
//     rootRouter.children.push(page404)
//     return [rootRouter]
//   })
// }
