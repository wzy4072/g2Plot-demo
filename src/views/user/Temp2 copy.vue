<template>
  <div >
    <a-row>
      <a-col :span="12" style="height:500px;">
        <ChinaMap></ChinaMap>
      </a-col>
      <a-col :span="12"  style="height:500px;">
        <CityMap></CityMap>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ChinaMap from './ChinaMap'
import CityMap from './CityMap2'
export default {
  components: {
    ChinaMap,
    CityMap
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>