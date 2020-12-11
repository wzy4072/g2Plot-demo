<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <!-- <a-form
          :form="dataHandles.form"
          layout="inline"
          :label-col="{ span: 6 }"
          :wrapper-col="{ span: 16 }"
        >
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="社会渠道名称">
                <a-input v-decorator="['cc']"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="社会渠道编码">
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
        </a-form>-->
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
            <a-button type="link" size="small" @click="detail(record)">查看明细</a-button>
            <a-button type="link" size="small" @click="detail(record)">提交</a-button>
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
  { dataIndex: 'aa', title: '区域名称' },
  { dataIndex: 'bb', title: '区域编码' },
  { dataIndex: 'cc', title: '营业日期' },
  { dataIndex: 'dd', title: '实际到账金额（汇总）' },

  { dataIndex: 'ee', title: '实缴金额（汇总）' },
  { dataIndex: 'ff', title: '应收金额（汇总）' },
  { dataIndex: 'gg', title: '差异金额（汇总）' },
  { title: '操作', scopedSlots: { customRender: 'action' } }
]

const data = [
  {
    id: 1,
    aa: '粤海社区',
    bb: '755-008',
    cc: '2020/12/6',
    dd: '20,000.00',
    ee: '20,000.00',
    ff: '20,000.00',
    gg: '0.00'
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