<script>
// import { downloadTemplateByQuery } from '@/api/common'
import buttonTypes from 'ant-design-vue/es/button/buttonTypes'
export default {
  props: Object.assign({}, buttonTypes(), {
    beforRequest: {
      type: Function,
      required: true,
      default: () => ({}),
    },
    fileName: {
      type: String,
      default: '模板',
    },
  }),
  data() {
    return {}
  },
  methods: {
    downloadFile() {
      // const queryParams = this.beforRequest()
      // downloadTemplateByQuery(queryParams)
      //   .then((res) => {
      //     if (res.status === 200) {
      //       const data = res.data
      //       if (!data) {
      //         console.error('导出/下载 失败，解析数据为空！')
      //         return
      //       }
      //       const url = window.URL.createObjectURL(new Blob([data]))
      //       const link = document.createElement('a')
      //       link.style.display = 'none'
      //       link.href = url
      //       link.setAttribute('download', this.fileName)
      //       document.body.appendChild(link)
      //       link.click()
      //     } else {
      //       console.error('下载/导出失败，请尝试重新导出')
      //     }
      //   })
      //   .catch(function (error) {
      //     console.error(error)
      //   })
    },
  },
  render() {
    return (
      <a-button {...{ props: this.props }} onclick={this.downloadFile}>
        {this.$slots.default}
      </a-button>
    )
  },
}
</script>

<style>
</style>