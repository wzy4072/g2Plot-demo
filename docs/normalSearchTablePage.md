### 一般搜 含搜索表头的列表

```vue
<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false" title="账户限额维护">
      <div class="table-page-search-wrapper">
        <a-form :form="dataHandles.form" layout="inline" :label-col="{ span: 6 }" :wrapper-col="{ span: 16 }">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <CorpTreeSelect
                :localDecorator="['corpId', { rules: [{ required: true, message: 'required 类型!' }] }]"
              ></CorpTreeSelect>
            </a-col>
            <a-col :md="8" :sm="24">
              <BankAccSelect :localDecorator="['bankAcc']"></BankAccSelect>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="账户名称">
                  <a-input v-decorator="['accName']"></a-input>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="(!advanced && 8) || 24" :sm="24">
              <span
                class="table-page-search-submitButtons"
                :style="(advanced && { float: 'right', overflow: 'hidden' }) || {}"
              >
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="dataHandles.form.resetFields()">重置</a-button>

                <a @click="advanced = !advanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>

    <a-card :bordered="false">
      <div class="table-operator">
        <!-- <a-button type="primary" icon="plus" @click="addPayee">新增</a-button> -->
      </div>
      <div class="table-operator">
        <s-table
          ref="table"
          size="default"
          rowKey="id"
          :rowKey="record => 'id_' + Math.random()"
          :columns="columns"
          :showPagination="true"
          :dataHandles="dataHandles"
          :loadDataMounted="false"
          :rowSelection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange
          }"
        >
          <!--     :rowSelection="rowSelection"
      :alert="alert"-->
          <span slot="action" slot-scope="text, record">
            <a-button type="link" size="small" @click="detail(record)">查看</a-button>
            <a-button type="link" size="small" @click="edit(record)">限额设置</a-button>
            <a-popconfirm title="确定禁用预算?" @confirm="enableCorp(record)">
              <a-button v-if="btnVisiable(record, '启用预算')" type="link" size="small">启用预算</a-button>
            </a-popconfirm>
          </span></s-table
        >
      </div>
    </a-card>
    <DetailModal ref="DetailModal" title="账户详情"></DetailModal>
    <AccountQuotaEditModal ref="AccountQuotaEditModal"></AccountQuotaEditModal>
  </page-header-wrapper>
</template>
<script>
import { accountQuota, getBankAcc, getPaymentLimit } from '@/api/businessBasic'

import BankAccSelect from '@/components/Select/BankAccSelect'
import CorpTreeSelect from '@/components/Select/CorpTreeSelect'
import DetailModal from '@/components/Modal/DetailModal'
import AccountQuotaEditModal from './modal/AccountQuotaEditModal'
import { number_format } from '@/utils/number'
const columns = [
  { type: 'index', title: '序号', customRender: (text, record, index) => index + 1 },
  { dataIndex: 'CORPNAME', title: '单位名称' },
  { dataIndex: 'BANKACC', title: '账号' },
  { dataIndex: 'ACCNAME', title: '账户名称' },
  { dataIndex: 'BANKNAME', title: '开户行' },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]

export default {
  components: {
    CorpTreeSelect,
    BankAccSelect,
    DetailModal,
    AccountQuotaEditModal
  },
  name: 'XXX',
  data() {
    return {
      advanced: false,
      columns,
      selectedRowKeys:[],

      dataHandles: {
        listApi: accountQuota,
        form: this.$form.createForm(this),
        handleResponse: res => {
          res.data = res.data.map((item, index) => {
            item._id = '_id' + index
            return item
          })
          return res.data
        },
        initialParams: {
        }
      }
    }
  },
  methods: {
    detail(record) {
      let detailInfo = {}
      getBankAcc({ bankAcc: record.BANKACC }).then(res => {
        const sondata = res.data && res.data[0]
        if (sondata && sondata.list && sondata.list[0]) {
          detailInfo = Object.assign({}, sondata.limit || {}, sondata.list[0] || {})
          const statusLabel = { 95: '正常', 2: '销户', 3: '久悬' }
          const detailData = [
            { index: 1, label: '账号名称', value: detailInfo.ACCNAME },
            { index: 2, label: '账号', value: detailInfo.BANKACC },
            { index: 3, label: '开户行名称', value: detailInfo.BANKNAME },
            { index: 4, label: '账户属性', value: detailInfo.ATTRIBUTENAME },
            { index: 5, label: '账户性质', value: detailInfo.xxx },
            { index: 6, label: '账户状态', value: statusLabel[detailInfo.STATUS] },
            { index: 7, label: '单笔限额', value: number_format(detailInfo.SINGLELIMIT) },
            { index: 8, label: '单日累计限额	', value: number_format(detailInfo.singleDayAddLimit) },
            { index: 9, label: '单笔最大笔数		', value: number_format(detailInfo.singleDayMaxCount) },
            { index: 10, label: '年累计限额', value: number_format(detailInfo.yearCountLimit) }
          ]
          this.$refs.DetailModal.show(detailData)
        }
      })
    },
    edit(record) {
      getPaymentLimit({ bankAcc: record.BANKACC, corpId: record.corpId }).then(res => {
        if (res.data[0]) {
          this.$refs.AccountQuotaEditModal.edit(Object.assign({}, record, res.data[0]))
        }
      })
    },
    onSelectChange (selectedRowKeys, selectedRows) {
         this.selectedRowKeys = selectedRowKeys
         this.selectedRows = selectedRows
       }
    detailPayee(record) {},
    delPyee(record) {}
  }
}
</script>
```

### 合计列功能的使用演示

```js
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
     customRender: (text, record,index) => record.localCount ? '合计' :index+1
  },
  {
    dataIndex: 'name',
    title: '单位名称',
    customRender: (text, record) => record.localCount ? '合计' text // 渲染汉字 合计
  },
  {
    dataIndex: 'val1',
    title: '语文',
    localCount: true // 需要统计的列
  },
  {
    dataIndex: 'val2',
    title: '数学',
    localCount: true
  },
  {
    dataIndex: 'val3',
    title: '英语'
  },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]
```
