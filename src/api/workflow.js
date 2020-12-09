import request from '@/utils/request'
const workflow = request.bytterRouter.workflow

const api = {
  todoPage: workflow + '/workflow/bpm/my/todoPage',
  finishedPage: workflow + '/workflow/bpm/my/finishedPage',
  finishedNumber: workflow + '/workflow/bpm/my/finishedNumber',
  trackPage: workflow + '/workflow/bpm/my/trackPage',
  getFlowTree: workflow + '/workflow/bpm/query/getFlowTree',
  getFlowConfiguration: workflow + '/workflow/bpm/query/getFlowConfiguration',
  bpmVerify: workflow + '/workflow/bpm/verify',
  bpmDeploy: workflow + '/workflow/bpm/deploy',
  getRevokableStatus: workflow + '/workflow/bpm/query/getRevokableStatus',
  bpmUpdate: workflow + '/workflow/bpm/update',
  getCorpTree: workflow + '/workflow/bpm/query/getCorpTree',
  bpmCopy: workflow + '/workflow/bpm/copy',
  getCategoryTree: workflow + '/workflow/bpm/query/getCategoryTree',
  copyCrossCategory: workflow + '/workflow/bpm/copyCrossCategory',
  bpmDelete: workflow + '/workflow/bpm/delete',
  bpmAddModel: workflow + '/workflow/bpm/addModel',
  taskComplete: workflow + '/workflow/bpm/task/complete',
  getDetailPage: workflow + '/workflow/bpm/my/detailPage',
  readResource: workflow + '/workflow/bpm/processInstance/trace',
  batchRevoke: workflow + '/workflow/bpm/task/batchRevoke'
}

export default api

export function todoPage(parameter) {
  return request({
    url: api.todoPage,
    method: 'post',
    data: parameter,
    needToken: true,
    timeout: 20000,
    autoMessage: 'error'
  })
}
export function finishedPage(parameter) {
  return request({
    url: api.finishedPage,
    method: 'post',
    data: parameter,
    needToken: true,
    autoMessage: 'error'
  })
}
export function finishedNumber(parameter) {
  return request({
    url: api.finishedNumber,
    method: 'post',
    data: parameter,
    needToken: true,
    autoMessage: 'error'
  })
}
export function trackPage(parameter) {
  return request({
    url: api.trackPage,
    method: 'post',
    data: parameter,
    needToken: true,
    autoMessage: 'error'
  })
}
export function getFlowTree(parameter) {
  return request({
    url: api.getFlowTree,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function getFlowConfiguration(parameter) {
  return request({
    url: api.getFlowConfiguration,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}
export function bpmVerify(parameter) {
  return request({
    url: api.bpmVerify,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}
export function bpmDeploy(parameter) {
  return request({
    url: api.bpmDeploy,
    method: 'post',
    data: parameter,
    autoMessage: 'auto'
  })
}
export function getRevokableStatus(parameter) {
  return request({
    url: api.getRevokableStatus,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}
export function bpmUpdate(parameter) {
  return request({
    url: api.bpmUpdate,
    method: 'post',
    data: parameter,

    autoMessage: 'error'
  })
}
export function getCorpTree(parameter) {
  return request({
    url: api.getCorpTree,
    method: 'post',
    data: parameter,
    // 
    autoMessage: 'error'
  })
}
export function bpmCopy(parameter) {
  return request({
    url: api.bpmCopy,
    method: 'post',
    data: parameter,

    autoMessage: 'auto'
  })
}
export function getCategoryTree(parameter) {
  return request({
    url: api.getCategoryTree,
    method: 'post',
    data: parameter,
    // 
    autoMessage: 'error'
  })
}
//  流程复制保存（业务流程）
export function copyCrossCategory(parameter) {
  return request({
    url: api.copyCrossCategory,
    method: 'post',
    data: parameter,
    // 
    autoMessage: 'auto'
  })
}
export function bpmDelete(parameter) {
  return request({
    url: api.bpmDelete,
    method: 'post',
    data: parameter,

    autoMessage: 'auto'
  })
}
export function bpmAddModel(parameter) {
  return request({
    url: api.bpmAddModel,
    method: 'post',
    data: parameter,

    autoMessage: 'auto'
  })
}

export function taskComplete(parameter) {
  return request({
    url: api.taskComplete,
    method: 'post',
    data: parameter,
    timeout:50000,
    autoMessage: 'auto'
  })
}

export function getDetailPage(parameter) {
  return request({
    url: api.getDetailPage,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function readResource(parameter) {
  return request({
    url: api.readResource,
    method: 'post',
    data: parameter,
    autoMessage: 'error'
  })
}

export function batchRevoke(parameter) {
  return request({
    url: api.batchRevoke,
    method: 'post',
    params: parameter,
    autoMessage: 'error'
  })
}