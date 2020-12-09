import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

const locale = {
  'message': '-',
  'menu.home': '主页',
  'menu.dashboard': '仪表盘',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'app.setting.pagestyle': '页面主样式',
  'app.setting.themecolor': '主页面颜色',
  'app.setting.navigationmode': '菜单布局',
  'app.setting.content-width': '内容宽度',
  'app.setting.fixedheader': '固定头部',
  'app.setting.fixedsidebar': '固定菜单',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '无障碍模式',
  'app.setting.copy': '复制设置',
  'layouts.usermenu.dialog.title': '提示:',
  'layouts.usermenu.dialog.content': '是否退出本系统！',
}

export default {
  ...components,
  ...locale
}
