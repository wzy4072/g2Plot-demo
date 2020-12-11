<template>
  <div>
    <div :id="'container-Radar' + idNo"></div>
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
import { Radar } from '@antv/g2plot'
import chartMixins from './mixins'
function generateData() {
  const baseNum = 1000
  return [
    { name: '销售', star: 100 + parseInt(Math.random() * baseNum) },
    { name: '产品', star: 100 + parseInt(Math.random() * baseNum) },
    { name: '开发', star: 100 + parseInt(Math.random() * baseNum) },
    { name: 'UI', star: 100 + parseInt(Math.random() * baseNum) },
    { name: '测试', star: 100 + parseInt(Math.random() * baseNum) },
    { name: '售后', star: 100 + parseInt(Math.random() * baseNum) }
  ]
}
export default {
  mixins: [chartMixins],
  data() {
    return {
      idNo: parseInt(Math.random() * 100),
      chartData: generateData(),
      timeout: 0,
      chart: null,
      currentInfo: {},
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
    this.chart = new Radar('container-Radar' + this.idNo, {
      data: this.chartData.map(d => ({ ...d, star: Math.log(d.star) })),
      xField: 'name',
      yField: 'star',
      width:200,
      height:200,
      meta: {
        star: {
          alias: 'star 数量',
          min: 0,
          nice: true,
          formatter: v => Number(v).toFixed(2)
        }
      },
      xAxis: {
        tickLine: null
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)'
        }
      },
      // 开启辅助点
      point: {
        size: 2
      },
      area: {}
    })

    this.bindFunctions()
    this.renderChart()
  },
  methods: {
    renderChart() {
      this.chart.render()
    },
    updateData() {
      this.timeout = setTimeout(() => {
        const datas = generateData()
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