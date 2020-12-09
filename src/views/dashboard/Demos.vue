<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <a-button @click="$refs.table.refresh(true)">reload</a-button>
      <s-table
        ref="table"
         
        rowKey="id"
        :columns="columns"
        :showPagination="true"
        :loadDataMounted="false"
        :dataHandles="dataHandles"
      ></s-table>
    </a-card>
  </page-header-wrapper>
</template>
<script>
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    customRender: (text, record, index) => (record.localCount ? '' : ++index),
  },
  {
    dataIndex: 'name',
    title: '单位名称',
    customRender: (text, record) => {
      console.log('vvv', record.localCount)
      if (record.localCount) {
        console.log('vvv-', record.localCount)
        return '合计'
      }
      return text
    },
  },
  {
    dataIndex: 'val1',
    title: '语文',
    localCount: true,
  },
  {
    dataIndex: 'val2',
    title: '数学',
    localCount: true,
  },
  {
    dataIndex: 'val3',
    title: '英语',
  },
  { title: '操作', scopedSlots: { customRender: 'action' } },
]

export default {
  components: {},
  data() {
    return {
      columns,
      dataHandles: {
        listApi: () =>
          Promise.resolve({
            status: 0,
            count: 4,
            data: [
              { id: 1, val1: 90, val2: 91, val3: 102 },
              { id: 2, val1: 89, val2: 99, val3: 132 },
              { id: 3, val1: 121, val2: 104, val3: 136 },
              { id: 4, val1: 102, val2: 98, val3: 146 },
            ],
          }),
        form: this.$form.createForm(this),
        // handleResponse: (res) => {
        // },
        initialParams: {},
      },
    }
  },
  methods: {},
}
</script>

