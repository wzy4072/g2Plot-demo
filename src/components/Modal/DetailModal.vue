<template>
  <a-modal  :maskClosable="false" :title="title" :visible="visible" @cancel="visible = false" width="50%">
    <a-row>
      <template v-for="item in infoList">
        <a-col :key="item.index + 'l'" :span="labelSpan" class="item-control item-label">{{ item.label }}</a-col>
        <a-col :key="item.index + 'v'" :span="valueSpan" class="item-control">{{ item.value }}</a-col>
      </template>
    </a-row>
    <template slot="footer">
      <a-button type="primary" @click="visible = false">关闭</a-button>
    </template>
  </a-modal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      infoList: [],
      labelSpan: 4,
      valueSpan: 8,
    }
  },
  methods: {
    show(infoList) {
      this.infoList = []
      this.infoList = infoList
      this.visible = true
    },
  },
}
</script>

<style  scoped>
.item-control {
  display: inline-block;
  overflow: hidden;
  line-height: 40px;
  white-space: nowrap;
  min-height: 40px;
  vertical-align: middle;
}
.item-label {
  text-align: right;
  padding-right: 8px;
}
.item-label::after {
  content: ':';
  position: relative;
  top: -0.5px;
  margin: 0 8px 0 2px;
}
</style>
