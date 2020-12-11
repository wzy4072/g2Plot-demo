export default {
  props:{
    props: {
      autoUpdate: {
        type: Boolean,
        default: false
      }
    },
  },
  data() {
    return {
      callBacks: {
        element: (e) => {
          const {
            data: { data: params },
          } = e
          this.$message.info(`钻取参数：${JSON.stringify(params)}`)
          this.$emit('elementClick', params)
        },
      },
    }
  },
  methods: {
    bindFunctions() {

      this.chart.on('element:click', this.callBacks.element)

    }
  }
}