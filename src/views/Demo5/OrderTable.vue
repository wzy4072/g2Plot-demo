<template>
  <dv-scroll-board :config="config" style="width: 456px; height: 220px" />
</template>

<script>
import { scrollBoard } from '@jiaminghi/data-view'
import Vue from 'vue'
Vue.use(scrollBoard)
export default {
  data() {
    return {
      config: {
        header: ['省份', '指令数量', '统计'],
        data: [
          ['某某省某公司', '行1列2', '5条'],
          ['某某省某公司', '行2列2', '5条'],
          ['某某省某公司', '行3列2', '5条'],
          ['某某省某公司', '行4列2', '5条'],
          ['某某省某公司', '行5列2', '5条'],
          ['某某省某公司', '行6列2', '5条'],
          ['某某省某公司', '行7列2', '5条'],
          ['某某省某公司', '行8列2', '5条'],
          ['某某省某公司', '行9列2', '5条'],
          ['某某省某公司', '行10列2', '5条'],
        ],
        index: true,
        columnWidth: [50],
        align: ['center'],
        // carousel: 'page',
        oddRowBGC: 'rgb(3 64 85 / 51%)',
        headerBGC	:'rgb(20 54 113 / 46%)',
        evenRowBGC: 'rgb(20 54 113 / 46%)',
      },
    }
  },
}
</script>

<style>
</style>