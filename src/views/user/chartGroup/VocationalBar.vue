<template>
  <div id="container-bar"></div>
</template>

<script>
import { Bar } from '@antv/g2plot'
import chartMixins from './chartMixins'
function generateData() {
  var result = [
    {
      type: '大额存取业务',
      value: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '密码修改业务',
      value: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '开户业务',
      value: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '信用卡办理业务',
      value: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '房贷业务',
      value: 20 + parseInt(Math.random() * 30)
    }
  ]
  return result.sort((a, b) => (a.value > b.value ? -1 : 1))
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
          this.currentInfo = params
          // this.$message.info(`钻取参数：${JSON.stringify(params)}`)
          this.$emit('ok', params)
        }
      }
    }
  },
  watch: {
    params() {
      this.updateData()
    }
  },
  mounted() {
    this.chart = new Bar('container-bar', {
      data: this.chartData,
      width: 280,
      height: 260,
      xField: 'value',
      yField: 'type',
      seriesField: 'type',
      color: ({ type }) => '#5B8FF9',
      xAxis: {
        grid: {
          line: null
        }
      },

      label: {
        style: {
          fill: '#fff'
        }
      },
      legend: false,
      // legend: {
      //   textStyle: {
      //     textAlign: 'center', // 文本对齐方向，可取值为： start middle end
      //     fill: '#404040', // 文本的颜色
      //     fontSize: '12', // 文本大小
      //     fontWeight: 'bold', // 文本粗细
      //     rotate: 30, // 文本旋转角度，以角度为单位，仅当 autoRotate 为 false 时生效
      //     textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
      //   }
      // },
      meta: {
        type: {
          alias: '类别'
        },
        value: {
          alias: '销售额'
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
      const datas = generateData()
      this.countTotle = datas.reduce(function(a, b) {
        return { value: a.value + b.value }
      })
      setTimeout(() => {
        this.chart.changeData(datas)
      }, 800)
    }
  }
}
</script>

<style>
</style>