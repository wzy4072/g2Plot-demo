import request from '@/utils/request'
const budUrl = request.bytterRouter.budget
const api = {
  queryItemList: budUrl + '/budget/fbsBudgetItemConfig/queryItemList',
  queryCorpItemList: budUrl + '/budget/fbsCorpItemConfig/queryCorpItemList',
  queryCorpList: budUrl + '/budget/fbsCorpItemConfig/queryCorpList',
  enableFbsCorpItemConfig: budUrl + '/budget/fbsCorpItemConfig/enable',
  disableFbsCorpItemConfig: budUrl + '/budget/fbsCorpItemConfig/disable',
  isOpenPeriodBudget: budUrl + '/budget/fbsCorpItemConfig/isOpenPeriodBudget',
  isReport: budUrl + '/budget/fbsCorpItemConfig/isReport',
  isAssignItem: budUrl + '/budget/fbsCorpItemConfig/isAssignItem',
  initBudget: budUrl + '/budget/fbsCorpItemConfig/initBudget',
  collectFlag: budUrl + '/budget/fbsCorpItemConfig/collectFlag',
  disCollectFlag: budUrl + '/budget/fbsCorpItemConfig/flag',
  periodicMaintenance: budUrl + '/budget/fbsCorpItemConfig/periodicMaintenance',
  getSysGroupConfig: budUrl + '/budget/fbsCorpItemConfig/getSysGroupConfig',
  queryBudgetReportList: budUrl + '/budget/fbsBudgetReportOfYear/queryBudgetReportList',
  budgetReportDetail: budUrl + '/budget/fbsBudgetReportOfYear/detail',
  ReportOfYearIsAssignItem: budUrl + '/budget/fbsBudgetReportOfYear/isAssignItem'
}

export default api

export function queryItemList(parameter) {
  return request({
    url: api.queryItemList,
    method: 'post',
    data: parameter
  })
}

export function queryCorpItemList(parameter) {
  return request({
    url: api.queryCorpItemList,
    method: 'post',
    data: parameter
  })
}

// 详情
export function queryCorpList(parameter) {
  return request({
    url: api.queryCorpList,
    method: 'post',
    data: parameter
  })
}
// 
export function enableFbsCorpItemConfig(parameter) {
  return request({
    url: api.enableFbsCorpItemConfig,
    method: 'post',
    data: parameter
  })
}
// 
export function disableFbsCorpItemConfig(parameter) {
  return request({
    url: api.disableFbsCorpItemConfig,
    method: 'post',
    data: parameter
  })
}
export function isOpenPeriodBudget(parameter) {
  return request({
    url: api.isOpenPeriodBudget,
    method: 'post',
    data: parameter
  })
}

export function isReport(parameter) {
  return request({
    url: api.isReport,
    method: 'post',
    data: parameter
  })
}
export function isAssignItem(parameter) {
  return request({
    url: api.isAssignItem,
    method: 'post',
    data: parameter
  })
}
export function initBudget(parameter) {
  return request({
    url: api.initBudget,
    method: 'post',
    data: parameter
  })
}

export function collectFlag(parameter) {
  return request({
    url: api.collectFlag,
    method: 'post',
    data: parameter
  })
}
export function disCollectFlag(parameter) {
  return request({
    url: api.disCollectFlag,
    method: 'post',
    data: parameter
  })
}

export function periodicMaintenance(parameter) {
  return request({
    url: api.periodicMaintenance,
    method: 'post',
    data: parameter
  })
}
export function getSysGroupConfig(parameter) {
  return request({
    url: api.getSysGroupConfig,
    method: 'post',
    data: parameter
  })
}
export function queryBudgetReportList(parameter) {
  return request({
    url: api.queryBudgetReportList,
    method: 'post',
    data: parameter
  })
}

export function budgetReportDetail(parameter) {
  return request({
    url: api.budgetReportDetail,
    method: 'post',
    data: parameter
  })
}
export function ReportOfYearIsAssignItem(parameter) {
  return request({
    url: api.ReportOfYearIsAssignItem,
    method: 'post',
    data: parameter
  })
}

