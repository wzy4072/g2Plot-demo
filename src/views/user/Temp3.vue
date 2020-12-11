<template>
      <a-row>
        <a-col :span="8">
          <TransitionWin></TransitionWin>
        </a-col>
        <a-col :span="8">8</a-col>
        <a-col :span="8">8</a-col>
      </a-row>
</template>

<script>
import TransitionWin from './chartGroup/TransitionWin'
export default {
  components: {
    TransitionWin
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>