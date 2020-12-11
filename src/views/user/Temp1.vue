<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left"></div>
        <div class="mh-middle">营收资金稽核</div>
        <div class="mh-right">
          <dv-border-box-2
            @click.native="timeout = !timeout"
            style="width: 120px; height: 50px; line-height: 50px; text-align: center; margin-left: 200px;cursor: pointer;"
          >{{ timeout ? '关闭' : '打开' }}自动更新</dv-border-box-2>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <div class="title1">代理商划扣失败预警</div>
          <Pie1></Pie1>
          <div class="title1">电子渠道营业收入分布</div>
          <Pie2></Pie2>
          <div class="title1">政企渠道大额欠款</div>
          <Pie3></Pie3>
          <TinyLine></TinyLine>
        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
              <ChinaMap
                @elementClick="
            (v) => {
              barTitle3 = v.name
            }
          "
              ></ChinaMap>
            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">
                <p class="title2">直营店营业收入</p>
                <Column1></Column1>
              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <p class="title2">直营店尾款情况(前五)</p>

                <Column2></Column2>
              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">
            <Pie :autoUpdate="timeout" :params="barTitle" :innerRadius="innerRadius"></Pie>
            <Pie :autoUpdate="timeout" :params="barTitle3" :innerRadius="innerRadius"></Pie>
            <Pie :autoUpdate="timeout" :params="'白酒'" :innerRadius="0"></Pie>
            <Pie :autoUpdate="timeout" :params="barTitle2" :innerRadius="0"></Pie>
          </dv-border-box-4>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import Bar from './AntvCharts/Bar'
import Pie from './AntvCharts/Pie'
import TinyLine from './AntvCharts/TinyLine'
import Gauge from './AntvCharts/Gauge'
import BidirectionalBar from './AntvCharts/BidirectionalBar'
import Radar from './AntvCharts/Radar'

import Column1 from './T1/Column1'
import Column2 from './T1/Column2'
import Pie1 from './T1/Pie1'
import Pie2 from './T1/Pie2'
import Pie3 from './T1/Pie3'

import ChinaMap from './ChinaMap'
export default {
  name: 'DataView',
  components: {
    Bar,
    Pie,
    TinyLine,
    Gauge,
    BidirectionalBar,
    Radar,
    ChinaMap,
    Column1,
    Column2,
    Pie1,
    Pie2,
    Pie3
  },
  data() {
    return {
      timeout: false,
      barTitle: null,
      barTitle2: null,
      barTitle3: null,
      innerRadius: 0.6
    }
  }
}
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url('~@/assets/globalbg.png');
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);

      a:visited {
        color: rgb(1, 134, 187);
      }
    }

    .mh-middle {
      font-size: 30px;
    }

    .mh-left,
    .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: calc(~'100% - 80px');

    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 65%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
.chart-title {
  color: #fff;
  text-align: center;
  font-size: 19px;
  line-height: 18px;
  padding: 16px 0;
}
.title1 {
  font-size: 18px;
  color: #2862b7;
  text-align: center;
  margin-top: 8px;
  font-weight: 600;
}
p.title2 {
  font-size: 18px;
  writing-mode: tb-rl;
  word-spacing: 23px;
  color: #2862b7;
  font-weight: 600;

  letter-spacing: 4px;
  text-align: center;
}
</style>
