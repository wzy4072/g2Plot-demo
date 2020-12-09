### 基础管理/ 流程管理/ 流程审核/ 待办事项

```js
// url :/workflow/workflow/bpm/my/todoPage
// req: access_token   Form Data
// res: {"status":0,"code":"0","msg":"操作成功","data":{"code":0,"categoryList":[{"id":"d33511b1c4a04a8db97114ead3a09da8","parentId":null,"name":"资金预算","type":"1","key":"budget_fundingBudget","url":null,"sort":5,"furl":null,"turl":null,"children":[{"id":"7413117ac91645a5b7464761dd60b7d9","parentId":"d33511b1c4a04a8db97114ead3a09da8","name":"资金预算上报汇总","type":"1","key":"budget_fundBudgetSummary","url":"/budget/budgetAprove/budgetReportSummary/budgetReportSummaryApproveQuery","sort":11,"furl":"/budget/budgetAprove/budgetReportSummary/budgetReportSummaryFinishedQuery","turl":"/budget/budgetAprove/budgetReportSummary/budgetReportSummaryTrackQuery","children":[],"mustApprove":"1"},{"id":"9e837f85fa1948cabf58af9038f5d6ac","parentId":"d33511b1c4a04a8db97114ead3a09da8","name":"资金预算追加汇总","type":"1","key":"budget_fundBudgetSuperaddSummary","url":"/budget/budgetAprove/budgetSuperaddSummary/budgetSuperaddSummaryApproveQuery","sort":13,"furl":"/budget/budgetAprove/budgetSuperaddSummary/budgetSuperaddSummaryFinishedQuery","turl":"/budget/budgetAprove/budgetSuperaddSummary/budgetSuperaddSummaryTrackQuery","children":[],"mustApprove":"1"}],"mustApprove":"0"},{"id":"c89ea2982ac24d48b39de0ee48c43e3e","parentId":null,"name":"集团内部借款","type":"1","key":"creditLoans_intra-familyLoan","url":null,"sort":8,"furl":null,"turl":null,"children":[{"id":"116a703832ff45da9f78c6fd410344e3","parentId":"c89ea2982ac24d48b39de0ee48c43e3e","name":"提前手动还款","type":"1","key":"creditLoans_manualRepaymentInAdvance","url":"/creditLoans/approving/payAdvanceApproveQuery","sort":12,"furl":"/creditLoans/approving/payVanceSysFinishedQuery","turl":"/creditLoans/approving/payVanceTrackQuery","children":[],"mustApprove":"1"}],"mustApprove":"0"},{"id":"c89ea2982ac24d48b39de0ee48c09875","parentId":null,"name":"投资管理","type":"1","key":"investment_investment","url":null,"sort":9,"furl":null,"turl":null,"children":[{"id":"3199c8e0b797414681e71099a6456666","parentId":"c89ea2982ac24d48b39de0ee48c09875","name":"大额存单","type":"1","key":"investment_largeAmtBill","url":"/investment/accountManagementApproving/largeDepositReceipt/largeAmtBillApproveQuery","sort":12,"furl":"/investment/accountManagementApproving/largeDepositReceipt/largeAmtBillFinishedQuery","turl":"/investment/accountManagementApproving/largeDepositReceipt/largeAmtBillTrackQuery","children":[],"mustApprove":"1"}],"mustApprove":"0"},{"id":"b32cbaf803fc4a89b9d79b58b334c0aa","parentId":null,"name":"流动性管理","type":"1","key":"fundTransfer_liquidityManagement","url":null,"sort":3,"furl":null,"turl":null,"children":[{"id":"ce6b204b3f59427b9c77b44408e399b4","parentId":"526151c2a0204328b8a4fa5fe543bcb4","name":"附属账户对外转账","type":"1","key":"fundTransfer_virtualAccountTransfers","url":"/fundTransfer/fundPoolApproving/virtualAccTransferReqOut/virtualAccTransferReqOutApproveQuery","sort":6,"furl":"/fundTransfer/fundPoolApproving/virtualAccTransferReqOut/virtualAccTransferReqOutFinishedQuery","turl":"/fundTransfer/fundPoolApproving/virtualAccTransferReqOut/virtualAccTransferReqOutTrackQuery","children":[],"mustApprove":"1"},{"id":"e01cfab1cf9a47fcac9eeb99516c4c82","parentId":"526151c2a0204328b8a4fa5fe543bcb4","name":"附属账户手动计息结息","type":"1","key":"fundTransfer_virtualAccountBalancesManually","url":"/fundTransfer/fundPoolApproving/virtualAccInterest/virtualAccInterestApproveQuery","sort":8,"furl":"/fundTransfer/fundPoolApproving/virtualAccInterest/virtualAccInterestFinishedQuery","turl":"/fundTransfer/fundPoolApproving/virtualAccInterest/virtualAccInterestTrackQuery","children":[],"mustApprove":"1"},{"id":"a7662457cf014091ba3f55e267590003","parentId":"526151c2a0204328b8a4fa5fe543bcb4","name":"附属账户维护控制/解控/注销","type":"1","key":"fundTransfer_virtualaccmaintainUptadestatus","url":"/fundTransfer/fundPoolApproving/virtualAccMaintainUpdateStatus/maintainUpdateStatusApproveQuery","sort":10,"furl":"/fundTransfer/fundPoolApproving/virtualAccMaintainUpdateStatus/maintainUpdateStatusFinishedQuery","turl":"/fundTransfer/fundPoolApproving/virtualAccMaintainUpdateStatus/maintainUpdateStatusTrackQuery","children":[],"mustApprove":"1"},{"id":"434fa7cb893043bd8d42ad9226eb7b1c","parentId":"526151c2a0204328b8a4fa5fe543bcb4","name":"附属账户维护修改","type":"1","key":"fundTransfer_virtualAccMaintainUpdate","url":"/fundTransfer/fundPoolApproving/virtualAccMaintainUpdate/virtualAccMaintainUpdateApproveQuery","sort":12,"furl":"/fundTransfer/fundPoolApproving/virtualAccMaintainUpdate/virtualAccMaintainUpdateFinishedQuery","turl":"/fundTransfer/fundPoolApproving/virtualAccMaintainUpdate/virtualAccMaintainUpdateTrackQuery","children":[],"mustApprove":"1"},{"id":"c6220ae2624d4b57992ba1f781b3b566","parentId":"526151c2a0204328b8a4fa5fe543bcb4","name":"附属账户开户","type":"1","key":"fundTransfer_virtualAccOpenAccApprove","url":"/fundTransfer/fundPoolApproving/virtualAccOpenAccApprove/virtualAccOpenAccApproveQuery","sort":13,"furl":"/fundTransfer/fundPoolApproving/virtualAccOpenAccApprove/virtualAccOpenAccApproveFinishedQuery","turl":"/fundTransfer/fundPoolApproving/virtualAccOpenAccApprove/virtualAccOpenAccApproveTrackQuery","children":[],"mustApprove":"1"},{"id":"hu2bpqje2kz3w3pu0zki5pln57dqokzi","parentId":"526151c2a0204328b8a4fa5fe543bcb4","name":"附属账户间转账","type":"1","key":"fundTransfer_transferBetweenVirtualAccounts","url":"/fundTransfer/fundPoolApproving/accInfoTransfer/accInfoTransferApproveQuery","sort":14,"furl":"/fundTransfer/fundPoolApproving/accInfoTransfer/accInfoTransferFinishedQuery","turl":"/fundTransfer/fundPoolApproving/accInfoTransfer/accInfoTransferTrackQuery","children":[],"mustApprove":"1"}],"mustApprove":"0"},{"id":"71d590b8a6d843e78681b34dd19bf866","parentId":null,"name":"支付结算","type":"1","key":"netBank_netbankPay","url":null,"sort":2,"furl":null,"turl":null,"children":[{"id":"61c54b909dda4f2b8101866e42a0ae49","parentId":"20fe48f8304c4b1780db475e98243a94","name":"单笔付款","type":"1","key":"netBank_singlePayment","url":"/netbank/netBankApproving/nisbillhead/payBillApproveQuery","sort":2,"furl":"/netbank/netBankApproving/nisbillhead/payBillFinishedQuery","turl":"/netbank/netBankApproving/nisbillhead/payBillTrackQuery","children":[],"mustApprove":"1"},{"id":"72d23d7d89bf4814a12d981aac8f2b4d","parentId":"71ac38082031488c9bb8b96478c43427","name":"工资代发录入","type":"1","key":"netBank_payrollAgencyInput","url":"/netbank/netBankApproving/wage/wageApproveQuery","sort":3,"furl":"/netbank/netBankApproving/wage/wageFinishedQuery","turl":"/netbank/netBankApproving/wage/wageTrackQuery","children":[],"mustApprove":"1"},{"id":"a8b4131a6011442db328f7afdfa98a7d","parentId":"b0bbc5f2ab134a42ad7191fc64b972b8","name":"费用代发录入","type":"1","key":"netBank_inputFeePayrollCredit","url":"/netbank/netBankApproving/wagePay/wagePayApproveQuery","sort":4,"furl":"/netbank/netBankApproving/wagePay/wagePayFinishedQuery","turl":"/netbank/netBankApproving/wagePay/wagePayTrackQuery","children":[],"mustApprove":"1"},{"id":"537eebe731474ebaa2c76977b0a338b3","parentId":"20fe48f8304c4b1780db475e98243a94","name":"周期性付款","type":"1","key":"netBank_periodicPaymentadd","url":"/netbank/netBankApproving/periodPayAdd/payBillApproveQuery","sort":6,"furl":"/netbank/netBankApproving/periodPayAdd/payBillFinishedQuery","turl":"/netbank/netBankApproving/periodPayAdd/payBillTrackQuery","children":[],"mustApprove":"1"}],"mustApprove":"0"},{"id":"acddbd15ee984b52a40641212887a570","parentId":null,"name":"电子票据","type":"1","key":"ebill_electronicBills","url":null,"sort":7,"furl":null,"turl":null,"children":[{"id":"4819d41dce53406a84e4adbf0fe9ff5b","parentId":"e1f9b1aee7af47c1b1b57b9ae6978518","name":"质押解除","type":"1","key":"ebill_pledgeRelieve","url":"/ebill/ebillApplyApprove/pledgeRelieveApproveQuery","sort":15,"furl":"/ebill/ebillApplyApprove/pledgeRelieveFinishedQuery","turl":"/ebill/ebillApplyApprove/pledgeRelieveTrackQuery","children":[],"mustApprove":"1"}],"mustApprove":"0"}],"todoCounts":[{"key":"fundTransfer_virtualAccMaintainUpdate","num":"5"},{"key":"fundTransfer_virtualAccOpenAccApprove","num":"47"},{"key":"fundTransfer_virtualAccMaintainDestroy","num":"1"},{"key":"netBank_periodicPayment","num":"1"},{"key":"creditLoans_manualRepaymentInAdvance","num":"1"},{"key":"netBank_payrollAgencyInput","num":"4"},{"key":"netBank_periodicPaymentupdate","num":"1"},{"key":"fundTransfer_virtualAccountTransfers","num":"15"},{"key":"fundTransfer_virtualAccountBalancesManually","num":"5"},{"key":"fundTransfer_transferBetweenVirtualAccounts","num":"12"},{"key":"budget_fundBudgetSuperaddSummary","num":"3"},{"key":"netBank_singlePayment","num":"1"},{"key":"investment_largeAmtBill","num":"6"},{"key":"netBank_periodicPaymentadd","num":"22"},{"key":"fundTransfer_virtualaccmaintainUptadestatus","num":"3"},{"key":"netBank_inputFeePayrollCredit","num":"10"},{"key":"budget_fundBudgetSummary","num":"9"},{"key":"ebill_pledgeRelieve","num":"1"}]}}


// / 流程管理/ 待办事项/ 预算上报汇总审批查询

// table 查询
url:'/budget/budget/fbsBudgetReportOfYearSummary/approveSelect'
requ:{"currentPage":1,"pageSize":10,"timeType":"1","beginDate":"2020-10-12","endDate":"2020-10-15","menuId":"610cd5f9755542729426a992817a4af7","flowStatus":"todo"}
res: 500
// 下游动作 通过 打回上级 打回制单处


```

### 基础管理/ 流程管理/ 流程审核/ 已办事项

```
url:'/workflow/workflow/bpm/my/finishedPage',
req: access_token Form Data
res: 参照待办事项 // 不展示数字
```

### 基础管理/ 流程管理/ 流程审核/ 流程跟踪

```
url:'/workflow/workflow/bpm/my/trackPage',
req: access_token Form Data
res: 参照待办事项

```

### / 基础管理/ 流程管理/ 流程配置

```
1
url:'/workflow/workflow/bpm/query/getFlowTree',
req:{}
res:{"status":0,"code":"0","msg":"操作成功","data":{"code":0,"data":[{"categoryId":"71d590b8a6d843e78681b34dd19bf866","parentId":null,"title":"支付结算","spread":true,"children":[{"categoryId":"20fe48f8304c4b1780db475e98243a94","parentId":null,"title":"付款管理","spread":true,"children":[{"categoryId":"61c54b909dda4f2b8101866e42a0ae49","parentId":null,"title":"单笔付款","spread":true,"children":[]},{"categoryId":"60f7e39b16a64b60b319ee7b7510a606","parentId":null,"title":"头寸预报申请","spread":true,"children":[]},{"categoryId":"537eebe731474ebaa2c76977b0a338b3","parentId":null,"title":"周期性付款","spread":true,"children":[]},{"categoryId":"5f5431d1c9f64eb6aa2459ba342b7563","parentId":null,"title":"批量付款","spread":true,"children":[]}]},{"categoryId":"71ac38082031488c9bb8b96478c43427","parentId":null,"title":"代发工资管理","spread":true,"children":[{"categoryId":"72d23d7d89bf4814a12d981aac8f2b4d","parentId":null,"title":"工资代发录入","spread":true,"children":[]}]},{"categoryId":"b0bbc5f2ab134a42ad7191fc64b972b8","parentId":null,"title":"费用代发管理","spread":true,"children":[{"categoryId":"a8b4131a6011442db328f7afdfa98a7d","parentId":null,"title":"费用代发录入","spread":true,"children":[]}]}]},{"categoryId":"b32cbaf803fc4a89b9d79b58b334c0aa","parentId":null,"title":"流动性管理","spread":true,"children":[{"categoryId":"526151c2a0204328b8a4fa5fe543bcb4","parentId":null,"title":"虚拟资金池","spread":true,"children":[{"categoryId":"9b5108ccfd714e4bb0c52c8f1d9bcf1a","parentId":null,"title":"附属账户体系建立","spread":true,"children":[]},{"categoryId":"ce6b204b3f59427b9c77b44408e399b4","parentId":null,"title":"附属账户对外转账","spread":true,"children":[]},{"categoryId":"e01cfab1cf9a47fcac9eeb99516c4c82","parentId":null,"title":"附属账户手动计息结息","spread":true,"children":[]},{"categoryId":"a7662457cf014091ba3f55e267590003","parentId":null,"title":"附属账户维护控制/解控/注销","spread":true,"children":[]},{"categoryId":"434fa7cb893043bd8d42ad9226eb7b1c","parentId":null,"title":"附属账户维护修改","spread":true,"children":[]},{"categoryId":"c6220ae2624d4b57992ba1f781b3b566","parentId":null,"title":"附属账户开户","spread":true,"children":[]},{"categoryId":"hu2bpqje2kz3w3pu0zki5pln57dqokzi","parentId":null,"title":"附属账户间转账","spread":true,"children":[]}]},{"categoryId":"6666959daac54f7c828b6f1983e62bbf","parentId":null,"title":"实体资金池","spread":true,"children":[{"categoryId":"956c8eb3c2d74866883685a6c3e6fc01","parentId":null,"title":"手动请款","spread":true,"children":[]},{"categoryId":"3c68020b8d3e4890b1faf11c809ecff1","parentId":null,"title":"手动下拨","spread":true,"children":[]},{"categoryId":"650e73aebf904e53b1a00edf3ab24c6d","parentId":null,"title":"手动上缴","spread":true,"children":[]},{"categoryId":"fdebe741c3114aed9ddbe227d45ae902","parentId":null,"title":"手动归集","spread":true,"children":[]},{"categoryId":"4ac044dbe38a45479366e9448dace150","parentId":null,"title":"手动计结息","spread":true,"children":[]},{"categoryId":"7ce5436e3104486fa986c22e1c195b63","parentId":null,"title":"账户基础信息维护","spread":true,"children":[]},{"categoryId":"87218309e90c4d3b8931c159921c261c","parentId":null,"title":"资金池账号维护","spread":true,"children":[]},{"categoryId":"f051b9fa088342e5900236937f861361","parentId":null,"title":"资金池策略维护","spread":true,"children":[]}]}]},{"categoryId":"d33511b1c4a04a8db97114ead3a09da8","parentId":null,"title":"资金预算","spread":true,"children":[{"categoryId":"33a07b7c829d4a4c8d61971f03db25e2","parentId":null,"title":"资金预算上报","spread":true,"children":[]},{"categoryId":"9850c5a868fa478c8c9b9e6a8aefd191","parentId":null,"title":"资金预算追加","spread":true,"children":[]},{"categoryId":"7413117ac91645a5b7464761dd60b7d9","parentId":null,"title":"资金预算上报汇总","spread":true,"children":[]},{"categoryId":"9e837f85fa1948cabf58af9038f5d6ac","parentId":null,"title":"资金预算追加汇总","spread":true,"children":[]}]},{"categoryId":"e9e1e63bb1184f7d972836639aec2264","parentId":null,"title":"资金预警","spread":true,"children":[{"categoryId":"908b0ce78a624d83ac7292fc56957fc7","parentId":null,"title":"新增预警策略","spread":true,"children":[]}]},{"categoryId":"acddbd15ee984b52a40641212887a570","parentId":null,"title":"电子票据","spread":true,"children":[{"categoryId":"e1f9b1aee7af47c1b1b57b9ae6978518","parentId":null,"title":"电子票据申请","spread":true,"children":[{"categoryId":"3f02dcd83ba4444596309590d6023278","parentId":null,"title":"出票信息登记","spread":true,"children":[]},{"categoryId":"a525f6cca3d047c9abc310d77c139b57","parentId":null,"title":"出票人提示收票","spread":true,"children":[]},{"categoryId":"b25bb77ed50243a8a9cd85b28b7413cb","parentId":null,"title":"出票人提示承兑","spread":true,"children":[]},{"categoryId":"5a7dbc469459401f93b8104e585a1721","parentId":null,"title":"背书转让","spread":true,"children":[]},{"categoryId":"f4c4539264f4431590dc252d02c8dd8f","parentId":null,"title":"保证","spread":true,"children":[]},{"categoryId":"5efe1c5feb194d89a62b72da7f540987","parentId":null,"title":"质押申请","spread":true,"children":[]},{"categoryId":"4819d41dce53406a84e4adbf0fe9ff5b","parentId":null,"title":"质押解除","spread":true,"children":[]},{"categoryId":"c6dde3c299a64b4c9fbdf9a9fa678f2d","parentId":null,"title":"贴现申请","spread":true,"children":[]},{"categoryId":"a2e74ed55b1449518482d8c5dfdb4451","parentId":null,"title":"提示付款","spread":true,"children":[]},{"categoryId":"c4176adcdc244a40bca8dcf2ae3c7fc0","parentId":null,"title":"追索通知","spread":true,"children":[]},{"categoryId":"068dc939266c45d9bfd7a2b4a81d3b26","parentId":null,"title":"同意清偿","spread":true,"children":[]}]},{"categoryId":"2cff3862057f4d75bb82f35cd8926209","parentId":null,"title":"电子票据托管","spread":true,"children":[{"categoryId":"537fcb5f63804098acd9b78668bab8d1","parentId":null,"title":"托管业务申请","spread":true,"children":[]}]},{"categoryId":"3dbf7153e4a141669347b7a3cd57fa81","parentId":null,"title":"电子票据签收","spread":true,"children":[]},{"categoryId":"6044b15be3a7478c9664c378019a0636","parentId":null,"title":"电子票据撤销","spread":true,"children":[]}]},{"categoryId":"c89ea2982ac24d48b39de0ee48c43e3e","parentId":null,"title":"集团内部借款","spread":true,"children":[{"categoryId":"c4e2d8bcdda2451bb3b5eb20579bcbe4","parentId":null,"title":"借款申请","spread":true,"children":[]},{"categoryId":"ce8b23e2c0e64d399c3d8f500f40d157","parentId":null,"title":"借款发放申请","spread":true,"children":[]},{"categoryId":"0212467f18c8454db9ef84273dca807d","parentId":null,"title":"借款展期申请","spread":true,"children":[]},{"categoryId":"0212467f18c84524db9e24273dca807d","parentId":null,"title":"线下还款","spread":true,"children":[]},{"categoryId":"116a703832ff45da9f78c6fd410344e3","parentId":null,"title":"提前手动还款","spread":true,"children":[]}]},{"categoryId":"c89ea2982ac24d48b39de0ee48c09875","parentId":null,"title":"投资管理","spread":true,"children":[{"categoryId":"3199c8e0b797414681e71099a64ce556","parentId":null,"title":"普通存款","spread":true,"children":[{"categoryId":"00fce59e27ab4c0c85c4ed7dab6c4c7d","parentId":null,"title":"定期存款","spread":true,"children":[{"categoryId":"8bc65b0eeb6d459b9da78b42d00f2f24","parentId":null,"title":"活期转定期","spread":true,"children":[]},{"categoryId":"364a88db1e994f818a3fd6a0a3239215","parentId":null,"title":"定期转活期","spread":true,"children":[]}]},{"categoryId":"ae907335fa824bb4a1350542955922f6","parentId":null,"title":"通知存款","spread":true,"children":[{"categoryId":"0f58259a176847ea9029cc33efc70258","parentId":null,"title":"通知转活期","spread":true,"children":[]},{"categoryId":"3e07d725b6e34ba48e47a3b05aa4cbc1","parentId":null,"title":"活期转通知","spread":true,"children":[]}]}]},{"categoryId":"221ea2982ac24d48b39de0ee48c09aaa","parentId":null,"title":"智能存款","spread":true,"children":[{"categoryId":"331ea2982ac24d48b39de0ee48c0321b","parentId":null,"title":"智能存款协议维护","spread":true,"children":[{"categoryId":"661ea2982ac24d48b39de0ee48c0321b","parentId":null,"title":"智能存款协议维护解约","spread":true,"children":[]},{"categoryId":"551ea2982ac24d48b39de0ee48c0321b","parentId":null,"title":"智能存款协议维护修改","spread":true,"children":[]}]},{"categoryId":"221ea2982ac24d48b39de0ee48c0321a","parentId":null,"title":"智能签约申请","spread":true,"children":[]}]},{"categoryId":"3199c8e0b797414681e71099a6456666","parentId":null,"title":"大额存单","spread":true,"children":[]},{"categoryId":"5329c8e0b797414681e71099a6456666","parentId":null,"title":"理财产品","spread":true,"children":[{"categoryId":"317cc6dd4e27401ab26f3c4e6f89213b","parentId":null,"title":"理财产品购买","spread":true,"children":[]},{"categoryId":"20c08b9fa1ac4d91b6fdd8e6442a48d9","parentId":null,"title":"理财产品赎回","spread":true,"children":[]}]}]}]}}

2 table
 url:'/workflow/workflow/bpm/query/getFlowConfiguration',
 req: { access_token: ""
 categoryId: "61c54b909dda4f2b8101866e42a0ae49"
 limit: 10
 page: 1}
 res:{"status":0,"code":"0","msg":"操作成功","data":{"data":[{"pdss":1,"processDefinitionId":"netBank_singlePayment:1:666f6c2c-fe48-11ea-9c69-82f48db500db","modelId":"7052d110-e6c6-11ea-ad0f-82f48db500db","modelVersion":6,"corpName":"贵州赫镇高速公路建设有限公司","modelLastUpdateTime":1600939750169,"processDefinitionDeployTime":1600939749430,"modelName":"单笔付款","modelCreateTime":1598355055061,"tenantId":"6185090b3e684eafa7920157f64883c6","modelDeploymentId":"66387da9-fe48-11ea-9c69-82f48db500db","category":"61c54b909dda4f2b8101866e42a0ae49","processDefinitionVersion":1},{"pdss":null,"processDefinitionId":null,"modelId":"705d5862-e6c6-11ea-ad0f-82f48db500db","modelVersion":2,"corpName":"预算汇总测试","modelLastUpdateTime":1600939738053,"processDefinitionDeployTime":null,"modelName":"单笔付款","modelCreateTime":1598355055130,"tenantId":"9c4961dbb2b24858b5c24c3f6a3e1361","modelDeploymentId":null,"category":"61c54b909dda4f2b8101866e42a0ae49","processDefinitionVersion":null},{"pdss":null,"processDefinitionId":null,"modelId":"55a66516-fe48-11ea-9c69-82f48db500db","modelVersion":1,"corpName":"结算管理测试单位","modelLastUpdateTime":1600939721651,"processDefinitionDeployTime":null,"modelName":"单笔付款","modelCreateTime":1600939721629,"tenantId":"f29bbbac0ffc47f49407c959eb415643","modelDeploymentId":null,"category":"61c54b909dda4f2b8101866e42a0ae49","processDefinitionVersion":null},{"pdss":1,"processDefinitionId":"netBank_singlePayment:2:7b393897-f987-11ea-8931-82f48db500db","modelId":"5238b848-f812-11ea-89bb-82f48db500db","modelVersion":2,"corpName":"贵州交建投资有限公司","modelLastUpdateTime":1600417087584,"processDefinitionDeployTime":1600417086435,"modelName":"单笔付款","modelCreateTime":1600256816077,"tenantId":"35d3b5444ce248e3a06bb3851c5b75ec","modelDeploymentId":"7accbb24-f987-11ea-8931-82f48db500db","category":"61c54b909dda4f2b8101866e42a0ae49","processDefinitionVersion":2},{"pdss":1,"processDefinitionId":"netBank_singlePayment:1:3fdc11e1-f815-11ea-89bb-82f48db500db","modelId":"f21925fb-f814-11ea-89bb-82f48db500db","modelVersion":2,"corpName":"对公客户名029991001001","modelLastUpdateTime":1600258073912,"processDefinitionDeployTime":1600258073567,"modelName":"单笔付款","modelCreateTime":1600257943299,"tenantId":"bb60512e61d545b8ae7849702c777ec9","modelDeploymentId":"3fbe77be-f815-11ea-89bb-82f48db500db","category":"61c54b909dda4f2b8101866e42a0ae49","processDefinitionVersion":1}],"count":{"pageCount":1,"currentPage":1,"resultCount":5,"pageSize":10,"pageList":[10,30,50,100],"changePageNumber":0,"startRowNum":0,"endRowNum":10,"isFirstPage":true,"isLastPage":true}}}

3 发布前验证
url:'http://192.168.2.105:7000/workflow/workflow/bpm/verify',
req: ids:[],access_token  Form Data
res: {"status":0,"code":"0","msg":"没有代办数据","data":null}

4 发布
url:'/workflow/workflow/bpm/deploy',
req: 同发布验证
res:{"status":0,"code":"0","msg":"发布流程成功！","data":null}

5 修改前 获取详情
url:'/workflow/workflow/bpm/query/getRevokableStatus',
req:{"modelId":"7052d110-e6c6-11ea-ad0f-82f48db500db","deploymentId":"948d568a-133f-11eb-8ffb-00f48db52b09"},
res:{"status":0,"code":"0","msg":"操作成功","data":{"code":0,"data":"1"}}

6 确认修改
url:'/workflow/workflow/bpm/update',
req:
  modelId: 7052d110-e6c6-11ea-ad0f-82f48db500db
  revokable: 0
  access_token:
res: {"msg":"更新流程数据成功！","code":0}

7.1 复制前 准备 树

url:'/workflow/workflow/bpm/query/getCorpTree',
req:{"categoryId":"61c54b909dda4f2b8101866e42a0ae49","flag":"1"},
res:{"status":0,"code":"0","msg":"操作成功","data":{"data":...

7.2 确认复制


corpIds modelId access_token FormData

{"status":0,"code":"0","msg":"复制流程保存成功！","data":null}

8 删除

/workflow/workflow/bpm/delete

ids[] token  FormData

{"status":0,"code":"0","msg":"删除流程配置成功！","data":null}
```

### 收款人管理

#### 列表

/businessBasic/businessBasic/payeeManage/goSelectpayeeManage

{"page":1,"limit":10,"access_token":" ","corpId":"","code":"","name":"","menuId":"fbe894daa1844af0bc29795148f85a38"}

status data.data



#### 新增弹窗-银行类别下拉

/businessBasic/businessBasic/payeeManage/getBankTypeName
{}

{"status":0,"code":"0","msg":"操作成功","data":[{"TYPE_NAME":"招商银行","BANK_TYPE":"5000","ID":"9ef335b7c6c843b9a1a030ca140b54ef"}]}

#### 新增弹窗-银行列表

/businessBasic/businessBasic/queryBankList/selectBankName
bankCode: "1"
bankName: "2"
bankTypeId: "9ef335b7c6c843b9a1a030ca140b54ef"
limit: 10
page: 1

{"msg":"成功","code":0,"data":[{"format":"YMPS","typeName":"中国农业银行","bankCode":"103753412945","drecCode":"103731099997","bankName":"中国农业银行股份有限公司龙陵县支行营业部"},]}

#### 新增前检测重复

/businessBasic/businessBasic/payeeManage/isRepeat

corpId: "35d3b5444ce248e3a06bb3851c5b75ec"
externalAccs: ["1", "2"]

{"status":0,"code":"0","msg":"操作成功","data":{"1":0,"2":0,"code":0}}

#### 新增 /businessBasic/businessBasic/payeeManage/addPayee

{"name":"测试10-23",
"corpId":"35d3b5444ce248e3a06bb3851c5b75ec",
"protocols":"on",
"externalCorpBankaccBeanList":
[{"dateRandom":"0.9012975241499499","externalAcc":"1","bank":"中国农业银行股份有限公司龙陵县支行营业部","bankSourcecode":"103753412945","bankType":"中国农业银行","province":null,"city":null,"accProvince":null,"accCity":null,"isDefaultAcc":0,"LAY_TABLE_INDEX":0},{"dateRandom":"0.448370063443986","externalAcc":"2","bank":"中国农业银行股份有限公司怒江穿城路支行","bankSourcecode":"103756015031","bankType":"中国农业银行","province":"云南省","city":"怒江州","accProvince":"73","accCity":"7560","isDefaultAcc":0,"LAY_TABLE_INDEX":1}]}

{"status":-1,"code":"CMSCMR9999","msg":"操作失败","data":null}


