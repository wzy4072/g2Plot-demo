<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-left"></div>
        <div class="mh-middle">移动终端</div>
        <div class="mh-right">
          <dv-border-box-2
            @click.native="timeout = !timeout"
            style="
              width: 120px;
              height: 50px;
              line-height: 50px;
              text-align: center;
              margin-left: 200px;
              cursor: pointer;
            "
            >{{ timeout ? '关闭' : '打开' }}自动更新</dv-border-box-2
          >
        </div>
      </div>

      <dv-border-box-1 class="main-container">
        <dv-border-box-3 class="left-chart-container">
          <!-- <Gauge></Gauge>
          <Gauge></Gauge>
          <Radar :autoUpdate="timeout"></Radar>
          <TinyLine></TinyLine> -->
        </dv-border-box-3>

        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-3 class="rmctc-left-container">
              <div class="order-title">指令发送（近一周）</div>
              <ChinaMap @elementClick="ChinaMapOnClick"></ChinaMap>
            </dv-border-box-3>

            <div class="rmctc-right-container">
              <dv-border-box-3 class="rmctc-chart-1">
                <!-- <div class="order-title">指令发送（近一周）</div> -->
                <!-- <OrderTable></OrderTable> -->
              </dv-border-box-3>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <!-- <Bar
                  :autoUpdate="timeout"
                  @elementClick="
                    (v) => {
                      barTitle = v.type
                    }
                  "
                ></Bar> -->
              </dv-border-box-4>
            </div>
          </div>

          <dv-border-box-4 class="rmc-bottom-container">
            <!-- <Pie :autoUpdate="timeout" :params="barTitle" :innerRadius="innerRadius"></Pie>
            <Pie :autoUpdate="timeout" :params="barTitle3" :innerRadius="innerRadius"></Pie>
            <Pie :autoUpdate="timeout" :params="'白酒'" :innerRadius="0"></Pie>
            <Pie :autoUpdate="timeout" :params="barTitle2" :innerRadius="0"></Pie> -->
          </dv-border-box-4>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
    <OrderDetailListModal ref="OrderDetailListModal"></OrderDetailListModal>
  </div>
</template>

<script>
import Bar from '@/views/user/AntvCharts/Bar'
import Pie from '@/views/user/AntvCharts/Pie'
import TinyLine from '@/views/user/AntvCharts/TinyLine'
import Gauge from '@/views/user/AntvCharts/Gauge'
import Radar from '@/views/user/AntvCharts/Radar'
import OrderTable from './OrderTable'
import ChinaMap from './ChinaMap'
import OrderDetailListModal from './OrderDetailListModal'
export default {
  name: 'Demo5',
  components: {
    Bar,
    Pie,
    TinyLine,
    Gauge,
    Radar,
    ChinaMap,
    OrderTable,
    OrderDetailListModal,
  },
  data() {
    return {
      timeout: false,
      barTitle: null,
      barTitle2: null,
      barTitle3: null,
      innerRadius: 0.6,
    }
  },
  methods: {
    ChinaMapOnClick({ data }) {
      if (data.value > 0) {
        this.$refs.OrderDetailListModal.show({ data, title: `${data.comName} 失败指令详情` })
      } else {
        this.$message.info('该分公司没有失败指令！')
      }
    },
    //
  },
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
      flex-wrap: wrap;
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
    height: 100%;
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
.order-title {
  left: 47px;
  position: absolute;
  top: 40px;
  font-size: 16px;
  color: #2862b7b8;

  // width: 100%;
  // display: block;
  // padding: 6px 0;
  // text-align: center;
  // font-size: 17px;
  // color: #2862b7b8;
}
</style>
