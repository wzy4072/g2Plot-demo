<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form
          :form="dataHandles.form"
          layout="inline"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="渠道类别">
                <a-select v-decorator="['cc']"></a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="渠道名称">
                <a-input v-decorator="['aa']"></a-input>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="营业日期">
                  <a-range-picker v-decorator="['bb']" />
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
          :columns="columns"
          :showPagination="true"
          :dataHandles="dataHandles"
        >
          <!--     :rowSelection="rowSelection"
          :alert="alert"-->
          <span slot="action" slot-scope="text, record">
            <a-button type="link" size="small" @click="detail(record)">提交省公司财务</a-button>
          </span>
        </s-table>
      </div>
    </a-card>
    <ListModal1 ref="ListModal1"></ListModal1>
  </page-header-wrapper>
</template>
<script>
import ListModal1 from './modal/ListModal1'
const columns = [
  { type: 'index', title: '序号', customRender: (text, record, index) => index + 1 },
  { dataIndex: 'aa', title: '渠道类别' },
  { dataIndex: 'bb', title: '渠道名称' },
  { dataIndex: 'cc', title: '月结日期' },
  { dataIndex: 'dd', title: '实际到账金额' },

  { dataIndex: 'ee', title: '应收金额' },
  { dataIndex: 'ff', title: '差异金额' },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]
const data = [
  {
    id: 1,
    aa: '自有电子渠道',
    bb: '陕西移动',
    cc: '2020-11-27 ',
    dd: '1,500.00',
    ee: '1,500.00',
    ff: '0.00'
  },
  {
    id: 2,
    aa: '外部电商渠道',
    bb: '陕西移动-京东自营',
    cc: '2020-12-5 ',
    dd: '60,000.00',
    ee: '60,000.00',
    ff: '0.00'
  }
]

export default {
  components: {
    ListModal1
  },
  data() {
    return {
      advanced: false,
      columns,
      selectedRowKeys: [],
      dataHandles: {
        listApi: () =>
          Promise.resolve({
            status: 0,
            count: data.length,
            data: data
          }),
        form: this.$form.createForm(this)
      }
    }
  },
  methods: {
    detail(record) {
      this.$refs.ListModal1.edit(record)
    }
  }
}
</script>