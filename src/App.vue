<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
export default {
  /*mixins: [AppDeviceEnquire, i18nMixin],*/
  data() {
    return {
      /*locale: {}*/
      locale: zhCN,
      moment,
    }
  },

  computed: {},
}
</script>
