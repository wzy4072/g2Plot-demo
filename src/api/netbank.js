import request from '@/utils/request'

const netbank = request.bytterRouter.netbank

const api = {
  getPayerBankAccInfo: netbank + '/netbank/ajaxJson/getPayerBankAccInfo',
  getPurpose: netbank + '/netbank/ajaxJson/getPurpose',
  //   isControlBudget: netbank + '/netbank/fbsBudgetApi/isControlBudget',
  getSingleDayLimit: netbank + '/netbank/nisbillhead/getSingleDayLimit',
  queryBankAccCurBal: netbank + '/netbank/ajaxJson/queryBankAccCurBal',// 获取余额
  queryPayeeList: netbank + '/netbank/ajaxJson/queryPayeeList',
  verifyBlackList: netbank + '/netbank/ajaxJson/verifyBlackList',
  nisbillheadSave: netbank + '/netbank/nisbillhead/save',
  querylist: netbank + '/netbank/nisbillhead/querylist',
  findByBillId: netbank + '/netbank/nisbillhead/findByBillId',
  nisbillheadDelete: netbank + '/netbank/nisbillhead/delete',
  selectContractNo: netbank + '/netbank/payrollCredit/selectContractNo',
  goPayrollInquiry: netbank + '/netbank/payrollInquiry/goPayrollInquiry',
  payrollInquiryDetail: netbank + '/netbank/payrollInquiry/payrollInquiryDetail',
   //报销明细
  queryExpenseDetail: netbank + '/netbank/expenseWagesPayQuery/queryExpenseDetail',
  expenseWagesPayQuery: netbank + '/netbank/expenseWagesPayQuery/expenseWagesPayQuery',
  expenseWagesPayDelById: netbank + '/netbank/expenseWagesPayQuery/expenseWagesPayDelById',
  nisPayBatchDataCheck: netbank + '/netbank/nisPayBatch/dataCheck',
  expenseWagesPayDataCheck: netbank + '/netbank/expenseWagesPay/dataCheck',
  batchAddExpenseWagesPay: netbank + '/netbank/expenseWagesPay/batchAddExpenseWagesPay',
  queryPayeeAccValidSign: netbank + '/netbank/ajaxJson/queryPayeeAccValidSign',
  queryParamManagement: netbank + '/netbank/ajaxJson/queryParamManagement',
  batchBillSave: netbank + '/netbank/nisPayBatch/batchBillSave',
  payrollCreditDataCheck: netbank + '/netbank/payrollCredit/dataCheck',
  addPayrollCredit: netbank + '/netbank/payrollCredit/addPayrollCredit',


  //流程Url
  getApproveList: netbank + '/netbank/nisbillhead/getApproveList',
  getFinishedList: netbank + '/netbank/nisbillhead/getFinishedList',
  getTrackList: netbank + '/netbank/nisbillhead/getTrackList',

  getNisPayBatchApproveList: netbank + '/netbank/nisPayBatch/getApproveList',
  getNisPayBatchFinishedList: netbank + '/netbank/nisPayBatch/getFinishedList',
  getNisPayBatchTrackList: netbank + '/netbank/nisPayBatch/getTrackList',
  queryPayeeDetail: netbank + '/netbank/nisPayBatch/queryPayeeDetail',

  getPayrollInquiryDetailApprove: netbank + '/netbank/payrollInquiry/payrollInquiryDetailApprove',
  getPayrollInquiryList: netbank + '/netbank/payrollCredit/getApproveList',
  
  getExpenseWagesPayApproveList: netbank + '/netbank/expenseWagesPayQuery/getApproveList',
  getExpenseWagesPayFinishedList: netbank + '/netbank/expenseWagesPayQuery/getFinishedList',
  getExpenseWagesPayTrackList: netbank + '/netbank/expenseWagesPayQuery/getTrackList',

  nisbillheadUpdate: netbank + '/netbank/nisbillhead/saveOrUpdateComment',
  nisPayBatchUpdate: netbank + '/netbank/nisPayBatch/saveOrUpdateComment',
  payrollCreditUpdate: netbank + '/netbank/payrollCredit/saveOrUpdateComment',
  //费用报销审批后，更新返回的信息
  expenseWagesPayQueryUpdate: netbank + '/netbank/expenseWagesPayQuery/saveOrUpdateComment',

}

export default api

export function getPayerBankAccInfo(parameter) {
  return request({
    url: api.getPayerBankAccInfo,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getPurpose(parameter) {
  return request({
    url: api.getPurpose,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
// export function isControlBudget(parameter) {
//   return request({
//     url: api.isControlBudget,
//     
//     params: parameter
//   })
// }
export function getSingleDayLimit(parameter) {
  return request({
    url: api.getSingleDayLimit,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryBankAccCurBal(parameter) {
  return request({
    url: api.queryBankAccCurBal,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryPayeeList(parameter) {
  return request({
    url: api.queryPayeeList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function verifyBlackList(parameter) {
  return request({
    url: api.verifyBlackList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function nisbillheadSave(parameter) {
  return request({
    url: api.nisbillheadSave,
    method: 'post',
    data: parameter,
    timeout: 20000,
    autoMessage: 'error'
  })
}
export function querylist(parameter) {
  return request({
    url: api.querylist,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}
export function findByBillId(parameter) {
  return request({
    url: api.findByBillId,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function nisbillheadDelete(parameter) {
  return request({
    url: api.nisbillheadDelete,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function selectContractNo(parameter) {
  return request({
    url: api.selectContractNo,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function goPayrollInquiry(parameter) {
  return request({
    url: api.goPayrollInquiry,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function payrollInquiryDetail(parameter) {
  return request({
    url: api.payrollInquiryDetail,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryExpenseDetail(parameter) {
  return request({
    url: api.queryExpenseDetail,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function expenseWagesPayQuery(parameter) {
  return request({
    url: api.expenseWagesPayQuery,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}
export function expenseWagesPayDelById(parameter) {
  return request({
    url: api.expenseWagesPayDelById,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}

// 验证导入数据的合格性
export function nisPayBatchDataCheck(parameter) {
  return request({
    url: api.nisPayBatchDataCheck,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function expenseWagesPayDataCheck(parameter) {
  return request({
    url: api.expenseWagesPayDataCheck,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function batchAddExpenseWagesPay(parameter) {
  return request({
    url: api.batchAddExpenseWagesPay,
    method: 'post',
    data: parameter,
    timeout: 20000,
    autoMessage: 'error'
  })
}
export function queryPayeeAccValidSign(parameter) {
  return request({
    url: api.queryPayeeAccValidSign,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryParamManagement(parameter) {
  return request({
    url: api.queryParamManagement,
    params: parameter,
    needToken: true,
    autoMessage: 'error'
  })
}
export function batchBillSave(parameter) {
  return request({
    url: api.batchBillSave,
    data: parameter,
    method: 'post',
    timeout: 20000,
    autoMessage: 'error'
  })
}
export function payrollCreditDataCheck(parameter) {
  return request({
    url: api.payrollCreditDataCheck,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}
export function addPayrollCredit(parameter) {
  return request({
    url: api.addPayrollCredit,
    data: parameter,
    method: 'post',
    timeout: 20000,
    autoMessage: 'error'
  })
}

export function getApproveList(parameter) {
  return request({
    url: api.getApproveList,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}

export function getFinishedList(parameter) {
  return request({
    url: api.getFinishedList,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}

export function getTrackList(parameter) {
  return request({
    url: api.getTrackList,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}

export function nisbillheadUpdate(parameter) {
  return request({
    url: api.nisbillheadUpdate,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}
export function nisPayBatchUpdate(parameter) {
  return request({
    url: api.nisPayBatchUpdate,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}
export function payrollCreditUpdate(parameter) {
  return request({
    url: api.payrollCreditUpdate,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}
export function expenseWagesPayQueryUpdate(parameter) {
  return request({
    url: api.expenseWagesPayQueryUpdate,
    data: parameter,
    method: 'post',
    autoMessage: 'error'
  })
}

export function getNisPayBatchApproveList(parameter) {
    return request({
      url: api.getNisPayBatchApproveList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getNisPayBatchFinishedList(parameter) {
    return request({
      url: api.getNisPayBatchFinishedList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getNisPayBatchTrackList(parameter) {
    return request({
      url: api.getNisPayBatchTrackList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getPayrollInquiryDetailApprove(parameter) {
    return request({
      url: api.getPayrollInquiryDetailApprove,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getPayrollInquiryList(parameter) {
    return request({
      url: api.getPayrollInquiryList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getExpenseWagesPayApproveList(parameter) {
    return request({
      url: api.getExpenseWagesPayApproveList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getExpenseWagesPayFinishedList(parameter) {
    return request({
      url: api.getExpenseWagesPayFinishedList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function getExpenseWagesPayTrackList(parameter) {
    return request({
      url: api.getExpenseWagesPayTrackList,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }

  export function queryPayeeDetail(parameter) {
    return request({
      url: api.queryPayeeDetail,
      data: parameter,
      method: 'post',
      autoMessage: 'error'
    })
  }
