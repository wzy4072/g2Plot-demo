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
