<template>
  <a-modal :maskClosable="false" :title="title" :visible="visible" @cancel="handleCancel" width="50%">
    <a-form :form="dataHandles.form" layout="inline">
      <a-form-item label="联行号"> <a-input v-decorator="['sysBankCode']"></a-input> </a-form-item>
      <a-form-item label="开户行名称"> <a-input v-decorator="['bankName']"></a-input> </a-form-item>
      <!--<a-form-item label="银行类别">-->
        <!--<a-select v-decorator="['bankTypeId']" style="width: 200px" allowClear>-->
          <!--<a-select-option v-for="item in bankTypeOptions" :key="item.ID" :value="item.ID"-->
            <!--&gt;{{ item.TYPE_NAME }}-->
          <!--</a-select-option>-->
        <!--</a-select>-->
      <!--</a-form-item>-->
      <a-form-item>
        <a-button type="primary" @click="refresh">查询</a-button>
        <a-button style="margin-left: 8px" @click="() => dataHandles.form.resetFields()">重置</a-button>
      </a-form-item>
    </a-form>
    <s-table
      ref="table"
      size="small"
      rowKey="id"
      :columns="columns"
      :dataHandles="dataHandles"
      :loadDataMounted="false"
      :rowSelection="{
        selectedRowKeys: selectedRowKeys,
        onSelect: onSelect,
      }"
    >
    </s-table>

    <template slot="footer">
      <a-button @click="handleOk" type="primary">提交</a-button>
      <a-button @click="visible = false">关闭</a-button>
    </template>
  </a-modal>
</template>

<script>
import { selectBankName, getBankTypeName } from '@/api/businessBasic'

const formatLabel = { HVPS: '大额支付', BEPS: '小额支付', IBPS: '超级网银', YMPS: '云南同城' }
const columns = [
  { type: 'index', title: '序号', width:65,  customRender: (text, record, index) => index + 1 },
  // { dataIndex: 'bankCode', title: '联行号' },
  // { dataIndex: 'bankName', title: '开户行名称' },
  // { dataIndex: 'format', title: '支付渠道', customRender: (text) => formatLabel[text] },
  // { dataIndex: 'drecCode', title: '清算行号' },

  { dataIndex: 'sysBankCode', title: '联行号' },
  { dataIndex: 'bankName', title: '开户行名称' },
  { dataIndex: 'provInputName', title: '所在省' },
  { dataIndex: 'name', title: '所在市' },
  // { dataIndex: 'province', title: '账号所属省' },
  // { dataIndex: 'city', title: '账号所属市' },
  // { dataIndex: 'accProvince', title: '账号所属省代码' },
  // { dataIndex: 'accCity', title: '账号所属市代码' },
  // { dataIndex: 'typeName', title: '银行类别名' },
]

export default {
  name: 'DepositBankListModal2',
  components: {},
  data() {
    return {
      visible: false,
      columns: columns,
      record: {},
      title: '查询开户行',
      bankTypeOptions: [],
      selectedRowKeys: [],
      dataHandles: {
        form: this.$form.createForm(this),
        listApi: selectBankName,
        handleResponse: (res) => {
          res.status = 0
          return res
        },
        initialParams: {
          limit: 10,
          page: 1,
        },
      },
    }
  },
  mounted() {
    this.getBankNameOptions()
  },
  methods: {
    show() {
      this.visible = true
      this.selectedRowKeys = []
      this.selectedRow = {}
    },
    getBankNameOptions() {
      getBankTypeName({}).then((res) => {
        if (res.status === 0) {
          this.bankTypeOptions = res.data
        }
      })
    },
    refresh() {
      this.dataHandles.form.validateFields((err) => {
        if (!err) this.$refs.table.refresh(true)
      })
    },
    onSelect(record, selected, selectedRows, nativeEvent) {
      this.selectedRowKeys = [record.id]
      this.selectedRow = record
    },
    // onSelectChange(selectedRowKeys, selectedRows) {
    // this.selectedRowKeys = selectedRowKeys
    // },
    handleOk() {
      this.visible = false
      this.$emit('ok', this.selectedRow)
    },
    handleCancel() {
      this.visible = false
    },
  },
}
</script>

<style>
</style>