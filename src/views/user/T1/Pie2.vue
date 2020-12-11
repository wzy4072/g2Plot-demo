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
    { type: '自有电子渠道', value: 35000 },
    { type: '天猫商城自营店', value: 51000 },
    { type: '京东官方旗舰店', value: 46000 },
    { type: '拼多多自营店', value: 31000 },
    { type: '支付宝城市服务', value: 50000 }
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
      title: '777',
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