import { UserLayout, RouteView, PageView, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export default
  [
    // account
    {
      path: '/account',
      component: RouteView,
      redirect: '/account/center',
      name: 'account',
      meta: { title: '个人页', icon: 'user', keepAlive: true, permission: ['user'] },
      children: [
        {
          path: '/account/center',
          name: 'center',
          component: () => import('@/views/else/account/center'),
          meta: { title: '个人中心', keepAlive: true, permission: ['user'] }
        },
        {
          path: '/account/settings',
          name: 'settings',
          component: () => import('@/views/else/account/settings/Index'),
          meta: { title: '个人设置', hideHeader: true, permission: ['user'] },
          redirect: '/account/settings/base',
          hideChildrenInMenu: true,
          children: [
            {
              path: '/account/settings/base',
              name: 'BaseSettings',
              component: () => import('@/views/else/account/settings/BaseSetting'),
              meta: { title: '基本设置', hidden: true, permission: ['user'] }
            },
            {
              path: '/account/settings/security',
              name: 'SecuritySettings',
              component: () => import('@/views/else/account/settings/Security'),
              meta: { title: '安全设置', hidden: true, keepAlive: true, permission: ['user'] }
            },
            {
              path: '/account/settings/custom',
              name: 'CustomSettings',
              component: () => import('@/views/else/account/settings/Custom'),
              meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: ['user'] }
            },
            {
              path: '/account/settings/binding',
              name: 'BindingSettings',
              component: () => import('@/views/else/account/settings/Binding'),
              meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: ['user'] }
            },
            {
              path: '/account/settings/notification',
              name: 'NotificationSettings',
              component: () => import('@/views/else/account/settings/Notification'),
              meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: ['user'] }
            }
          ]
        }
      ]
    },
    // other      
    {
      path: '/other',
      name: 'otherPage',
      component: PageView,
      meta: { title: '其他组件', icon: 'slack', permission: ['dashboard'] },
      redirect: '/other/icon-selector',
      children: [
        {
          path: '/other/icon-selector',
          name: 'TestIconSelect',
          component: () => import('@/views/else/other/IconSelectorView'),
          meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: ['dashboard'] }
        },
        {
          path: '/other/list',
          component: RouteView,
          meta: { title: '业务布局', icon: 'layout', permission: ['support'] },
          redirect: '/other/list/tree-list',
          children: [
            {
              path: '/other/list/tree-list',
              name: 'TreeList',
              component: () => import('@/views/else/other/TreeList'),
              meta: { title: '树目录表格', keepAlive: true }
            },
            {
              path: '/other/list/edit-table',
              name: 'EditList',
              component: () => import('@/views/else/other/TableInnerEditList'),
              meta: { title: '内联编辑表格', keepAlive: true }
            },
            {
              path: '/other/list/user-list',
              name: 'UserList',
              component: () => import('@/views/else/other/UserList'),
              meta: { title: '用户列表', keepAlive: true }
            },
            {
              path: '/other/list/role-list',
              name: 'RoleList',
              component: () => import('@/views/else/other/RoleList'),
              meta: { title: '角色列表', keepAlive: true }
            },
            {
              path: '/other/list/system-role',
              name: 'SystemRole',
              component: () => import('@/views/else/role/RoleList'),
              meta: { title: '角色列表2', keepAlive: true }
            },
            {
              path: '/other/list/permission-list',
              name: 'PermissionList',
              component: () => import('@/views/else/other/PermissionList'),
              meta: { title: '权限列表', keepAlive: true }
            }
          ]
        }
      ]
    }
  ]
