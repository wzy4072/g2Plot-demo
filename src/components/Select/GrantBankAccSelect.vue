<script>
import { initDefaultProps } from '@/utils/util'
import { getGrantBankAcc } from '@/api/businessBasic'

import S from 'ant-design-vue/es/select'
export default {
  name: 'GrantBankAccSelect',
  props: Object.assign({}, S.props, {
    value: {
      required: true,
    },
    permission:{
      required:true
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
      this.localValue = ''
      this.initOptions(corpId)
    },
    initOptions(corpId) {
      this.selectOptions = []
      var params = {corpId: corpId,
        menuId: this.$route.meta.menuId,
        permission: this.permission}
      getGrantBankAcc(params).then((res) => {
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