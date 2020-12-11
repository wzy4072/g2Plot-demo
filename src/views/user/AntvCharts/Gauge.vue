<template>
  <div>
    <div :id="'container-Gauge' + idNo"></div>
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
import { Gauge } from '@antv/g2plot'
import chartMixins from './mixins'
function generateData() {
  return parseInt(Math.random() * 100) / 100
}
export default {
  mixins: [chartMixins],
  props: {
    autoUpdate: {
      type: Boolean,
      default: false
    }
  },
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
    this.chart = new Gauge('container-Gauge' + this.idNo, {
      percent: this.chartData,
      range: {
        color: 'l(0) 0:#bde8ff 1:#9ec9ff'
      },
      width: 200,
      height: 200,
      padding: 16,
      startAngle: Math.PI,
      endAngle: 2 * Math.PI,
      indicator: null,
      statistic: {
        title: {
          offsetY: -46,
          style: {
            fontSize: '36px',
            color: '#fff',
            fill: '#fff'
          },
          formatter: v => {
            return parseInt(this.chartData * 100)
          }
        },
        content: {
          offsetY: -16,
          style: {
            fontSize: '20px',
            lineHeight: '44px',
            color: '#fff'
          },
          formatter: () => 'A项目开发进度'
        }
      }
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