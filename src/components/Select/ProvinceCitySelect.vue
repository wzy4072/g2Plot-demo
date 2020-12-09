<script>
import { getProvinceList, getCityList } from '@/api/businessBasic'
import { initDefaultProps } from '@/utils/util'
import C from 'ant-design-vue/es/cascader'
// import FT from 'ant-design-vue/es/form/FormItem'
export default {
  props: Object.assign({}, C.props, {
    value: {
      type: Array,
      required: true,
    },
  }),
  watch: {
    value: {
      async handler(nv, ov) {
        if (nv.join(',') === ov.join(',')) return
        this.localValue = [...nv]
        // // 首次加载 以及 外部值主动变化 的情况处理
        if (nv[0] && nv[1]) {
          if (this.value[0] && this.value[1]) {
            const selectedOptions = this.localoptions.filter((item) => item.value === this.value[0])
            this.localloadData(selectedOptions)
          }
        }
      },
      deep: true,
    },
    localValue(nv) {
      console.log('localValueChange', nv)
      this.$emit('input', nv)
      this.$emit('change', nv)
    },
  },
  data() {
    return {
      localValue: [],
      localoptions: [],
      hasChildrenPids: {},
    }
  },
  async created() {},
  async mounted() {
    this.localoptions = await this.getProvinceList()
    if (this.value[0] && this.value[1]) {
      const selectedOptions = this.localoptions.filter((item) => item.value === this.value[0])
      this.localloadData(selectedOptions)
    }
  },
  methods: {
    getProvinceList() {
      return getProvinceList().then((res) => {
        if (res.status === 0) {
          return res.data.map((item) => ({
            label: item.provinceName,
            value: item.provinceId,
            isLeaf: false,
          }))
        }
      })
    },
    getCityList(parentId) {
      return getCityList({ parentId }).then((res) => {
        if (res.status === 0) {
          return res.data.map((item) => ({ label: item.cityName, value: item.cityId }))
        }
      })
    },
    async localloadData(selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1]
      targetOption.loading = true
      targetOption.children = await this.getCityList(targetOption.value)
      targetOption.loading = false
      this.localoptions = [...this.localoptions]
    },
  },
  render() {
    const cascaderProps = initDefaultProps(Object.keys(C.props), this)
    cascaderProps.options = this.localoptions
    cascaderProps['load-data'] = this.localloadData
    return <a-cascader {...{ props: cascaderProps, placeholder: '选择省市' }} v-model={this.localValue}></a-cascader>
  },
}
</script>

<style>
</style>