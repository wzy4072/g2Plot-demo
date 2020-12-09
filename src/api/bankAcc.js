import request from '@/utils/request'
const bankAcc = request.bytterRouter.bankAcc
const api = {
  queryList: bankAcc + '/bankacc/account/queryBankAccBal/queryList',
  queryDataList: bankAcc + '/bankacc/account/queryBal/queryDataList',
  queryHistoryDataList: bankAcc + '/bankacc/account/queryHistoryBal/queryHistoryDataList',
  // htmlQueryGrantBankAcc: '/businessBasic/businessBasic/accountGrantApi/htmlQueryGrantBankAcc',
  queryReceipt: bankAcc + '/bankacc/account/queryReceipt/queryAccNo',
  querySerialList: bankAcc + '/bankacc/account/querySerial/queryDataList',
  queryHistorySerial: bankAcc + '/bankacc/account/queryHistorySerial/queryHistoryDataList',
  addBankAcc: bankAcc + '/bankacc/account/queryBankAccBal/addBankAcc',
  updStatus: bankAcc + '/bankacc/account/queryBankAccBal/updStatus',
  updValidSign: bankAcc + '/bankacc/account/queryBankAccBal/updValidSign',
  querySupplAccount: bankAcc + '/bankacc/account/queryBankAccBal/querySupplAccount',
  updBankAcc: bankAcc + '/bankacc/account/queryBankAccBal/updBankAcc',
  cancelBankAccReq: bankAcc + '/bankacc/account/queryBankAccBal/cancelBankAccReq',
  delAudit: bankAcc + '/bankacc/account/queryBankAccBal/delAudit',
  accountApplicationApprover: bankAcc + '/bankacc/account/queryBankAccBal/accountApplicationApprover',
  accountCancelApprover: bankAcc + '/bankacc/account/queryBankAccBal/accountCancelApprover',
  // getByBankAcc: bankAcc + '/bankacc/account/queryBal/getByBankAcc',
  delBankAcc: bankAcc + '/bankacc/account/queryBankAccBal/delBankAcc',

  accountheadUpdate: bankAcc + '/bankacc/account/queryBankAccBal/saveOrUpdateComment',

  //获得银行代码
  getBifCodeSelect: bankAcc + '/bankacc/account/queryBankAccBal/getBifCodeSelect'

}

export default api

export function queryList(parameter) {
  return request({
    url: api.queryList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryDataList(parameter) {
  return request({
    url: api.queryDataList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryHistoryDataList(parameter) {
  return request({
    url: api.queryHistoryDataList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
// export function htmlQueryGrantBankAcc(parameter) {
//   return request({
//     url: api.htmlQueryGrantBankAcc,
//     method: 'post',
//     data: parameter,

//     autoMessage: 'error'
//   })
// }
export function queryReceipt(parameter) {
  return request({
    url: api.queryReceipt,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function querySerialList(parameter) {
  return request({
    url: api.querySerialList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryHistorySerial(parameter) {
  return request({
    url: api.queryHistorySerial,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function querySupplAccount(parameter) {
  return request({
    url: api.querySupplAccount,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function addBankAcc(parameter) {
  return request({
    url: api.addBankAcc,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function updStatus(parameter) {
  return request({
    url: api.updStatus,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function updValidSign(parameter) {
  return request({
    url: api.updValidSign,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function updBankAcc(parameter) {
  return request({
    url: api.updBankAcc,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function cancelBankAccReq(parameter) {
  return request({
    url: api.cancelBankAccReq,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function delAudit(parameter) {
  return request({
    url: api.delAudit,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function accountApplicationApprover(parameter) {
  return request({
    url: api.accountApplicationApprover,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function accountCancelApprover(parameter) {
  return request({
    url: api.accountCancelApprover,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function accountheadUpdate(parameter) {
  return request({
    url: api.accountheadUpdate,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function delBankAcc(parameter) {
  return request({
    url: api.delBankAcc,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function getBifCodeSelect(parameter) {
    return request({
      url: api.getBifCodeSelect,
      method: 'post',
      data: parameter,
      autoMessage: 'error'
    })
}
  

// export function getByBankAcc(parameter) {
//   return request({
//     url: api.getByBankAcc,
//     method: 'post',
//     data: parameter,
//     autoMessage: 'error'
//   })
// }
