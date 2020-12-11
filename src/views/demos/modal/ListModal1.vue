<template>
  <a-modal
    :maskClosable="false"
    :title="title"
    :visible="visible"
    @cancel="handleCancel"
    width="50%"
  >
    <s-table
      ref="table"
      size="small"
      rowKey="id"
      :columns="columns"
      :rowSelection="rowSelection"
      :dataHandles="dataHandles"
      :showPagination="false"
    ></s-table>
    <template slot="footer">
      <a-button @click="handleOk" type="primary" :loading="loading">提交</a-button>
      <a-button @click="visible = false">关闭</a-button>
    </template>
  </a-modal>
</template>

<script>
import { roleList, addUserRole } from '@/api/businessBasic'

const columns = [
  { dataIndex: 'aa', title: '应收日期' },
  { dataIndex: 'bb', title: '应收款项' },
  { dataIndex: 'cc', title: '待核销金额' },
  { dataIndex: 'dd', title: '营业员姓名' },
  { dataIndex: 'ee', title: '工号' }
]

const data = [
  { id: '1', aa: '2020-09-10', bb: '包年流量费', cc: '100,000.00', dd: '营业员王', ee: 'A00122' },
  { id: '2', aa: '2020-09-03', bb: '通话费', cc: '5,800.00', dd: '营业员王', ee: 'A00122' }
]

export default {
  name: 'RoleListModal',
  data() {
    return {
      loading: false,
      visible: false,
      columns,
      title: '选择核销',
      rowSelection: {
        selectedRowKeys: [],
        onChange: this.onSelectChange
      },
      dataHandles: {
        listApi: () =>
          Promise.resolve({
            status: 0,
            count: data.length,
            data: data
          })
      }
    }
  },

  methods: {
    edit(record) {
      // this.dataHandles.initialParams = { userId: record.userId }
      // this.rowSelection.selectedRowKeys = []
      this.visible = true
      this.$nextTick(() => {
        this.$refs.table.refresh(true)
      })
    },
    onSelectChange(selectedRowKeys) {
      this.rowSelection.selectedRowKeys = selectedRowKeys
    },
    handleOk() {
      this.loading = true
      addUserRole({
        userId: this.dataHandles.initialParams.userId,
        roleIds: this.rowSelection.selectedRowKeys
      })
        .then(res => {
          this.loading = false
          if (res.status === 0) {
            this.visible = false
          }
        })
        .catch(err => {
          this.loading = false
          this.$message.error(err)
        })
    },
    handleCancel() {
      this.visible = false
    }
  }
}
</script>

<style>
</style>