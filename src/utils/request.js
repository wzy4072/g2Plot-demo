import axios from 'axios'
import store from '@/store'
import storage from 'store'
import notification from 'ant-design-vue/es/notification'
import { VueAxios } from './axios'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Router from '@/router'
import { message } from 'ant-design-vue'
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 6000 // 请求超时时间
})

request.bytterRouter = {
  bytterEdmPay: '/bytterEdmPay',
  fileService: '/fileService',
  budget: '/budget',
  netbank: '/netbank',
  workflow: '/workflow',
  bankAcc: '/bankacc',
  businessBasic: '/businessBasic',
  fundtransfer: '/fundtransfer',
  report: '/report',
}
// request.bytterRouter = {
//   bytterEdmPay: '',
//   fileService: '',
//   budget: '',
//   netbank: '',
//   workflow: '',
//   bankacc: '',
//   businessBasic: '',
// }

// 异常拦截处理器
const errorHandler = (error) => {

  if (error.response) {
    const data = error.response.data
    // 从 localstorage 获取 token
    const token = storage.get(ACCESS_TOKEN)
    if (error.response.status === 403) {
      notification.error({
        message: 'Forbidden',
        description: data.message
      })
    }
    if (error.response.status === 401 && !(data.result && data.result.isLogin)) {
      notification.error({
        message: 'Unauthorized',
        description: 'Authorization verification failed'
      })
      if (token) {
        store.dispatch('Logout').then(() => {
          setTimeout(() => {
            window.location.reload()
          }, 1500)
        })
      }
    }
  }
  return Promise.reject(error)
}

// request interceptor
request.interceptors.request.use(config => {
  const tempRequest = ['/businessBasic/businessBasic/menumanage/widget_menu', '/businessBasic/menumanage/widget_menu']
  if (tempRequest.includes(config.url)) {
    config.baseURL = '/local'
  }
  // config.baseURL = '/local'
  const token = storage.get(ACCESS_TOKEN)
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    // config.headers['Authorization'] = token
    config.headers['access_token'] = token

  }
  config.headers['B-R-CODE'] = Router.app.$route.meta.id || '-1'

  config.method = config.method || 'get'


  //统一添加token参数
  if (config.needToken) {
    if (config.data instanceof FormData) {
      config.data.append('access_token', token)
    } else {
      if (config.method === 'get') {
        config.params = config.params || {}
        config.params.access_token = token
      } else {
        config.data = config.data || {}
        config.data.access_token = token
      }
    }
  }
  return config
}, errorHandler)

// response interceptor
request.interceptors.response.use((response) => {
  if (response.config.autoMessage === 'auto') {
    response.data.status === 0 ? message.success(response.data.msg) : message.error(response.data.msg)
  }
  if (response.config.autoMessage === 'error') {
    response.data.status !== 0 && message.error(response.data.msg)
  }
  const res = response.data
  if (response.data.code === 1001) {
    store.dispatch('Logout')
  }
  if (res instanceof Blob) {
    return response
  }
  return response.data
}, errorHandler)

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request)
  }
}

export default request

export {
  installer as VueAxios,
  request as axios
}
