<template>
  <a-button type="primary" @click="downloadFile">导出</a-button>
</template>

<script>
// 前端导出 根据查询条件 表头 前端组装导出
import { form2param } from '@/utils/util'
import { export_json_to_excel } from './Export2Excel.js'

// 使用方式
//       <ExportExcel fileName="xxx666" :form="form" :listApi="dataHandles.listApi" :columns="columns"></ExportExcel>
// function formatJson(filterVal, jsonData) {
//   return jsonData.map((v) =>
//     filterVal.map((j) => {
//       return v[j]
//     })
//   )
// }

export default {
  name: 'DownloadByParam',
  props: {
    fileName: {
      type: String,
      required: true,
    },
    // form 非必选 但是有格式要求
    form: {
      type: Object,
      default: null,
      validator: function (value) {
        if (value && !value.getFieldsValue) {
          console.error("DownloadByParam.form is't decorator Object!")
          return false
        }
        return true
      },
    },
    listApi: {
      type: Function,
      required: true,
      // validator: function (value) {
      //   if (Object.prototype.toString.call(value) !== '[object Promise]') {
      //     console.error("s-table.props.dataHandles.listApi is't Promise!")
      //     return false
      //   }
      // },
    },
    columns: {
      type: Array,
      required: true,
    },
    handleRequest: {
      type: Function,
      default: (queryParams) => queryParams,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    downloadFile() {
      // console.log(this.form.getFieldsValue())
      let queryParams = this.form ? form2param(this.form.getFieldsValue()) : {}
      if (this.handleRequest) queryParams = this.handleRequest(queryParams)
      this.listApi(queryParams)
        .then((res) => {
          if (res.code === 0) {
            const exportData = this.initExcelData(res.data)
            this.handleDownload(exportData)
          } else {
            this.$message.error('导出数据查询失败！')
          }
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    initExcelData(dataSource) {
      if (dataSource.length === 0) {
        this.$message.info('无可导出内容！')
        return false
      }
      const tHeader = ['序号']
      const filterVal = []
      this.columns.map((rowConf) => {
        if (rowConf.dataIndex && rowConf.title) {
          tHeader.push(rowConf.title)
          filterVal.push(rowConf.dataIndex)
        }
      })
      const listDataScouce = dataSource.map((row, i) => {
        const nrow = [i + 1]
        filterVal.map((key) => {
          nrow.push(row[key])
        })
        return nrow
      })
      filterVal.unshift('_index')
      return { tHeader, filterVal, data: listDataScouce }
    },
    handleDownload({ tHeader, filterVal, data }) {
      // debugger
      //   const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
      //   const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
      export_json_to_excel({
        header: tHeader,
        data,
        filename: this.fileName,
        autoWidth: true,
        bookType: 'xlsx',
      })
    },
  },
}
</script>

<style>
</style>