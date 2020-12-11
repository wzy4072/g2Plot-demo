<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false" >
      <div class="table-page-search-wrapper">
        <a-form
          :form="dataHandles.form"
          layout="inline"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="提交人姓名">
                <a-input v-decorator="['cc']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="提交人工号">
                <a-input v-decorator="['aa']"></a-input>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="日结日期">
                  <a-date-picker v-decorator="['bb']" />
                </a-form-item>
              </a-col>
              <a-col :md="8" :sm="24">
                <a-form-item label="支付方式">
                  <a-checkbox-group v-decorator="['checkbox-group']">
                    <a-checkbox value="A">支票</a-checkbox>
                    <a-checkbox value="B">网银行汇款单选</a-checkbox>
                  </a-checkbox-group>
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
            <a-button type="link" size="small" @click="detail(record)">选择核销</a-button>
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
  { dataIndex: 'aa', title: '直营店名称' },
  { dataIndex: 'bb', title: '支付方式' },
  { dataIndex: 'cc', title: '金额' },
  { dataIndex: 'dd', title: '日结日期' },
  { dataIndex: 'ee', title: '提交人姓名' },
  { dataIndex: 'ff', title: '提交人工号' },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]

const data = [
  { id: 1, aa: '深圳科兴园营业厅', bb: '支票', cc: '100,000.00', dd: '2020/9/16', ee: '营业员张', ff: 'A00198' },
  { id: 2, aa: '深圳科兴园营业厅', bb: '网银汇款', cc: '58,000.00', dd: '2020/9/16', ee: '营业员李', ff: 'A00168' }
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