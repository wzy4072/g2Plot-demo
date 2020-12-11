<template>
  <div>
    <div class="inf-tit">市场占有</div>
    <div id="container-BidirectionalBar"></div>
  </div>
</template>

<script>
import { BidirectionalBar } from '@antv/g2plot'
import chartMixins from './mixins'
function generateData() {
  return [
    {
      country: '乌拉圭',
      '2016年市场总面积': 10 + parseInt(Math.random() * 35),
      '2016年占有面积': 10 + parseInt(Math.random() * 35)
    },

    {
      country: '南非',
      '2016年市场总面积': 10 + parseInt(Math.random() * 35),
      '2016年占有面积': 10 + parseInt(Math.random() * 35)
    },
    {
      country: '巴西',
      '2016年市场总面积': 10 + parseInt(Math.random() * 35),
      '2016年占有面积': 10 + parseInt(Math.random() * 35)
    },
    {
      country: '加拿大',
      '2016年市场总面积': 10 + parseInt(Math.random() * 35),
      '2016年占有面积': 10 + parseInt(Math.random() * 35)
    },
    {
      country: '中国',
      '2016年市场总面积': 10 + parseInt(Math.random() * 35),
      '2016年占有面积': 10 + parseInt(Math.random() * 35)
    },
    {
      country: '美国',
      '2016年市场总面积': 10 + parseInt(Math.random() * 35),
      '2016年占有面积': 10 + parseInt(Math.random() * 35)
    }
  ]
}
export default {
  mixins: [chartMixins],

  data() {
    return {
      chartData: generateData(),
      timeout: 0,
      chart: null
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
    this.chart = new BidirectionalBar('container-BidirectionalBar', {
      data: this.chartData,
      width: 390,
      height: 200,
      xField: 'country',
      xAxis: {
        position: 'bottom',
        grid: {
          line: null,
        }

      },
      
      label: {
        style: {
          fill: '#fff'
        }
      },
      interactions: [{ type: 'active-region' }],
      yField: ['2016年市场总面积', '2016年占有面积'],
      tooltip: {
        shared: true,
        showMarkers: false
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