<template>
  <div>
    <Column1></Column1>
    <Column2></Column2>
    <Pie1></Pie1>
    <Pie2></Pie2>
    <Pie3></Pie3>
  </div>
</template>

<script>
import Column1 from './T1/Column1'
import Column2 from './T1/Column2'
import Pie1 from './T1/Pie1'
import Pie2 from './T1/Pie2'
import Pie3 from './T1/Pie3'

export default {
  components: {
    Column1,
    Pie1,
    Pie2,
    Pie3,
    Column2
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>