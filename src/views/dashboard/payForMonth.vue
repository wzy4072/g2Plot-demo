<template>
  <div :style="{ padding: '0 0 32px 32px' }">
    <h4 :style="{ marginBottom: '20px' }">{{ title }}</h4>
    <div id="canvas"></div>
  </div>

</template>

<script>
import { Column } from '@antv/g2plot'
export default {
  name: 'PayForMonth',
  props:{
    title: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      chartData: [
        {year: '1991', value: 3},
        {year: '1992', value: 4},
        {year: '1993', value: 3.5},
        {year: '1994', value: 5},
        {year: '1995', value: 4.9},
        {year: '1996', value: 6},
        {year: '1997', value: 7},
        {year: '1998', value: 9},
        {year: '1999', value: 13},
      ]
    }
  },
  methods:{
    loadChart(){
      const data = this.chartData

      const linePlot = new Column('canvas', {
        data,
        xField: 'year',
        yField: 'value',
        title: {
          visible: true,
          text: '历史各年销售额',
        },
        description: {
          visible: true,
          text: '历史9年，各年份的年销售额。',
        },
        point: {
          visible: true,
        },
        label: {
          visible: true,
        },
        meta: {
          year: {
            alias:'年份'

          },
          value: {
            alias: '销售额（单位：万元）',

          }
        },
        //colorField:'year'
      })
      linePlot.render()
    }
  },
  mounted() {
    this.loadChart()
  }

}
</script>

<style scoped>

</style>
