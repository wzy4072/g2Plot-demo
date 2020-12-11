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
    { type: '大冲代理厅', value: 1500, date: '2020-12-01 16:30:00' },
    { type: '深圳湾口岸店', value: 2600, date: '2020-12-01 13:12:39' },
    { type: '科技南路代理店', value: 500, date: '2020-12-01 12:28:00' },
    { type: '汽车城店', value: 1780, date: '2020-12-01 09:12:19' },
    { type: '蛇口汽车站店', value: 300, date: '2020-12-01 08:10:00' }
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
        itemName: { style: { fill: '#586A8D'} }
      },
      innerRadius: 0.6,
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
            return '合计'
          }
        },
        content: {
          style: {
            color: '#fff',
            whiteSpace: 'pre-wrap',
            overflow: 'hidden',
            fontSize: '18px',
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