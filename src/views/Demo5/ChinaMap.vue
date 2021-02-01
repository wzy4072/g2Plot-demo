<template>
  <div id="china_map" style="width: 100%; height: 100%"></div>
</template>

<script>
import chinaJson from 'echarts/map/json/china.json'
// china-cities
// china-contour
// world
function getValueByName({ list, name }) {
  const result = list.filter((i) => i.name === name)
  return result[0] ? result[0] : null
}
export default {
  data() {
    return {
      chartOption: null,
    }
  },
  mounted() {
    this.drawMapChart()
  },
  methods: {
    drawMapChart() {
      this.$echarts.registerMap('china', chinaJson)
      this.chinachart = this.$echarts.init(document.getElementById('china_map'))
      // 进行相关配置
      const chartOption = {
        // tooltip: {
        //   // 鼠标移到图里面的浮动提示框
        //   // formatter详细配置： https://echarts.baidu.com/option.html#tooltip.formatter
        //   formatter(params, ticket, callback) {
        //     // params.data 就是series配置项中的data数据遍历
        //     let htmlStr = `
        //     <p sytle="font-size:18px"> 未归集公司：</p>
        //     <p> 数据省数据市数据区公司 </p>
        //     <p> 数据省数据市数据区数据省数据市数据区公司 </p>
        //     <p> 数据省数据市数据区数据省数据市数据区公司 </p>
        //     <p> 数据区公司 </p>
        //     `
        //     return htmlStr
        //   },
        //   backgroundColor: '#000620', //提示标签背景颜色
        //   textStyle: { color: '#fff' }, //提示标签字体颜色
        // },
        // visualMap的详细配置解析：https://echarts.baidu.com/option.html#visualMap
        visualMap: {
          type: 'piecewise', // 定义为分段型 visualMap
          min: 0,
          max: 1000,
          itemWidth: 40,
          bottom: 60,
          left: 20,
          textStyle: {
            color: '#2862b7b8',
          },
          pieces: [
            // { gt: 900, lte: 1000, label: '非常好', color: '#469F4B' }, // (900, 1000]
            // { gt: 500, lte: 900, label: '正常', color: '#00BAFF' }, // (500, 900]
            // { gt: 310, lte: 500, label: '警告', color: '#3DE7C9' }, // (310, 500]
            // { gt: 200, lte: 300, label: '较差', color: '#FFC530' }, // (200, 300]
            { gt: 0, lte: 1000, label: '未归集', color: '#faad14' }, // (10, 200]
            { value: 0, label: '已归集', color: '#fff' }, // [0]
          ],
        },
        // geo配置详解： https://echarts.baidu.com/option.html#geo
        geo: {
          // 地理坐标系组件用于地图的绘制
          map: 'china', // 表示中国地图
          // roam: true, // 是否开启鼠标缩放和平移漫游
          zoom: 1.2, // 当前视角的缩放比例（地图的放大比例）
          label: {
            show: true,
            color: 'rgb(32 44 76)',
            formatter: (params) => {
              const v = getValueByName({ list: chartOption.series[0].data, name: params.name })?.value
              return v ? `${params.name}(${v})` : ''
            },
          },
          itemStyle: {
            // 地图区域的多边形 图形样式。
            borderColor: 'rgba(0, 0, 0, 0.2)',
            emphasis: {
              // 高亮状态下的多边形和标签样式
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.3)',
            },
          },
        },

        series: [
          {
            // name: '归集统计', // 浮动框的标题（上面的formatter自定义了提示框数据，所以这里可不写）
            type: 'map',
            geoIndex: 0,
            label: {
              show: false,
            },
            // 这是需要配置地图上的某个地区的数据，根据后台的返回的数据进行拼接（下面是我定义的假数据）
            data: [
              { id: '110000', name: '北京', value: 0 },
              { id: '310000', name: '上海', value: 0 },
              { id: '230000', name: '黑龙江', value: 0 },
              { id: '650000', name: '新疆', value: 100, comName: '中国移动通信集团终端有限公司新疆分公司' },
              { id: '630000', name: '青海', value: 2, comName: '中国移动通信集团终端有限公司青海分公司' },
              { id: '420000', name: '湖北', value: 45, comName: '中国移动通信集团终端有限公司湖北分公司' },
              { id: '510000', name: '四川', value: 15, comName: '中国移动通信集团终端有限公司四川分公司' },
              { id: '710000', name: '台湾', value: 2, comName: '中国移动通信集团终端有限公司台湾分公司' },
              { id: '130000', name: '河北', value: 3, comName: '中国移动通信集团终端有限公司河北分公司' },
              { id: '140000', name: '山西', value: 2, comName: '中国移动通信集团终端有限公司山西分公司' },
              { id: '150000', name: '内蒙古', value: 7, comName: '中国移动通信集团终端有限公司内蒙古分公司' },
              { id: '210000', name: '辽宁', value: 2, comName: '中国移动通信集团终端有限公司辽宁分公司' },
              { id: '220000', name: '吉林', value: 500, comName: '中国移动通信集团终端有限公司吉林分公司' },
              { id: '320000', name: '江苏', value: 5, comName: '中国移动通信集团终端有限公司江苏分公司' },
              { id: '330000', name: '浙江', value: 8, comName: '中国移动通信集团终端有限公司浙江分公司' },
              { id: '340000', name: '安徽', value: 9, comName: '中国移动通信集团终端有限公司安徽分公司' },
              { id: '350000', name: '福建', value: 10, comName: '中国移动通信集团终端有限公司安徽分公司' },
              { id: '360000', name: '江西', value: 0 },
              { id: '370000', name: '山东', value: 0 },
              { id: '410000', name: '河南', value: 0 },
              { id: '430000', name: '湖南', value: 0 },
              { id: '440000', name: '广东', value: 0 },
              { id: '450000', name: '广西', value: 0 },
              { id: '460000', name: '海南', value: 0 },
              { id: '520000', name: '贵州', value: 0 },
              { id: '530000', name: '云南', value: 0 },
              { id: '540000', name: '西藏', value: 0 },
              { id: '610000', name: '陕西', value: 0 },
              { id: '620000', name: '甘肃', value: 0 },
              { id: '640000', name: '宁夏', value: 0 },
              { id: '120000', name: '天津', value: 0 },
              { id: '500000', name: '重庆', value: 0 },
              { id: '810000', name: '香港', value: 0 },
              { id: '820000', name: '澳门', value: 0 },
            ],
          },
        ],
        textStyle: {
          color: '#fff',
        },
        legend: {
          textStyle: {
            color: '#fc1',
          },
        },
      }
      this.chartOption = chartOption
      const _this = this
      this.chinachart.on('click', (params) => {
        // _this.$message.info(`钻取参数：${JSON.stringify(params.data)}`)
        _this.$emit('elementClick', params)
      })
      this.chinachart.setOption(this.chartOption)
    },
  },
}
</script>

<style>
</style>