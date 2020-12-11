<template>
  <div id="container-Column-t1"></div>
</template>

<script>
import { Column } from '@antv/g2plot'
function generateData() {
  return [
    { type: '现金', sales: 13678.62 },
    { type: '银行卡', sales: 20000 },
    { type: '第三方支付', sales: 65300.18 },
    { type: '支票/网银', sales: 31000 }
  ].sort((a, b) => (a.sales > b.sales ? -1 : 1))
}
export default {
  data() {
    return {
      chartData: generateData(),
      timeout: 0,
      chart: null,
      // height:200,
      // width:'260px',
      currentInfo: {},
      padding: [0, 0, 100, 0],
      countTotle: { sales: 0 },
      callBacks: {
        element: e => {
          const {
            data: { data: params }
          } = e
          this.currentInfo = params
          this.$message.info(`钻取参数：${JSON.stringify(params)}`)
          this.$emit('elementClick', params)
        }
      }
    }
  },
  watch: {
    autoUpdate(nv, ov) {
      if (nv) {
        this.updateData()
      } else {
        clearTimeout(this.timeout)
      }
    }
  },
  mounted() {
    this.chart = new Column('container-Column-t1', {
      data: this.chartData,
      xField: 'type',
      autoFit: false,
      height: 250,
      width:350,
      // padding: [50, 0, 0, 0],
      yField: 'sales',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle',
        // 配置样式
        style: {
          fill: '#FFFFFF',
          opacity: 0.6
        }
      },
      xAxis: {
        label: {
          autoHide: true,
          autoRotate: false
        }
      },
      meta: {
        type: {
          alias: '类别'
        },
        sales: {
          alias: '销售额'
        }
      }
    })
    this.renderChart()
  },
  methods: {
    renderChart() {
      this.chart.render()
    },
    updateData() {
      this.timeout = setTimeout(() => {
        const datas = generateData()
        this.countTotle = datas.reduce(function(a, b) {
          return { sales: a.sales + b.sales }
        })
        this.chart.changeData(datas)
        this.updateData()
      }, 3500)
    }
  }
}
</script>

<style>
.inf-tit {
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  line-height: 50px;
  text-align: center;
}
.inf-no {
  font-size: 30px;
  font-weight: 600;
  color: #40a9ff;
  text-align: center;
}
</style>