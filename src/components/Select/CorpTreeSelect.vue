<script>
import { getBizCorpTree } from '@/api/businessBasic'
import { getBasicCorpList } from '@/api/businessBasic'

import { flat2Tree, initDefaultProps } from '@/utils/util'
import S from 'ant-design-vue/es/tree-select'
// import FT from 'ant-design-vue/es/form/FormItem'
function setRealPid(list) {
  const ids = list.map((item) => item.corpId)
  return list.map((item) => {
    if (ids.includes(item.parentId)) {
      return { ...item }
    } else {
      const pids = item.parentIds.split(',')
      let pid = '0'
      for (let i = 0; i < pids.length; i++) {
        if (ids.includes(pids[i])) {
          pid = pids[i]
          break
        }
      }
      return { ...item, parentId: pid }
    }
  })
}

export default {
  name: 'CorpTreeSelect',
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
    dropdownStyle: {
      default: () => ({ maxHeight: '400px', overflow: 'auto' }),
    },
    treeDefaultExpandAll: {
      default: true,
    },
    replaceFields: {
      default: () => ({ children: 'children', title: 'corpName', key: 'corpId', value: 'corpId' }),
    },
  }),
  data() {
    return {
      isInited: false,
      localTreeData: [],
      // localValue: this.value,
    }
  },

  mounted() {
    this.initOptions()
  },
  methods: {
    initOptions() {
      let optionsApi = null
      const reqData = {}
      if (this.isBasic) {
        optionsApi = getBasicCorpList // 基础工程的单位接口 不需要传递menuId
      } else {
        optionsApi = getBizCorpTree
        reqData.menuId = this.$route.meta.menuId
      }
      optionsApi(reqData).then((res) => {
        this.localTreeData = []
        if (res.status !== 0) return
        if (this.isBasic) {
          this.localTreeData = res.data
          return
        } else {
          const finalList = setRealPid(res.data)
          this.localTreeData = flat2Tree({ list: finalList, pid: '0', idNa: 'corpId', pidNa: 'parentId' })
        }
      })
    },
    handleChange(v) {
      this.$emit('change', v)
    },
  },
  render() {
    const treeSelectProps = initDefaultProps(Object.keys(S.props), this)
    return (
      <a-tree-select
        {...{ props: treeSelectProps }}
        value={this.value}
        style={this.localStyle}
        treeData={this.localTreeData}
        onchange={this.handleChange}
      >
        {Object.keys(this.$slots).map((name) => (
          <template slot={name}>{this.$slots[name]}</template>
        ))}
      </a-tree-select>
    )
  },
}
</script>

<style>
</style>