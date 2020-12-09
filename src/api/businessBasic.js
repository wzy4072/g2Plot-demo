import request from '@/utils/request'
const busUrl = request.bytterRouter.businessBasic
const api = {
  leftMenuTreeBean: busUrl + '/businessBasic/menuManage/leftMenuTreeBean',
  getRolePageList: busUrl + '/businessBasic/roleManage/getRolePageList',
  addRole: busUrl + '/businessBasic/roleManage/addRole',
  updRoleById: busUrl + '/businessBasic/roleManage/updRoleById',
  updStatus: busUrl + '/businessBasic/roleManage/updStatus',
  delRole: busUrl + '/businessBasic/roleManage/delRole',
  getAssignUserList: busUrl + '/businessBasic/roleManage/getAssignUserList',
  batchAssignUser: busUrl + '/businessBasic/roleManage/batchAssignUser',
  getPowerMenuTreeBean: busUrl + '/businessBasic/roleManage/getPowerMenuTreeBean',
  batchAssignMenu: busUrl + '/businessBasic/roleManage/batchAssignMenu',
  getUserList: busUrl + '/businessBasic/userManage/getUserList',
  corpTree: busUrl + '/businessBasic/userManage/corpTree',
  getAuthCorpTree: busUrl + '/businessBasic/bizAuth/getAuthCorpTree',
  // getBizCorpTree: busUrl + '/businessBasic/basicAuth/getBizCorpTree',
  getBizCorpTree: busUrl + '/businessBasic/basicAuth/getBizPowerCorpList',

  getBizAccByCorpIdList: busUrl + '/businessBasic/basicAuth/getBizAccByCorpIdList',
  updUserById: busUrl + '/businessBasic/userManage/updUserById',
  saveUser: busUrl + '/businessBasic/userManage/saveUser',
  updUserStatus: busUrl + '/businessBasic/userManage/updStatus',
  resetUserPwd: busUrl + '/businessBasic/userManage/resetUserPwd',
  roleList: busUrl + '/businessBasic/userManage/roleList',
  addUserRole: busUrl + '/businessBasic/userManage/addUserRole',
  delUserById: busUrl + '/businessBasic/userManage/delUserById',
  batchAssignCorp: busUrl + '/businessBasic/userManage/batchAssignCorp',
  getBasicAccByCorpIdList: busUrl + '/businessBasic/basicAuth/getBasicAccByCorpIdList',
  getRadioChooseList: busUrl + '/businessBasic/accountGrant/getRadioChooseList',
  getBasicCorpList: busUrl + '/businessBasic/basicAuth/getBasicCorpList',

  loadAccChooseUserByCorpIdList: busUrl + '/businessBasic/accountGrant/loadAccChooseUserByCorpIdList',
  loadUserChooseAccByUserIdList: busUrl + '/businessBasic/accountGrant/loadUserChooseAccByUserIdList',
  batchAddGrant: busUrl + '/businessBasic/accountGrant/batchAddGrant',
  getBudgetItem: busUrl + '/businessBasic/parameterManagement/getBudgetItem',
  queryParameter: busUrl + '/businessBasic/parameterManagement/queryParameter',
  updateParameter: busUrl + '/businessBasic/parameterManagement/updateParameter',
  goSelectpayeeManage: busUrl + '/businessBasic/payeeManage/goSelectpayeeManage',
  deletePayee: busUrl + '/businessBasic/payeeManage/deletePayee',
  updatePayee: busUrl + '/businessBasic/payeeManage/updatePayee',
  batchImportPayeeManage: busUrl + '/businessBasic/payeeManage/batchImportPayeeManage',
  getLoginMessage: busUrl + '/businessBasic/payeeManage/getLoginMessage',
  checkPayeeList: busUrl + '/businessBasic/payeeManage/checkPayeeList',
  accountQuota: busUrl + '/businessBasic/accountQuotaMaintenance/list',
  accountQuotaMaintain: busUrl + '/businessBasic/accountQuotaMaintain/list',
  // getBankAcc: busUrl + '/businessBasic/accountQuotaMaintenance/getBankAcc',
  // getPaymentLimit: busUrl + '/businessBasic/accountQuotaMaintenance/getPaymentLimit',
  updateaccountQuota: busUrl + '/businessBasic/accountQuotaMaintenance/update',
  selectAllBBA: busUrl + '/businessBasic/blackWhiteList/selectAllBBA',// 列表
  selectAllBAW: busUrl + '/businessBasic/blackWhiteList/selectAllBAW',// 详情
  deleteOneBAW: busUrl + '/businessBasic/blackWhiteList/deleteOneBAW',// 黑白名单管理-删除黑白名单上的单个账户
  deleteBAW: busUrl + '/businessBasic/blackWhiteList/deleteBAW',
  queryUserlog: busUrl + '/businessBasic/userLogQuery/queryUserlog',
  bankCategory: busUrl + '/businessBasic/bankTypeManage/queryBankTypeList',

  getBankTypeName: busUrl + '/businessBasic/payeeManage/getBankTypeName',
  // selectBankName: busUrl + '/businessBasic/queryBankList/selectBankName',
  selectBankName: busUrl + '/businessBasic/bankInfoManage/bankInfoManageList',
  payeeIsRepeat: busUrl + '/businessBasic/payeeManage/isRepeat',
  addPayee: busUrl + '/businessBasic/payeeManage/addPayee',

  checkBwBankAcc: busUrl + '/businessBasic/blackWhiteList/checkBwBankAcc',
  addBatchBaw: busUrl + '/businessBasic/blackWhiteList/addBatchBaw',
  checkBwBankAccList: busUrl + '/businessBasic/blackWhiteList/checkBwBankAccList',
  getAccLimitInfo: busUrl + '/businessBasic/accountQuotaMaintain/getAccLimitInfo',
  updateLimit: busUrl + '/businessBasic/accountQuotaMaintain/updateLimit',
  bankInfoManageList: busUrl + '/businessBasic/bankInfoManage/bankInfoManageList',
  batchImportBankInfoManage: busUrl + '/businessBasic/bankInfoManage/batchImportBankInfoManage',
  getProvinceList: busUrl + '/businessBasic/basicAuth/getProvinceList',
  getCityList: busUrl + '/businessBasic/basicAuth/getCityList',
  getCorpIdsPowerByUserId: busUrl + '/businessBasic/userManage/getCorpIdsPowerByUserId',
  getMenuTreeByGroupId: busUrl + '/businessBasic/menuManage/getMenuTreeByGroupId',
  getMenuIdsPowerByParams: busUrl + '/businessBasic/userManage/getMenuIdsPowerByParams',
  corpManageCorpTreeList: busUrl + '/businessBasic/corpManage/corpTreeList',
  getCertList: busUrl + '/businessBasic/userManage/getCertList',
  addChildCorp: busUrl + '/businessBasic/corpManage/addChildCorp',
  updCorpById: busUrl + '/businessBasic/corpManage/updCorpById',
  getCorpInfoByCorpId: busUrl + '/businessBasic/corpManage/getCorpInfoByCorpId',
  delCorp: busUrl + '/businessBasic/corpManage/delCorp',
  batchUserAssignCorpMenu: busUrl + '/businessBasic/userManage/batchSpecialPower',
  batchCopySpecialPower: busUrl + '/businessBasic/userManage/batchCopySpecialPower',
  getGrantBankAcc: busUrl + '/businessBasic/accountGrantApi/getQueryGrantBankAcc',
  dataCheck: busUrl + '/businessBasic/bankInfoManage/dataCheck',
  checkCorpIsExist: busUrl + '/businessBasic/corpManage/checkCorpIsExist',
  checkUserIsExist: busUrl + '/businessBasic/userManage/checkUserIsExist',
  checkRoleNameIsExist: busUrl + '/businessBasic/roleManage/checkRoleNameIsExist',
  updCurrentUserPwd: busUrl + '/businessBasic/userManage/updCurrentUserPwd'
}

export default api

export function leftMenuTreeBean(parameter) {
  return request({
    url: api.leftMenuTreeBean,
    method: 'post',
    data: parameter
  })
}
export function getRolePageList(parameter) {
  return request({
    url: api.getRolePageList,
    method: 'post',
    data: parameter
  })
}

export function addRole(parameter) {
  return request({
    url: api.addRole,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function updRoleById(parameter) {
  return request({
    url: api.updRoleById,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function updStatus(parameter) {
  return request({
    url: api.updStatus,
    method: 'post',
    data: parameter
  })
}
export function delRole(parameter) {
  return request({
    url: api.delRole,
    method: 'post',
    data: parameter
  })
}
export function getAssignUserList(parameter) {
  return request({
    url: api.getAssignUserList,
    method: 'post',
    data: parameter
  })
}
export function batchAssignUser(parameter) {
  return request({
    url: api.batchAssignUser,
    method: 'post',
    data: parameter
  })
}

export function getPowerMenuTreeBean(parameter) {
  return request({
    url: api.getPowerMenuTreeBean,
    method: 'post',
    data: parameter
  })
}
export function batchAssignMenu(parameter) {
  return request({
    url: api.batchAssignMenu,
    method: 'post',
    data: parameter
  })
}
export function getUserList(parameter) {
  return request({
    url: api.getUserList,
    method: 'post',
    data: parameter
  })
}
export function corpTree(parameter) {
  return request({
    url: api.corpTree,
    method: 'post',
    data: parameter
  })
}
export function updUserById(parameter) {
  return request({
    url: api.updUserById,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function saveUser(parameter) {
  return request({
    url: api.saveUser,
    method: 'post',
    data: parameter
  })
}
export function updUserStatus(parameter) {
  return request({
    url: api.updUserStatus,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function resetUserPwd(parameter) {
  return request({
    url: api.resetUserPwd,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function roleList(parameter) {
  return request({
    url: api.roleList,
    method: 'post',
    data: parameter
  })
}
export function addUserRole(parameter) {
  return request({
    url: api.addUserRole,
    method: 'post',
    data: parameter
  })
}
export function batchAssignCorp(parameter) {
  return request({
    url: api.batchAssignCorp,
    method: 'post',
    data: parameter
  })
}
export function getBasicAccByCorpIdList(parameter) {
  return request({
    url: api.getBasicAccByCorpIdList,
    method: 'post',
    data: parameter,
  })
}
export function getRadioChooseList(parameter) {
  return request({
    url: api.getRadioChooseList,
    method: 'post',
    data: parameter
  })
}
export function getBasicCorpList(parameter) {
  return request({
    url: api.getBasicCorpList,
    method: 'post',
    data: parameter,
  })
}
export function getBizCorpTree(parameter) {
  return request({
    url: api.getBizCorpTree,
    method: 'post',
    data: parameter,
    needToken: true
  })
}
export function getBizAccByCorpIdList(parameter) {
  return request({
    url: api.getBizAccByCorpIdList,
    method: 'post',
    data: parameter,
    needToken: true
  })
}
export function loadAccChooseUserByCorpIdList(parameter) {
  return request({
    url: api.loadAccChooseUserByCorpIdList,
    method: 'post',
    data: parameter
  })
}
export function loadUserChooseAccByUserIdList(parameter) {
  return request({
    url: api.loadUserChooseAccByUserIdList,
    method: 'post',
    data: parameter
  })
}
export function batchAddGrant(parameter) {
  return request({
    url: api.batchAddGrant,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function getBudgetItem(parameter) {
  return request({
    url: api.getBudgetItem,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function queryParameter(parameter) {
  return request({
    url: api.queryParameter,
    method: 'post',
    data: parameter,
  })
}
export function updateParameter(parameter) {
  return request({
    url: api.updateParameter,
    method: 'post',
    data: parameter,
  })
}
export function goSelectpayeeManage(parameter) {
  return request({
    url: api.goSelectpayeeManage,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}

export function deletePayee(parameter) {
  return request({
    url: api.deletePayee,
    method: 'post',
    data: parameter,
    // autoMessage: 'error'
  })
}
// {"corpId":"bb60512e61d545b8ae7849702c777ec9","externalAccs":[]}
export function payeeIsRepeat(parameter) {
  return request({
    url: api.payeeIsRepeat,
    method: 'post',
    data: parameter,
    // autoMessage: 'error'
  })
}
export function updatePayee(parameter) {
  return request({
    url: api.updatePayee,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
// {}
export function getLoginMessage(parameter) {
  return request({
    url: api.getLoginMessage,
    method: 'post',
    data: parameter,
    // autoMessage: 'error'
  })
}
export function accountQuota(parameter) {
  return request({
    url: api.accountQuota,
    method: 'post',
    data: parameter,
    // autoMessage: 'error'
  })
}
export function accountQuotaMaintain(parameter) {
  return request({
    url: api.accountQuotaMaintain,
    method: 'post',
    data: parameter,
    // autoMessage: 'error'
  })
}
// export function getBankAcc(parameter) {
//   return request({
//     url: api.getBankAcc,
//     method: 'post',
//     data: parameter,
//     // autoMessage: 'error'
//   })
// }
// export function getPaymentLimit(parameter) {
//   return request({
//     url: api.getPaymentLimit,
//     method: 'post',
//     data: parameter,
//     // autoMessage: 'error'
//   })
// }
export function updateaccountQuota(parameter) {
  return request({
    url: api.updateaccountQuota,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function selectAllBBA(parameter) {
  return request({
    url: api.selectAllBBA,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function selectAllBAW(parameter) {
  return request({
    url: api.selectAllBAW,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function deleteOneBAW(parameter) {
  return request({
    url: api.deleteOneBAW,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function deleteBAW(parameter) {
  return request({
    url: api.deleteBAW,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function queryUserlog(parameter) {
  return request({
    url: api.queryUserlog,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function bankCategory(parameter) {
  return request({
    url: api.bankCategory,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getBankTypeName(parameter) {
  return request({
    url: api.getBankTypeName,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function selectBankName(parameter) {
  return request({
    url: api.selectBankName,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function addPayee(parameter) {
  return request({
    url: api.addPayee,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function getAuthCorpTree(parameter) {
  return request({
    url: api.getAuthCorpTree,
    method: 'post',
    data: parameter
  })
}
export function batchImportPayeeManage(parameter) {
  return request({
    url: api.batchImportPayeeManage,
    method: 'post',
    data: parameter
  })
}
export function checkPayeeList(parameter) {
  return request({
    url: api.checkPayeeList,
    method: 'post',
    data: parameter
  })
}
export function checkBwBankAcc(parameter) {
  return request({
    url: api.checkBwBankAcc,
    method: 'post',
    data: parameter
  })
}
export function addBatchBaw(parameter) {
  return request({
    url: api.addBatchBaw,
    method: 'post',
    data: parameter
  })
}
export function checkBwBankAccList(parameter) {
  return request({
    url: api.checkBwBankAccList,
    method: 'post',
    data: parameter
  })
}
export function getAccLimitInfo(parameter) {
  return request({
    url: api.getAccLimitInfo,
    method: 'post',
    data: parameter
  })
}


export function dataCheck(parameter) {
  return request({
    url: api.dataCheck,
    method: 'post',
    data: parameter
  })
}

export function updateLimit(parameter) {
  return request({
    url: api.updateLimit,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function bankInfoManageList(parameter) {
  return request({
    url: api.bankInfoManageList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function batchImportBankInfoManage(parameter) {
  return request({
    url: api.batchImportBankInfoManage,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}

export function getProvinceList(parameter) {
  return request({
    url: api.getProvinceList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getCityList(parameter) {
  return request({
    url: api.getCityList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getCorpIdsPowerByUserId(parameter) {
  return request({
    url: api.getCorpIdsPowerByUserId,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function getMenuTreeByGroupId(parameter) {
  return request({
    url: api.getMenuTreeByGroupId,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getMenuIdsPowerByParams(parameter) {
  return request({
    url: api.getMenuIdsPowerByParams,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function corpManageCorpTreeList(parameter) {
  return request({
    url: api.corpManageCorpTreeList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getCertList(parameter) {
  return request({
    url: api.getCertList,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function addChildCorp(parameter) {
  return request({
    url: api.addChildCorp,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function updCorpById(parameter) {
  return request({
    url: api.updCorpById,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function getCorpInfoByCorpId(parameter) {
  return request({
    url: api.getCorpInfoByCorpId,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function delCorp(parameter) {
  return request({
    url: api.delCorp,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function batchUserAssignCorpMenu(parameter) {
  return request({
    url: api.batchUserAssignCorpMenu,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function batchCopySpecialPower(parameter) {
  return request({
    url: api.batchCopySpecialPower,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function delUserById(parameter) {
  return request({
    url: api.delUserById,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}

//查询设置账户权限的账号（查询和操作权限）
export function getGrantBankAcc(parameter) {
  return request({
    url: api.getGrantBankAcc,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function checkCorpIsExist(parameter) {
  return request({
    url: api.checkCorpIsExist,
    method: 'post',
    data: parameter,
  })
}
export function checkUserIsExist(parameter) {
  return request({
    url: api.checkUserIsExist,
    method: 'post',
    data: parameter
  })
}

export function checkRoleNameIsExist(parameter) {
  return request({
    url: api.checkRoleNameIsExist,
    method: 'post',
    data: parameter
  })
}
export function updCurrentUserPwd(parameter) {
  return request({
    url: api.updCurrentUserPwd,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}

