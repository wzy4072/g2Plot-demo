<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left"></div>
        <div class="mh-middle">大屏DEMO</div>
        <div class="mh-right">
          <dv-border-box-2
            @click.native="timeout = !timeout"
            style="width: 120px; height: 50px; line-height: 50px; text-align: center; margin-left: 200px;cursor: pointer;"
          >{{ timeout ? '关闭' : '打开' }}自动更新</dv-border-box-2>
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <Gauge></Gauge>
          <Gauge></Gauge>
          <Radar :autoUpdate="timeout"></Radar>
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
                <BidirectionalBar
                  :autoUpdate="timeout"
                  @elementClick="
            (v) => {
              barTitle2 = v.country
            }
          "
                ></BidirectionalBar>
              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Bar
                  :autoUpdate="timeout"
                  @elementClick="
            (v) => {
              barTitle = v.type
            }
          "
                ></Bar>
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
    ChinaMap
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
</style>
