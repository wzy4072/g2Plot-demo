<template>
  <div id="container-line"></div>
</template>

<script>
import { Line } from '@antv/g2plot'
import chartMixins from './chartMixins'
function generateData() {
  const baseNum = 30
  var result = [
    { date: '12-01', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-02', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-03', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-04', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-05', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-06', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-07', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-08', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-09', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-10', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-11', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-12', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-13', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-14', value: 30 + parseInt(Math.random() * baseNum) },
    { date: '12-15', value: 30 + parseInt(Math.random() * baseNum) }
  ]
  return result
}
export default {
  mixins: [chartMixins],
  props: {
    params: {
      required: true
    }
  },
  data() {
    return {
      chartData: generateData(),
      timeout: 0,
      chart: null,
      currentInfo: {},
      countTotle: { value: 0 },
      callBacks: {
        element: e => {
          const {
            data: { data: params }
          } = e
          // this.$emit('ok')
          // this.$message.info(`钻取参数：${JSON.stringify(params)}`)
        }
      }
    }
  },
  watch: {
    params(nv, ov) {
      this.updateData()
    }
  },
  mounted() {
    this.chart = new Line('container-line', {
      data: this.chartData,
      xField: 'date',
      yField: 'value',
      label: {},
      // point: {
      //   size: 5,
      //   shape: 'diamond',
      //   style: {
      //     fill: 'white',
      //     stroke: '#5B8FF9',
      //     lineWidth: 2
      //   }
      // },
      tooltip: { showMarkers: false },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red'
          }
        }
      },
      interactions: [{ type: 'marker-active' }]
    })

    this.bindFunctions()

    this.renderChart()
  },
  methods: {
    renderChart() {
      this.chart.render()
    },
    updateData() {
      const datas = generateData()
      this.chart.changeData(datas)
    }
  }
}
</script>

<style>
</style>