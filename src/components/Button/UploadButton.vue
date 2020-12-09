<template>
  <el-upload
    style="float: left;"
    :action="requestUrl"
    :headers="headers"
    :on-success="success"
    :on-error="fail"
    :before-upload="beforeUpload"
    :http-request="uploadFile"
    :auto-upload="autoUpload"
    :show-file-list="showFileList"
    :accept="acceptFileType"
    :data="data"
    :name="name"
  >
    <el-button type="primary" icon="el-icon-upload">{{ title }}</el-button>
  </el-upload>
</template>

<script>
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export default {
  props: {
    requestUrl: {
      type: String,
      required: true
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    acceptFileType: {
      type: String,
      default: '.xlsx'
    },
    data: {
      type: Object,
      default: null
    },
    showFileList: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '点击上传'
    },
    name: {
      type: String,
      default: 'file'
    }
  },
  data() {
    return {
      headers: {
        Authorization: getToken()
        // Content-Type : "multipart/form-data"
      }
    }
  },
  methods: {
    uploadFile(file) {
      var data = new FormData()
      data.append(this.name, file.file)
      request({
        url: this.requestUrl,
        method: 'post',
        data
      }).then((res) => {
        this.$emit('afterUpload', res)
      })
    },
    success(response, file, fileList) {
      this.$message({
        message: response.msg,
        duration: 3
      })
    },
    fail(response, file, fileList) {
      this.$message({
        message: response.msg,
        duration: 3
      })
    },
    beforeUpload(file) {
      console.log(file)
    }
  }
}
</script>
