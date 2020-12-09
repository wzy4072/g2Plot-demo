<template>
  <div id="payForDay"></div>
</template>

<script>
import {Column, TinyColumn} from '@antv/g2plot'
export default {
  name: 'ChartPayForDay',
  data() {
    return {
      chartData: [
        {date: '2020-08-10', value: 6900.89},
        {date: '2020-08-11', value: 10923.87},
        {date: '2020-08-12', value: 9089.66},
        {date: '2020-08-13', value: 7896.12},
        {date: '2020-08-14', value: 13782.72},
        {date: '2020-08-15', value: 6098.76},
        {date: '2020-08-16', value: 11782.23},
        {date: '2020-08-17', value: 9812.13},
        {date: '2020-08-18', value: 7853.67},
      ]
    }
  },
  methods:{
    loadChart(){
      const data = this.chartData
      
      const linePlot = new Column('payForDay', {
        data,
        xField: 'date',
        yField: 'value',
        title: {
          visible: true,
          text: '每日支付总额',
        },
        description :{
          visible: true,
          text: '最近9天，每天支付给用户的酬金总额。',
        },
        meta:{
          date: {
            alias:'日期'
          },
          value:{
            alias:'支付金额'
          }
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