<template>
  <div style="display:flex;">
    <div style="padding:8px;">
      <div class="inf-tit">销售数据汇总</div>
      <div class="inf-tit">华南区</div>
      <div class="inf-no">{{countTotle.sales}}</div>
    </div>
    <div id="container-bar"></div>
  </div>
</template>

<script>
import { Bar } from '@antv/g2plot'
import chartMixins from './mixins'
function generateData() {
  return [
    {
      type: '家具家电',
      sales: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '粮油副食',
      sales: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '生鲜水果',
      sales: 20 + parseInt(Math.random() * 30)
    },
    {
      type: '进口食品',
      sales: 20 + parseInt(Math.random() * 30)
    }
  ]
}
export default {
  mixins: [chartMixins],
  data() {
    return {
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
    this.chart = new Bar('container-bar', {
      data: this.chartData,
      width: 280,
      height: 260,
      xField: 'sales',
      yField: 'type',
      seriesField: 'type',
      color: ({ type }) => {
        return type === '生鲜水果' ? '#FAAD14' : '#5B8FF9'
      },
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
        sales: {
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