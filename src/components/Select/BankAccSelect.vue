<script>
import { initDefaultProps } from '@/utils/util'
import { getBizAccByCorpIdList } from '@/api/businessBasic'
import { getBasicAccByCorpIdList } from '@/api/businessBasic'

import S from 'ant-design-vue/es/select'
export default {
  name: 'BankAccSelect',
  props: Object.assign({}, S.props, {
    value: {
      required: true,
    },
    isBasic: {
      // 是否是基础管理 查全量列表
      default: false,
    },
    localStyle: {
      type: [Object],
      default: () => ({}),
    },
    allowClear: {
      default: true,
    },
  }),
  data() {
    return { selectOptions: [], localValue: undefined }
  },
  mounted() {
    // 默认查全量账号
    this.initOptions()
  },
  watch: {
    value: {
      handler(nv, ov) {
        this.localValue = nv
      },
      immediate: true,
    },
    localValue(nv, ov) {
      this.$emit('change', nv)
      this.$emit('input', nv)
    },
  },
  methods: {
    updateOptions(corpId) {
      this.localValue = undefined
      this.initOptions(corpId)
    },
    initOptions(corpId) {
      let optionsApi = null
      const reqData = { corpId }
      if (this.isBasic) {
        optionsApi = getBasicAccByCorpIdList // 基础工程  不需要传递menuId
      } else {
        optionsApi = getBizAccByCorpIdList
        reqData.menuId = this.$route.meta.menuId
      }
      optionsApi(reqData).then((res) => {
        this.selectOptions = []
        if (res.status === 0) {
          this.selectOptions = res.data
        }
      })
    },
  },
  render(h) {
    const selectProps = initDefaultProps(Object.keys(S.props), this)
    return (
      <a-select {...{ props: selectProps }} v-model={this.localValue} style={this.localStyle}>
        {this.selectOptions.map((opt) => (
          <a-select-option key={opt.bankAcc} value={opt.bankAcc}>
            {opt.bankAcc}
          </a-select-option>
        ))}
      </a-select>
    )
  },
}
</script>

<style scoped>
</style>