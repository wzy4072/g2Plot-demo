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
  redirect: '/dashboard',
  meta: {
    title: ''
  },
  children: []
}

export const asyncRouterMap = []
// export const asyncRouterMap = [

//   {
//     path: '/',
//     name: 'index',
//     component: BasicLayout,
//     meta: { title: 'menu.home' },
//     redirect: '/dashboard/pay-info',
//     children: [
//       // dashboard
//       {
//         path: '/dashboard',
//         name: 'dashboard',
//         redirect: '/dashboard/workplace',
//         component: RouteView,
//         meta: { title: 'menu.dashboard', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
//         children: [
//           {
//             path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
//             name: 'Analysis',
//             component: () => import('@/views/dashboard/Analysis'),
//             meta: { title: 'menu.dashboard.analysis', keepAlive: false, permission: ['dashboard'] }
//           },
//           // 外部链接
//           {
//             path: 'https://www.baidu.com/',
//             name: 'Monitor',
//             meta: { title: 'menu.dashboard.monitor', target: '_blank' }
//           },
//           {
//             path: '/dashboard/workplace',
//             name: 'Workplace',
//             component: () => import('@/views/dashboard/Workplace'),
//             meta: { title: 'menu.dashboard.workplace', keepAlive: true, permission: ['dashboard'] }
//           },
//           {
//             path: '/dashboard/pay-info',
//             name: 'PayInfo',
//             component: () => import('@/views/dashboard/Dashboard'),
//             meta: { title: '主页', keepAlive: true, permission: ['dashboard'] }
//           }
//         ]
//       },




//       // forms
//       {
//         path: '/form',
//         redirect: '/form/base-form',
//         component: RouteView,
//         meta: { title: '表单页', icon: 'form', permission: ['form'] },
//         children: [
//           {
//             path: '/form/base-form',
//             name: 'BaseForm',
//             component: () => import('@/views/else/form/basicForm'),
//             meta: { title: '基础表单', keepAlive: true, permission: ['form'] }
//           },
//           {
//             path: '/form/step-form',
//             name: 'StepForm',
//             component: () => import('@/views/else/form/stepForm/StepForm'),
//             meta: { title: '分步表单', keepAlive: true, permission: ['form'] }
//           },
//           {
//             path: '/form/advanced-form',
//             name: 'AdvanceForm',
//             component: () => import('@/views/else/form/advancedForm/AdvancedForm'),
//             meta: { title: '高级表单', keepAlive: true, permission: ['form'] }
//           }
//         ]
//       },

//       // list
//       {
//         path: '/list',
//         name: 'list',
//         component: RouteView,
//         redirect: '/list/table-list',
//         meta: { title: '列表页', icon: 'table', permission: ['table'] },
//         children: [
//           {
//             path: '/list/table-list/:pageNo([1-9]\\d*)?',
//             name: 'TableListWrapper',
//             hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
//             component: () => import('@/views/else/list/TableList'),
//             meta: { title: '查询表格', keepAlive: true, permission: ['table'] }
//           },
//           {
//             path: '/list/basic-list',
//             name: 'BasicList',
//             component: () => import('@/views/else/list/BasicList'),
//             meta: { title: '标准列表', keepAlive: true, permission: ['table'] }
//           },
//           {
//             path: '/list/card',
//             name: 'CardList',
//             component: () => import('@/views/else/list/CardList'),
//             meta: { title: '卡片列表', keepAlive: true, permission: ['table'] }
//           },
//           {
//             path: '/list/search',
//             name: 'SearchList',
//             component: () => import('@/views/else/list/search/SearchLayout'),
//             redirect: '/list/search/article',
//             meta: { title: '搜索列表', keepAlive: true, permission: ['table'] },
//             children: [
//               {
//                 path: '/list/search/article',
//                 name: 'SearchArticles',
//                 component: () => import('@/views/else/list/search/Article'),
//                 meta: { title: '搜索列表（文章）', permission: ['table'] }
//               },
//               {
//                 path: '/list/search/project',
//                 name: 'SearchProjects',
//                 component: () => import('@/views/else/list/search/Projects'),
//                 meta: { title: '搜索列表（项目）', permission: ['table'] }
//               },
//               {
//                 path: '/list/search/application',
//                 name: 'SearchApplications',
//                 component: () => import('@/views/else/list/search/Applications'),
//                 meta: { title: '搜索列表（应用）', permission: ['table'] }
//               }
//             ]
//           }
//         ]
//       },

//       // profile
//       {
//         path: '/profile',
//         name: 'profile',
//         component: RouteView,
//         redirect: '/profile/basic',
//         meta: { title: '详情页', icon: 'profile', permission: ['profile'] },
//         children: [
//           {
//             path: '/profile/basic',
//             name: 'ProfileBasic',
//             component: () => import('@/views/else/profile/basic'),
//             meta: { title: '基础详情页', permission: ['profile'] }
//           },
//           {
//             path: '/profile/advanced',
//             name: 'ProfileAdvanced',
//             component: () => import('@/views/else/profile/advanced/Advanced'),
//             meta: { title: '高级详情页', permission: ['profile'] }
//           }
//         ]
//       },

//       // result
//       {
//         path: '/result',
//         name: 'result',
//         component: RouteView,
//         redirect: '/result/success',
//         meta: { title: '结果页', icon: 'check-circle-o', permission: ['result'] },
//         children: [
//           {
//             path: '/result/success',
//             name: 'ResultSuccess',
//             component: () => import(/* webpackChunkName: "result" */ '@/views/else/result/Success'),
//             meta: { title: '成功', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
//           },
//           {
//             path: '/result/fail',
//             name: 'ResultFail',
//             component: () => import(/* webpackChunkName: "result" */ '@/views/else/result/Error'),
//             meta: { title: '失败', keepAlive: false, hiddenHeaderContent: true, permission: ['result'] }
//           }
//         ]
//       },
//       {
//         path: '/exception',
//         name: 'exception',
//         component: RouteView,
//         redirect: '/exception/403',
//         meta: { title: '异常页', icon: 'warning', permission: ['exception'] },
//         children: [
//           {
//             path: '/exception/403',
//             name: 'Exception403',
//             component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
//             meta: { title: '403', permission: ['exception'] }
//           },
//           {
//             path: '/exception/404',
//             name: 'Exception404',
//             component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
//             meta: { title: '404', permission: ['exception'] }
//           },
//           {
//             path: '/exception/500',
//             name: 'Exception500',
//             component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
//             meta: { title: '500', permission: ['exception'] }
//           }
//         ]
//       },

//       // account
//       {
//         path: '/account',
//         component: RouteView,
//         redirect: '/account/center',
//         name: 'account',
//         meta: { title: '个人页', icon: 'user', keepAlive: true, permission: ['user'] },
//         children: [
//           {
//             path: '/account/center',
//             name: 'center',
//             component: () => import('@/views/else/account/center'),
//             meta: { title: '个人中心', keepAlive: true, permission: ['user'] }
//           },
//           {
//             path: '/account/settings',
//             name: 'settings',
//             component: () => import('@/views/else/account/settings/Index'),
//             meta: { title: '个人设置', hideHeader: true, permission: ['user'] },
//             redirect: '/account/settings/base',
//             hideChildrenInMenu: true,
//             children: [
//               {
//                 path: '/account/settings/base',
//                 name: 'BaseSettings',
//                 component: () => import('@/views/else/account/settings/BaseSetting'),
//                 meta: { title: '基本设置', hidden: true, permission: ['user'] }
//               },
//               {
//                 path: '/account/settings/security',
//                 name: 'SecuritySettings',
//                 component: () => import('@/views/else/account/settings/Security'),
//                 meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['user'] }
//               },
//               {
//                 path: '/account/settings/custom',
//                 name: 'CustomSettings',
//                 component: () => import('@/views/else/account/settings/Custom'),
//                 meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
//               },
//               {
//                 path: '/account/settings/binding',
//                 name: 'BindingSettings',
//                 component: () => import('@/views/else/account/settings/Binding'),
//                 meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: ['user'] }
//               },
//               {
//                 path: '/account/settings/notification',
//                 name: 'NotificationSettings',
//                 component: () => import('@/views/else/account/settings/Notification'),
//                 meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: ['user'] }
//               }
//             ]
//           }
//         ]
//       },
//       {
//         path: '/other',
//         name: 'otherPage',
//         component: PageView,
//         meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
//         redirect: '/other/icon-selector',
//         children: [
//           {
//             path: '/other/icon-selector',
//             name: 'TestIconSelect',
//             component: () => import('@/views/else/other/IconSelectorView'),
//             meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
//           },
//           {
//             path: '/other/list',
//             component: RouteView,
//             meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
//             redirect: '/other/list/tree-list',
//             children: [
//               {
//                 path: '/other/list/tree-list',
//                 name: 'TreeList',
//                 component: () => import('@/views/else/other/TreeList'),
//                 meta: { title: '树目录表格', keepAlive: true }
//               },
//               {
//                 path: '/other/list/edit-table',
//                 name: 'EditList',
//                 component: () => import('@/views/else/other/TableInnerEditList'),
//                 meta: { title: '内联编辑表格', keepAlive: true }
//               },
//               {
//                 path: '/other/list/user-list',
//                 name: 'UserList',
//                 component: () => import('@/views/else/other/UserList'),
//                 meta: { title: '用户列表', keepAlive: true }
//               },
//               {
//                 path: '/other/list/role-list',
//                 name: 'RoleList',
//                 component: () => import('@/views/else/other/RoleList'),
//                 meta: { title: '角色列表', keepAlive: true }
//               },
//               {
//                 path: '/other/list/system-role',
//                 name: 'SystemRole',
//                 component: () => import('@/views/else/role/RoleList'),
//                 meta: { title: '角色列表2', keepAlive: true }
//               },
//               {
//                 path: '/other/list/permission-list',
//                 name: 'PermissionList',
//                 component: () => import('@/views/else/other/PermissionList'),
//                 meta: { title: '权限列表', keepAlive: true }
//               }
//             ]
//           }
//         ]
//       }

//     ]
//   },
//   {
//     path: '*', redirect: '/404', hidden: true
//   }
// ]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  rootRouter,
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "register" */ '@/views/user/RegisterResult')
      }
    ]
  },
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
        component: () => import(/* webpackChunkName: "t3" */ '@/views/user/Temp3')
      },
      {
        path: '/temp4',
        name: 'temp4',
        component: () => import(/* webpackChunkName: "t4" */ '@/views/user/Temp4')
      },
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
