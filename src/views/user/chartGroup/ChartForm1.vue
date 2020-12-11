<template>
  <a-form ref="formRegister" :form="form" id="formRegister">
    <a-form-item label="支行列表">
      <a-select v-decorator="['corpId', { rules: [{ required: true, message: '不能为空' }] }]">
        <a-select-option v-for="o in optionList1" :value="o.id" :key="o.id">{{o.label}}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="其他参数">
      <!-- <a-select v-decorator="['corpId2']">
        <a-select-option v-for="o in optionList2" :value="o.id" :key="o.id">{{o.label}}</a-select-option>
      </a-select>-->
      ...
    </a-form-item>
    <a-form-item>
      <a-button @click="goSubmit">查询</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      optionList1: [
        { label: '贵阳金龙国际支行 (贵州省贵阳市观山湖区金阳北路348号)', id: '111' },
        { label: '宝山支行 (贵州省贵阳市南明区观水路46号)', id: '222' },
        { label: '花溪支行 (贵阳市花溪区花溪大道3078号)', id: '333' },
        { label: '北京路支行 (贵州省贵阳市云岩区北京路4号)', id: '444' },
        { label: '友谊支行 贵州省贵阳市云岩区友谊1-7号)', id: '555' },
        { label: '贵阳会展城支行 (会展东路与长岭北路交叉口西北100米)', id: '666' },
        { label: '修文支行 (龙场镇朝阳路1栋1层)', id: '777' }
      ],
      optionList2: [
        { label: '大额存取业务', id: '123' },
        { label: '密码修改业务', id: '234' },
        { label: '开户业务', id: '23465' },
        { label: '信用卡办理业务', id: '4356' },
        { label: '房贷业务', id: '567' },
        { label: '对公大额转账业务', id: '5678' }
      ],
      form: this.$form.createForm(this)
    }
  },
  methods: {
    goSubmit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          const selectedOpt = this.optionList1.filter(item => item.id === values.corpId)[0]
          this.$emit('ok', selectedOpt)
        }
      })
    }
  }
}
</script>

<style>
</style>