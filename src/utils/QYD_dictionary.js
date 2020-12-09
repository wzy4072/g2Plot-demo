function getLabelMapByOptions(list) {
  if (!list || list.length === 0) return {}
  const labelMap = {}
  list.map(opt => {
    labelMap[opt.value] = opt.label
  })
  return labelMap
}

// 审核状态通用
export const auditState_opt = [
    { value: -1, label: '打回' },
    { value: 11, label: '待审批' },
    { value: 95, label: '审批通过' }
]

// 预算
export const status_opt = [
  { value: -2, label: '未编制' },
  { value: -1, label: '打回' },
  { value: 0, label: '录入' },
  { value: 11, label: '待审批' },
  { value: 80, label: '待汇总' },
  { value: 81, label: '汇总中' },
  { value: 82, label: '汇总审批中' },
  { value: 83, label: '汇总审批打回' },
  { value: 84, label: '汇总审批通过待汇总' },
  { value: 95, label: '审批通过' },
]

// 用户管理 用户状态
export const userSts_opt = [
  { value: 'N', label: '正常' },
  { value: 'S', label: '禁用' },
  { value: 'L', label: '锁定' },
]

// 单位管理 状态
export const corpSts_opt = [
  { value: 0, label: '禁用' },
  { value: 1, label: '启用' },
]

// 日志类型
export const operatetype_opt = [
  { value: '0', label: '其他' },
  { value: '1', label: '登陆' },
  { value: '2', label: '退出' },
  { value: '3', label: '插入' },
  { value: '4', label: '删除' },
  { value: '5', label: '更新' },
  { value: '6', label: '上传' },
  { value: '7', label: '查询' },
  { value: '8', label: '批量删除' },
  { value: '9', label: '复制' },
  { value: '10', label: '打印' },
  { value: '11', label: '批量同意' },
  { value: '12', label: '批量不同意' },
  { value: '13', label: '同意' },
  { value: '14', label: '不同意' },
  { value: '15', label: '批量发送' },
  { value: '16', label: '批量打回' },
  { value: '17', label: '发送' },
  { value: '18', label: '打回' },
  { value: '19', label: '批量申请' },
  { value: '20', label: '批量成功' },
  { value: '21', label: '导入' },
  { value: '22', label: '发布' },
  { value: '23', label: '批量提交' }
]

//证件类型
export const idType_opt = [
  { value: '101', label: '居民身份证' },
  { value: '102', label: '户口簿' },
  { value: '103', label: '外国护照' },
  { value: '105', label: '军人军官证' },
  { value: '106', label: '军人士兵证' },
  { value: '107', label: '武警军官证' },
  { value: '108', label: '港澳居民往来内地通行证（香港）' },
  { value: '109', label: '台湾居民往来大陆通行证' },
  { value: '110', label: '临时居民身份证' },
  { value: '111', label: '外国人永久居留证' },
  { value: '112', label: '中国护照' },
  { value: '113', label: '武警士兵证' },
  { value: '114', label: '港澳居民往来内地通行证（澳门）' }
]

// 支付页面 voucherStat 使用
export const voucherStat_opt = [
  { value: '0', label: '交易成功' },
  { value: '1', label: '等待结果' },
  { value: '2', label: '银行处理失败' },
  { value: '3', label: '准备发送' },
  { value: '6', label: '待发送' },
  { value: '7', label: '指令无效' },
  { value: '9', label: '接口处理失败' },
  { value: 'W', label: '待审批' },
  { value: 'R', label: '审批打回' },
  { value: 'p', label: '审批通过' },
  { value: 'B', label: '指令退回' },
  { value: 'D', label: '指令删除' },
  { value: '8', label: '已打印支票' },
  { value: 'F', label: '指令已提取' },
  { value: 'S', label: '指令发送队列成功' },
  { value: 'E', label: '指令发送队列失败' },
  // { value: 'W', label: '指令已消费' },
  { value: 'A', label: '落地待审核' },
  { value: 'C', label: '待查证' }
]

//是否对私
export const isForindividual_opt = [
    { value: '0', label: '对公' },
    { value: '1', label: '对私' },
  ]

// 跨行标志
export const difBank_opt = [
  { value: '0', label: '同行' },
  { value: '1', label: '跨行' },
]

export const payType_opt = [
  { value: '0', label: '普通付款' },
  { value: '1', label: '联动支付' },
]

export const billFrom_opt = [
  { value: '1', label: '单笔付款制单' },
  { value: '2', label: '批量付款 付款单导入' },
  { value: '3', label: '周期性付款' },
]

export const billFromType_opt = [
  { value: '0', label: '费用报销' },
  { value: '1', label: '支付结算' },
  { value: '2', label: 'ERP系统' },
]

export const gatherType_opt = [
  { value: '0', label: '定时归集' },
  { value: '1', label: '实时归集' },
  { value: '2', label: '定时下拨' },
]

export const payStrategyType_opt = [
  { value: '1', label: '以收定支' },
  { value: '2', label: '统收统支' },
  { value: '3', label: '以收定支（当月有效）' },
  { value: '4', label: '超额透支' }
]

export const approveFlg_opt = [
  { value: '1', label: '删除策略' },
  { value: '2', label: '修改策略' },
  { value: '3', label: '新增策略' },
  { value: '4', label: '限额设置' }
]

export const accountCheck_opt = [
  { value: 0, label: '暂存' },
  { value: -1, label: '打回' },
  { value: -2, label: '删除' },
  { value: 11, label: '待审批' },
  { value: 95, label: '审批通过' },
  { value: 100, label: '办理完成' },
  { value: 101, label: '补录完成' },
]

// 只用于账户查询列表
export const accountStatus_opt = [
  { value: "1-1-1-0-11", label: '账户申请待审核' },
  { value: "1-1-1-100-95", label: '账号信息待补录' },
  { value: "1-1-1-100--1", label: '账户申请未通过' },
  { value: "1-1-1-101-95", label: '正常' },
  { value: "1-1-1-101-11", label: '账户注销待审核' },
  { value: "1-1-0-101-95", label: '账户已注销' },
  { value: "1-1-1-101--1", label: '正常' },
  { value: "0-1-1-101-95", label: '账户已停用' },
  { value: "1-0-1-101-95", label: '账户已冻结' },
]

export const gatherMode_opt1 = [
  { value: '1', label: '全额归集' },
  { value: '2', label: '固定金额归集' },
  { value: '3', label: '留底金额' },
  { value: '4', label: '按比例' },
  { value: '5', label: '取整归集' }
]
export const gatherMode_opt2 = [
  { value: '1', label: '固定余额' },
  { value: '2', label: '固定额度' },
  { value: '3', label: '反向归集' },
  { value: '4', label: '余额不足时固定额度下拨' },
  { value: '5', label: '比例下拨（交易额）' }
]

// 操作状态 用户状态 归集关系维护审批
export const collectionRelationApproverSts_opt = [
  { value: '11', label: '新增' },
  { value: '95', label: '删除' },
]

export const moneyUnit_opt = [
  { value: '1', label: '元' },
  { value: '2', label: '十元' },
  { value: '3', label: '百元' },
  { value: '4', label: '千元' },
  { value: '5', label: '万元' },
  { value: '6', label: '十万元' },
  { value: '7', label: '百万元' },
  { value: '8', label: '千万元' },
]
export const weekDay_opt = [
  { value: 2, label: "星期一" },
  { value: 3, label: "星期二" },
  { value: 4, label: "星期三" },
  { value: 5, label: "星期四" },
  { value: 6, label: "星期五" },
  { value: 7, label: "星期六" },
  { value: 1, label: "星期天" }]
export const limitPeriod_opt = [
  { value: '1', label: '每日' },
  { value: '2', label: '每周' },
  { value: '3', label: '每月' },
  { value: '4', label: '月末' },
  { value: '5', label: '季初' },
  { value: '6', label: '季中' },
  { value: '7', label: '季末' },
  { value: '8', label: '无频率周期' }]

export const auditState_lab = getLabelMapByOptions(auditState_opt)
export const status_lab = getLabelMapByOptions(status_opt)
export const userSts_lab = getLabelMapByOptions(userSts_opt)
export const operatetype_lab = getLabelMapByOptions(operatetype_opt)
export const idtype_lab = getLabelMapByOptions(idType_opt)
export const voucherStat_lab = getLabelMapByOptions(voucherStat_opt)
export const isForindividual_lab = getLabelMapByOptions(isForindividual_opt)
export const difBank_lab = getLabelMapByOptions(difBank_opt)
export const billFrom_lab = getLabelMapByOptions(billFrom_opt)
export const billFromType_lab = getLabelMapByOptions(billFromType_opt)
export const payType_lab = getLabelMapByOptions(payType_opt)
export const gatherType_lab = getLabelMapByOptions(gatherType_opt)
export const payStrategyType_lab = getLabelMapByOptions(payStrategyType_opt)
export const approveFlg_lab = getLabelMapByOptions(approveFlg_opt)
export const accountCheck_lab = getLabelMapByOptions(accountCheck_opt)
export const accountStatus_lab = getLabelMapByOptions(accountStatus_opt)
export const gatherMode_lab1 = getLabelMapByOptions(gatherMode_opt1)
export const gatherMode_lab2 = getLabelMapByOptions(gatherMode_opt2)
export const collectionRelationApproverSts_lab = getLabelMapByOptions(collectionRelationApproverSts_opt)
export const moneyUnit_lab = getLabelMapByOptions(moneyUnit_opt)
export const weekDay_lab = getLabelMapByOptions(weekDay_opt)
export const limitPeriod_lab = getLabelMapByOptions(limitPeriod_opt)
export const corpSts_lab = getLabelMapByOptions(corpSts_opt)

