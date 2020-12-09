import request from '@/utils/request'

const api = {
  downloadTemplateUrl: request.bytterRouter.fileService + '/fileService/downloadTemplate',
  preImport: request.bytterRouter.fileService + '/fileService/preImport',
}

export default api

// export function exportDataExcel(params, url, fileName, methodType = 'post') {
export function exportDataExcel({ method, url, fileName, params }) {
  return request({
    method,
    responseType: 'blob', // 防止返回乱码
    url,
    [method == 'post' ? 'data' : 'params']: params
  }).then(res => {
    debugger
    if (res.status === 200) {
      const data = res.data
      if (!data) {
        console.error('导出/下载 失败，解析数据为空！')
        return
      }
      // const datetime = Date.now();
      // 创建一个新的url，此url指向新建的Blob对象
      const url = window.URL.createObjectURL(new Blob([data]))
      // 创建a标签，并隐藏改a标签
      const link = document.createElement('a')
      link.style.display = 'none'
      // a标签的href属性指定下载链接
      link.href = url
      // setAttribute() 方法添加指定的属性，并为其赋指定的值。
      fileName = fileName || '导出excel.xlsx'
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()
      // this.$message.success('导出成功');
      // this.modal3 = false
    } else {
      console.error('下载/导出失败，请尝试重新导出')
    }
  }).catch(function (error) {
    console.error(error)
  })
}

export function downloadTemplate({ url = api.downloadTemplateUrl, method = 'get', params, fileName = 'export.xlsx' }) {
  return request({
    url,
    responseType: 'blob', // 防止返回乱码
    method,
    params,
  }).then((res) => {
    var blob = res.data
    var reader = new FileReader()
    reader.readAsDataURL(blob) // 转换为base64，可以直接放入a标签href
    reader.onload = function (e) {
      const link = document.createElement('a')
      link.style.display = 'none'
      link.setAttribute('download', fileName)
      link.setAttribute('href', e.target.result)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
    return res
  })
}

export function preImport(data) {
  return request({
    url: api.preImport,
    method: 'post',
    autoMessage: 'error',
    data
  })
}
