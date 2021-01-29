<template>
  <a-row>
    滚动小窗口方案
    <a-row>
      <a-col :span="8">
        <TransitionWin></TransitionWin>
      </a-col>
      <a-col :span="8">8</a-col>
      <a-col :span="8">8</a-col>
    </a-row>
  </a-row>
</template>

<script>
import TransitionWin from './TransitionWin'
export default {
  components: {
    TransitionWin,
  },
  data() {
    return {}
  },
}
</script>

<style>
</style>