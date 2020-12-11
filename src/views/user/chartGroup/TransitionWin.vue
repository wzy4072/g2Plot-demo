<template>
  <div style="width: 100%;overflow: hidden;">
    <a-row
      style="width:300%;"
      :class="{'move-win':true,'move-win-l':activeKey ===1,'move-win-r':activeKey ===3}"
    >
      <a-col :span="8">
        <div style="font-size:16px;">
          {{params.label}}
          月内
          <span style="color:#008dff;">{{detailParam.type}}</span>业务趋势
        </div>
        <VocationalLine :params="detailParam.type"></VocationalLine>

        <a-button @click="activeKey = 2">返回</a-button>
      </a-col>
      <a-col :span="8">
        <div style="font-size:16px;">
          <span style="color:#008dff;">{{params.label}}</span>业务预览
        </div>

        <VocationalBar :params="params.label" @ok="setDetail"></VocationalBar>
        <!-- 参数：{{params.label}} -->
        <a-button @click="activeKey = 3">重置参数</a-button>
      </a-col>
      <a-col :span="8">
        <ChartForm1 @ok="getParams"></ChartForm1>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ChartForm1 from './ChartForm1'
import VocationalBar from './VocationalBar'
import VocationalLine from './VocationalLine'
export default {
  components: {
    ChartForm1,
    VocationalBar,
    VocationalLine
  },
  data() {
    return {
      activeKey: 2,
      params: { label: '宝山支行 (贵州省贵阳市南明区观水路46号)' },
      detailParam: {}
    }
  },
  methods: {
    getParams(q) {
      this.activeKey = 2
      this.params = q
    },
    setDetail(v) {
      this.activeKey = 1
      this.detailParam = v
    }
  }
}
</script>

<style>
.move-win {
  transition: transform 0.5s ease;
  transform: translateX(-33.333%);
}
.move-win-l {
  transform: translateX(0);
  /* opacity: 0; */
}
.move-win-r {
  transform: translateX(-66.666%);
  /* opacity: 0; */
}
</style>