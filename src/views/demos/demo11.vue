<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <a-row>
        <a-col :span="12">
          <a-form
            :form="form"
            :labelCol="{ lg: { span: 7 }, sm: { span: 7 } }"
            :wrapperCol="{ lg: { span: 13 }, sm: { span: 17 } }"
            :class="['user-modal', !isEdit && 'detai-modal']"
          >
            <a-form-item label="金额">
              <a-input v-decorator="['userName']" />
            </a-form-item>

            <a-form-item label="支付方式">
              <a-radio-group v-decorator="[
                'userSts',
              ]">
                <a-radio value="N">支付方式</a-radio>
                <a-radio value="S">网银行汇款单选</a-radio>
              </a-radio-group>
            </a-form-item>

            <a-form-item label="日结日期">
              <a-date-picker v-decorator="['bb']" />
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>

      <a-button @click="handleSubmit" type="primary" :loading="loading">提交</a-button>
      <a-button @click="resetForm" style="margin-left:8px;">重置</a-button>
    </a-card>
  </page-header-wrapper>
</template>

<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      isEdit: false,
      initialValues: {},
      title: '',
      idTypeOptions: [],
      loading: false
    }
  },
  methods: {
    handleSubmit() {},
    resetForm() {}
  }
}
</script>

<style  scoped>
</style>