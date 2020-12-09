<template>
  <div class="antv-chart-mini">
    <div class="chart-wrapper" :style="{ height: 46 }">
      <div id="chartBal"></div>
    </div>
  </div>
</template>

<script>
import {TinyColumn} from '@antv/g2plot'

export default {
  name: 'MiniChartBal',
  data() {
    return {
      chartData: [
        {date: '2020-08-10', value: 3},
        {date: '2020-08-11', value: 4},
        {date: '2020-08-12', value: 3.5},
        {date: '2020-08-13', value: 5},
        {date: '2020-08-14', value: 4.9},
        {date: '2020-08-15', value: 6},
        {date: '2020-08-16', value: 7},
        {date: '2020-08-17', value: 9},
        {date: '2020-08-18', value: 13},
      ]
    }
  },
  methods:{
    loadChart(){
      const data = this.chartData
      
      const linePlot = new TinyColumn('chartBal', {
        data,
        xField: 'date',
        yField: 'value',
        height: 55,
        width: 200,
        meta:{
          value:{
            alias:'充值金额'
          }
        },
        
        xAxis:{
          visible: false,
        },
        yAxis:{
          visible: false,
        },
        tooltip:{
          visible: true,
        }
        
        
        /*point: {
          visible: true,
        },*/
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