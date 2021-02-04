<template>
  <a-modal :visible="visible" @cancel="visible = false" width="80%" id="map-order-detail" :footer="null">
    <a-table :columns="columns" :data-source="data" rowKey="id" :pagination="false" size="middle">
      <template slot="title">
        {{ title }}
      </template>
    </a-table>
  </a-modal>
</template>
<script>
const columns = [
  { dataIndex: 'payer', title: '父帐户' },
  { dataIndex: 'payeeNo', title: '父帐号' },
  { dataIndex: 'payee', title: '子账户' },
  { dataIndex: 'payerNo', title: '子账号' },
  { dataIndex: 'bankType', title: '银行类型', customRender: (t) => '类别A' },
  { dataIndex: 'money', title: '金额' },
]
// 中国移动通信集团终端有限公司湖北分公司
const data = [
  {
    id: '1',
    payee: '安徽正德人力资源咨询有限公司',
    payer: '中国移动北京总公司',
    payeeNo: '8587864225655554584',
    payerNo: '966453662525656858',
    money: '970717.64',
    mark: '(银行手续费)支付建行询证函手续费',
  },
  {
    id: '2',
    payee: '北京信捷苑物业管理有限公司',
    payer: '中国移动北京总公司',
    payeeNo: '8587864225655554584',
    payerNo: '966453662525656858',
    money: '5250.00',
    mark: '(营销支撑费)HB-210129-0003报1月营销支撑费',
  },
  {
    id: '3',
    payee: '安徽正德人力资源咨询有限公司',
    payer: '中国移动北京总公司',
    payeeNo: '8587864225655554584',
    payerNo: '966453662525656858',
    money: '3653908.46',
    mark: '(代办业务成本)全省1月第一次顺差让利服务费报账',
  },
  {
    id: '4',
    payee: '中国移动通信集团湖南有限公司株洲分公司',
    payer: '中国移动北京总公司',
    payeeNo: '8587864225655554584',
    payerNo: '966453662525656858',
    money: '60459.21',
    mark: '(代办业务成本)株洲中心上报统付业务',
  },
  {
    id: '5',
    payee: '广东省装饰有限公司',
    payer: '中国移动北京总公司',
    payeeNo: '8587864225655554584',
    payerNo: '966453662525656858',
    money: '795.91',
    mark: '(房屋维修)零售报账汕头全球通厅30%工程预付款',
  },
  {
    id: '6',
    payee: '长沙日出东方广告策划有限公司',
    payer: '中国移动北京总公司',
    payeeNo: '8587864225655554584',
    payerNo: '966453662525656858',
    money: '190739.00',
    mark: '(业务宣传-广告延伸制作物料)支撑服务部报销业务宣传费（冲销计提）',
  },
]

export default {
  data() {
    return {
      data,
      columns,
      visible: false,
      title: '',
    }
  },
  methods: {
    show({ data, title }) {
      this.title = title
      this.visible = true
    },
  },
}
</script>
<style  >
#map-order-detail .ant-modal-content {
  background-color: rgb(32 44 76 / 73%);
}

#map-order-detail#map-order-detail .ant-table-thead.ant-table-thead > tr > th,
#map-order-detail .ant-table-wrapper {
  background-color: transparent;
  color: #b1b1b1;
}
#map-order-detail .ant-table-body,
#map-order-detail .ant-table-title {
  color: #b1b1b1;
}
#map-order-detail .ant-table-tbody > tr > td {
  border-color: transparent;
}
.ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
.ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
.ant-table-thead > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td,
.ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td {
  background: inherit;
}
</style>
