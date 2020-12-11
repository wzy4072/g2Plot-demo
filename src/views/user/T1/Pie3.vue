<template>
  <div>
    <div :id="'container-pie'+idNo"></div>
    <dv-decoration-2 style="height:10px;" />
  </div>
</template>

<script>
import { Pie } from '@antv/g2plot'

function generateData(title) {
  const data = [
    { type: '比亚迪', value: 15000 },
    { type: '腾讯', value: 20000 },
    { type: '华为', value: 30000 },
    { type: '恒大', value: 13000 }
  ].sort((a, b) => (a.value > b.value ? -1 : 1))

  const { value: totalVal } = data.reduce((a, b) => ({ value: a.value + b.value }))
  return data.map(item => {
    item.value = (item.value / totalVal).toFixed(1) * 100
    return item
  })
}

export default {
  data() {
    return {
      chartData: generateData(),
      chart: null,
      idNo: parseInt(Math.random() * 100)
    }
  },
  watch: {},
  mounted() {
    this.chart = new Pie('container-pie' + this.idNo, {
      appendPadding: 10,
      height: 200,
      // width: 360,
      data: this.chartData,
      angleField: 'value',
      colorField: 'type',
      padding: [0, 80, 0, 0],
      radius: 1,
       legend: {
        position: 'right',
        itemName: { style: { fill: '#586A8D' } }
      },
      innerRadius: 0,
      label: {
        type: 'inner',
        offset: '-50%',
        content: '{value}%',
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