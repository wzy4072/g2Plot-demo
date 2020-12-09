import request from '@/utils/request'
const fundtransfer = request.bytterRouter.fundtransfer

const api = {
  getBankAccTree: fundtransfer + '/fundtransfer/fundPoolRel/getBankAccTree',
  addFundPoolRel: fundtransfer + '/fundtransfer/fundPoolRel/addAccountRelationship',
  delRelation: fundtransfer + '/fundtransfer/fundPoolRel/delRelation',
  getFundPoolRelApprover: fundtransfer + '/fundtransfer/fundPoolRel/getFundPoolRelApprover',
  getVerifyBankAcc: fundtransfer + '/fundtransfer/fundPoolRel/getVerifyBankAcc',
  saveCommentfundPool: fundtransfer + '/fundtransfer/fundPoolRel/saveComment',
  gatherPolicylist: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/gatherPolicylist',
  getBisGatherPolicy: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/getBisGatherPolicy',
  getBisGatherPolicyByIdno: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/getBisGatherPolicyByIdno',
  bisgatherpolicyUpdateName: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/updateName',
  getBankAccDetail: fundtransfer + '/fundtransfer/fundPoolRel/getBankAccDetail',
  startPoolById: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/startPoolById',
  deletePoolById: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/deletePoolById',
  listTreeData: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/listTreeData',
  isAlAccIn: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/isAlAccIn',
  bisgatherpolicySave: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/save',
  nisAllocationReqList: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/list',
  nisAllocationReqGetList: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getList',
  getAuthBankAccAl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getAuthBankAccAl',
  getApproveList: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/getApproveList',
  getFinishedList: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/getFinishedList',
  getTrackList: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/getTrackList',
  nisAllocationReqDetail: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/check',
  getBankAccByAccAl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getBankAccByAccAl',
  saveComment: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/saveComment',
  isApproveOperation: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/isApproveOperation',
  bisgatherpolicyIsAmount: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/isAmount',
  getAuthBankAccCl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getAuthBankAccCl',
  getBankAccByAccCl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getBankAccByAccCl',
  bisgatherpolicyDel: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/delete',
  saveLimit: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/saveLimit',
  bisgatherpolicyUpdate: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/update',

  //手动下拨

  cashConcentration: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/cashConcentration',
  getApproveListAl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getApproveListAl',
  getFinishedListAl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getFinishedListAl',
  getTrackListAl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getTrackListAl',
  nisAllocationReqCheckAl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/checkAl',
  manualCollectionModify: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/check',
  manualSaveComment: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/saveComment',

  //手动归集
  getApproveListCl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getApproveListCl',
  getFinishedListCl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getFinishedListCl',
  getTrackListCl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/getTrackListCl',
  bisgatherpolicyApproveDetails: fundtransfer + '/fundtransfer/allocation/bisgatherpolicy/approveDetails',
  nisAllocationReqCheckCl: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/checkCl',
  nisAllocationReqUpdate: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/update',
  deleteBill: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/deleteBill',
  //  deleteBill: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/check',

  //保存备注
  accountheadUpdate: fundtransfer + '/fundtransfer/allocation/nisAllocationReq/approveDetails',

}

export default api
// 查询资金关系维护
export function getBankAccTree(parameter) {
  return request({
    url: api.getBankAccTree,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
// 添加资金关系维护
export function addFundPoolRel(parameter) {
  return request({
    url: api.addFundPoolRel,
    method: 'post',
    data: parameter,
    timeout: 20000,
    autoMessage: 'auto'
  })
}

// 解除资金池关系
export function delRelation(parameter) {
  return request({
    url: api.delRelation,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}

// 获取资金池关系管理审批列表
export function getFundPoolRelApprover(parameter) {
  return request({
    url: api.getFundPoolRelApprover,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

// 获取没有添加金池关系的账号
export function getVerifyBankAcc(parameter) {
  return request({
    url: api.getVerifyBankAcc,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}


// 保存资金池关系审批意见
export function saveCommentfundPool(parameter){
  return request({
    url: api.saveCommentfundPool,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}


//  查询账号详情
export function getBankAccDetail(parameter) {
  return request({
    url: api.getBankAccDetail,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}


export function gatherPolicylist(parameter) {
  return request({
    url: api.gatherPolicylist,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getBisGatherPolicy(parameter) {
  return request({
    url: api.getBisGatherPolicy,
    params: parameter,
    autoMessage: 'error'
    // method: 'post',
    // data: parameter
  })
}
export function getBisGatherPolicyByIdno(parameter) {
  return request({
    url: api.getBisGatherPolicyByIdno,
    params: parameter,
    autoMessage: 'error'
    // method: 'post',
    // data: parameter
  })
}
export function bisgatherpolicyUpdateName(parameter) {
  return request({
    url: api.bisgatherpolicyUpdateName,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function isAlAccIn(parameter) {
  return request({
    url: api.isAlAccIn,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function bisgatherpolicySave(parameter) {
  return request({
    url: api.bisgatherpolicySave,
    autoMessage: 'error',
    method: 'post',
    data: parameter,
    timeout: 20000,
  })
}
export function startPoolById(parameter) {
  return request({
    url: api.startPoolById,
    // method: 'post',
    autoMessage: 'auto',
    params: parameter
  })
}
export function deletePoolById(parameter) {
  return request({
    url: api.deletePoolById,
    // method: 'post',
    autoMessage: 'auto',
    params: parameter
  })
}
export function listTreeData(parameter) {
  return request({
    url: api.listTreeData,
    // method: 'post',
    autoMessage: 'error',
    params: parameter
  })
}

export function nisAllocationReqList(parameter) {
  return request({
    url: api.nisAllocationReqList,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function getAuthBankAccAl(parameter) {
  return request({
    url: api.getAuthBankAccAl,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}

export function nisAllocationReqGetList(parameter) {
  return request({
    url: api.nisAllocationReqGetList,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function getApproveList(parameter) {
  return request({
    url: api.getApproveList,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function getFinishedList(parameter) {
  return request({
    url: api.getFinishedList,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function getTrackList(parameter) {
  return request({
    url: api.getTrackList,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function nisAllocationReqDetail(parameter) {
  return request({
    url: api.nisAllocationReqDetail,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}

//  手动下拨新增保存
export function cashConcentration(parameter) {
  return request({
    url: api.cashConcentration,
    autoMessage: 'auto',
    method: 'post',
    timeout: 20000,
    data: parameter
  })
}
// 手动下拨修改保存
export function nisAllocationReqUpdate(parameter) {
  return request({
    url: api.nisAllocationReqUpdate,
    autoMessage: 'auto',
    method: 'post',
    data: parameter
  })
}
export function getBankAccByAccAl(parameter) {
  return request({
    url: api.getBankAccByAccAl,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function saveComment(parameter) {
  return request({
    url: api.saveComment,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function getAuthBankAccCl(parameter) {
  return request({
    url: api.getAuthBankAccCl,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function getBankAccByAccCl(parameter) {
  return request({
    url: api.getBankAccByAccCl,
    autoMessage: 'error',
    method: 'post',
    data: parameter
  })
}
export function isApproveOperation(parameter) {
  return request({
    url: api.isApproveOperation,
    params: parameter
  })
}
export function bisgatherpolicyIsAmount(parameter) {
  return request({
    url: api.bisgatherpolicyIsAmount,
    params: parameter
  })
}
export function bisgatherpolicyApproveDetails(parameter) {
  return request({
    url: api.bisgatherpolicyApproveDetails,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function nisAllocationReqCheckCl(parameter) {
  return request({
    url: api.nisAllocationReqCheckCl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getApproveListAl(parameter) {
  return request({
    url: api.getApproveListAl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getFinishedListAl(parameter) {
  return request({
    url: api.getFinishedListAl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getTrackListAl(parameter) {
  return request({
    url: api.getTrackListAl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getApproveListCl(parameter) {
  return request({
    url: api.getApproveListCl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getFinishedListCl(parameter) {
  return request({
    url: api.getFinishedListCl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getTrackListCl(parameter) {
  return request({
    url: api.getTrackListCl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
// export function approveDetails(parameter) {
//     return request({
//       url: api.approveDetails,
//       autoMessage: 'auto',
//       params: parameter
//     })
// }
export function accountheadUpdate(parameter) {
  return request({
    url: api.accountheadUpdate,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function nisAllocationReqCheckAl(parameter) {
  return request({
    url: api.nisAllocationReqCheckAl,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function deleteBill(parameter) {
  return request({
    url: api.deleteBill,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}


export function manualCollectionModify(parameter) {
  return request({
    url: api.manualCollectionModify,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function bisgatherpolicyDel(parameter) {
  return request({
    url: api.bisgatherpolicyDel,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function saveLimit(parameter) {
  return request({
    url: api.saveLimit,
    method: 'post',
    data: parameter,
    timeout: 20000,
    autoMessage: 'auto'
  })
}
export function bisgatherpolicyUpdate(parameter) {
  return request({
    url: api.bisgatherpolicyUpdate,
    method: 'post',
    data: parameter,
    timeout: 20000,
    autoMessage: 'auto'
  })
}

export function manualSaveComment(parameter) {
  return request({
    url: api.manualSaveComment,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })

}

