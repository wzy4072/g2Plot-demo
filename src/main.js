// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'

// import { GetEnumItems, exportDataExcel } from '@/api/common'
import themePluginConfig from '../config/themePluginConfig'
import '@/permission'

import bootstrap from './core/bootstrap'
import './core/lazy_use'

import './utils/filter' // global filter
import './global.less'
import '@/utils/bytter_bootstrap.less'
Vue.config.productionTip = false
const echarts = require('echarts/echarts.all')
Vue.prototype.$echarts = echarts

Vue.use(dataV)
// Vue.prototype.comAPI = { GetEnumItems, exportDataExcel }

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
