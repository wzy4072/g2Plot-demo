import request from '@/utils/request'
const report = request.bytterRouter.report
const api = {
  bankAccBalList: report + '/report/bankAccBal/list',
  nisbillhead: report + '/report/nisbillhead/list',
}

export default api

export function bankAccBalList(parameter) {
  return request({
    url: api.bankAccBalList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function nisbillhead(parameter) {
  return request({
    url: api.nisbillhead,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
