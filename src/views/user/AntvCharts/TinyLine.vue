<template>
  <div>
    <div class="line-tit">服务器荷载监控</div>
    <div id="container-tinyLine"></div>
  </div>
</template>

<script>
import { TinyLine } from '@antv/g2plot'
import chartMixins from './mixins'

function generateData() {
  let currentNum = 0
  return Array.from({ length: 20 }, (v, k) => {
    currentNum = parseInt(Math.random() * 50) - 15
    return 80 + currentNum
  })
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
      chartData: generateData(),
      chart: null,
      timeout: 0
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
    this.chart = new TinyLine('container-tinyLine', {
      height: 60,
      autoFit: false,
      data: this.chartData,
      smooth: true
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
.line-tit {
  font-size: 20px;
  text-align: center;
  padding: 16px;
}
</style>