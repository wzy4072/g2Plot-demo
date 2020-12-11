<template>
  <div id="city_map" style="width: 100%; height: 100%"></div>
</template>

<script>
import cityJson from './china-cities.json'
// china-cities
// china-contour
// world

export default {
  data() {
    return {
      chartOption: null
    }
  },
  mounted() {
    this.drawMapChart()
  },
  methods: {
     getMapJson() {
      const reg = new RegExp(`\^${this.provinceId}\\d{4}\$`)
      return {
        UTF8Encoding: true,
        type: 'FeatureCollection',
        features: cityJson.features.filter(item => reg.test(item.id))
      }
    },
    drawMapChart() {
        // const mapJson = this.getMapJson()
      // console.log(mapJson)
      this.$echarts.registerMap('安徽', cityJson)
      this.chinachart = this.$echarts.init(document.getElementById('city_map'))
      // 进行相关配置
      this.chartOption = {
        tooltip: {
          // 鼠标移到图里面的浮动提示框
          // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
          //   formatter(params, ticket, callback) {
          //     // params.data 就是series配置项中的data数据遍历
          //     let localValue, perf, downloadSpeep, usability, point
          //     if (params.data) {
          //       localValue = params.data.value
          //       perf = params.data.perf
          //       downloadSpeep = params.data.downloadSpeep
          //       usability = params.data.usability
          //       point = params.data.point
          //     } else {
          //       // 为了防止没有定义数据的时候报错写的
          //       localValue = 0
          //       perf = 0
          //       downloadSpeep = 0
          //       usability = 0
          //       point = 0
          //     }
          //     let htmlStr = `
          //   <div style='font-size:18px;'> ${params.name}</div>
          //   <p style='text-align:left;margin-top:-10px;'>
          //     区域对应数据value：${localValue}<br/>
          //     性能perf：${perf}<br/>
          //     下载速度downloadSpeep：${downloadSpeep}<br/>
          //     可用性usability：${usability}<br/>
          //     监测点数point：${point}<br/>
          //   </p>
          // `
          //     return htmlStr
          //   },
          // backgroundColor:"#ff7f50",//提示标签背景颜色
          // textStyle:{color:"#fff"} //提示标签字体颜色
        },
        // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
        visualMap: {
          type: 'piecewise', // 定义为分段型 visualMap
          min: 0,
          max: 1000,
          itemWidth: 40,
          bottom: 60,
          left: 20,
          pieces: [
            { gt: 900, lte: 1000, label: '非常好', color: '#469F4B' }, // (900, 1000]
            { gt: 500, lte: 900, label: '正常', color: '#00BAFF' }, // (500, 900]
            { gt: 310, lte: 500, label: '警告', color: '#3DE7C9' }, // (310, 500]
            { gt: 200, lte: 300, label: '较差', color: '#FFC530' }, // (200, 300]
            { gt: 10, lte: 200, label: '非常差', color: 'orangered' }, // (10, 200]
            { value: 0, label: '无数据', color: '#fff' } // [0]
          ]
        },
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: {
          // 地理坐标系组件用于地图的绘制
          map: 'china', // 表示中国地图
          // roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: false
          },
          itemStyle: {
            // 地图区域的多边形 图形样式。
            borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: {
              // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            name: '', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            label: {
              show: false
            },
            // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
            data: [
              {
                id: '110000',
                name: '北京',
                value: 599,
                perf: '0.501s', // 性能
                downloadSpeep: '1.221MB/s', // 下载速度
                usability: '100%', // 可用性
                point: '250' // 监测点
              },
              { id: '310000', name: '上海', value: 142 },
              { id: '230000', name: '黑龙江', value: 806 },
              {
                name: '新疆',
                id: '650000',
                value: 999,
                perf: '0.501s', // 性能
                downloadSpeep: '1.221MB/s', // 下载速度
                usability: '100%', // 可用性
                point: '250' // 监测点
              },
              { id: '630000', name: '青海', value: 205 },
              { id: '420000', name: '湖北', value: 810 },
              { id: '510000', name: '四川', value: 453 },
              { id: '710000', name: '台湾' },
              { id: '130000', name: '河北' },
              { id: '140000', name: '山西' },
              { id: '150000', name: '内蒙古' },
              { id: '210000', name: '辽宁' },
              { id: '220000', name: '吉林' },
              { id: '320000', name: '江苏' },
              { id: '330000', name: '浙江' },
              { id: '340000', name: '安徽' },
              { id: '350000', name: '福建' },
              { id: '360000', name: '江西' },
              { id: '370000', name: '山东' },
              { id: '410000', name: '河南' },
              { id: '430000', name: '湖南' },
              { id: '440000', name: '广东' },
              { id: '450000', name: '广西' },
              { id: '460000', name: '海南' },
              { id: '520000', name: '贵州' },
              { id: '530000', name: '云南' },
              { id: '540000', name: '西藏' },
              { id: '610000', name: '陕西' },
              { id: '620000', name: '甘肃' },
              { id: '640000', name: '宁夏' },
              { id: '120000', name: '天津' },
              { id: '500000', name: '重庆' },
              { id: '810000', name: '香港' },
              { id: '820000', name: '澳门' }
            ]
          }
        ]
      }
      // 使用刚指定的配置项和数据显示地图数据
      this.chinachart.on('click', function(params) {
        // 控制台打印数据的名称
        console.log(params)
      })
      this.chinachart.setOption(this.chartOption)
    }
  }
}
</script>

<style>
</style>