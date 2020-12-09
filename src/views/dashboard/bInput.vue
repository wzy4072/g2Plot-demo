<template>
  <a-input v-model="localValue"></a-input>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      localValue: null,
    }
  },
  watch: {
    value: {
      handler(nv) {
        this.localValue = nv
      },
      immediate: true,
    },
    localValue(nv) {
      console.log(1)
      this.$emit('input', nv)
      this.$emit('change', nv)
    },
  },
}
</script>

<style>
</style>