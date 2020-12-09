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

/*import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'*/
/*import { AppDeviceEnquire } from '@/utils/mixin'
import i18n from '@/locales'
import i18nMixin from '@/store/i18n-mixin'*/

export default {
  /*mixins: [AppDeviceEnquire, i18nMixin],*/
  data() {
    return {
      /*locale: {}*/
      locale: zhCN,
      moment,
    }
  },
  /*created () {
    this.$watch('currentLang', () => {
      this.locale = i18n.getLocaleMessage(this.currentLang).antLocale
    })
  },*/
  computed: {
    /*locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))
console.log(this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale)
      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    }*/
  },
}
</script>
