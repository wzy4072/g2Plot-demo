<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <temp1></temp1>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import temp1 from '@/views/user/Temp1'

export default {
  components: {
    temp1
  },
  /*mixins: [AppDeviceEnquire, i18nMixin],*/
  data() {
    return {
      /*locale: {}*/
      locale: zhCN,
      moment
    }
  },

  computed: {}
}
</script>
