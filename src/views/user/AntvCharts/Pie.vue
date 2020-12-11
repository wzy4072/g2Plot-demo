<template>
  <div>
    <div :id="'container-pie'+idNo"></div>
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot'
import chartMixins from './mixins'
import { parse } from 'querystring'

function generateData(title) {
  title = title || '分类'
  const baseNum = 50
  return [
    { type: `${title}一`, value: 10 + parseInt(Math.random() * baseNum) },
    { type: `${title}二`, value: 10 + parseInt(Math.random() * baseNum) },
    { type: `${title}三`, value: 10 + parseInt(Math.random() * baseNum) },
    { type: `${title}四`, value: 10 + parseInt(Math.random() * baseNum) },
    { type: `${title}五`, value: 10 + parseInt(Math.random() * baseNum) },
    { type: `${title}其他`, value: 10 + parseInt(Math.random() * baseNum) }
  ]
}
export default {
  mixins: [chartMixins],
  props: {
    params: {
      type: String
    },
    innerRadius: {
      default: 0.6
    }
  },
  data() {
    return {
      chartData: generateData(),
      chart: null,
      idNo: parseInt(Math.random() * 100)
    }
  },
  watch: {
    params(nv, ov) {
      this.chart.changeData(generateData(nv))
    },
    autoUpdate(nv, ov) {
      if (nv) {
        this.updateData()
      } else {
        clearTimeout(this.timeout)
      }
    },
    innerRadius(nv) {
      this.chart.update({
        innerRadius: nv
      })
    }
  },
  mounted() {
    this.chart = new Pie('container-pie' + this.idNo, {
      appendPadding: 10,
      title: '777',
      height: 280,
      width: 360,
      data: this.chartData,
      angleField: 'value',
      colorField: 'type',
      padding: 16,
      radius: 1,
      legend: {
        position: 'bottom',
        // itemWidth: 50,
        itemSpacing: 50,
        // label: { style: { fill: '#fff' } }
      },
      innerRadius: this.innerRadius,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}',
        style: {
          textAlign: 'center',
          fontSize: 14
        }
      },

      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          formatter: () => {
            return this.params
          }
        },
        content: {
          style: {
            color: '#fff',
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }
          // formatter: v => {
          //   console.log(v)
          //   return 6
          // }
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
        this.chart.changeData(generateData())
        this.updateData()
      }, 3500)
    }
  }
}
</script>

<style>
</style>