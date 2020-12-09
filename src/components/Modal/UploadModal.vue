<template>
  <a-modal :maskClosable="false" :title="title" :visible="visible" @cancel="handleCancel" width="50%">
    <a-upload :file-list="fileList" :before-upload="beforeUpload">
      <a-button> <a-icon type="upload" /> 选择文件 </a-button>
    </a-upload>

    <!-- <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </a-button> -->

    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="合格数据">
        <a-table :columns="columns" :data-source="successDataSource" rowKey="id" :pagination="false"> </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="错误数据">
        <a-table :columns="columns" :data-source="errorDataSource" rowKey="id" :pagination="false"> </a-table>
      </a-tab-pane>
    </a-tabs>

    <template slot="footer">
      <a-button @click="handleOk" type="primary">提交</a-button>
      <a-button @click="visible = false">关闭</a-button>
    </template>
  </a-modal>
</template>

<script>
// const columns = [
//   { type: 'index', title: '序号', width:65,  customRender: (text, record, index) => index + 1 },
//   { dataIndex: 'bankCode', title: '联行号' },
//   { dataIndex: 'bankName', title: '开户行名称' },
//   { dataIndex: 'format', title: '支付渠道', customRender: (text) => formatLabel[text] },
//   { dataIndex: 'drecCode', title: '清算行号' },
// ]
import { preImport } from '@/api/common'
export default {
  name: 'UploadModal',
  components: {},
  props: {
    columns: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      // columns: columns,
      successDataSource: [],
      errorDataSource: [],
      // title: '费用代发导入',
      fileList: [],
      uploading: false,
      uploadParams: {},
    }
  },
  methods: {
    show(info) {
      this.visible = true
      this.uploadParams = info.uploadParams
      this.initData()
    },
    initData() {
      this.fileList = []
    },
    handleRemove(file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [file]
      // return false
      this.handleUpload()
    },
    handleUpload() {
      const { fileList } = this
      const formData = new FormData()
      formData.append('importFile', fileList[0])
      for (const k in this.uploadParams) {
        formData.append(k, this.uploadParams[k])
      }
      this.uploading = true
      preImport(formData).then((res) => {
        this.$message.error('数据校验放到后端，等待接口调整！暂时只做展示！')
        this.successDataSource = res.data.mapList
        this.fileList = []
        this.uploading = false
      })
    },

    handleOk() {
      this.visible = false
      // this.$emit('ok', this.selectedRow)
    },
    handleCancel() {
      this.visible = false
    },
  },
}
</script>

<style>
</style>