<template>
  <div>
    <a-row :gutter="24">
      <a-col :sm="24" :md="8" :xl="8">
        <a-card class="dash-card">
          <a-descriptions title="用户信息" :column="1">
            <a-descriptions-item label="单位名称"> {{ currentUser.corpName }} </a-descriptions-item>
            <a-descriptions-item label="用户姓名"> {{ currentUser.userName }} </a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-col>
      <!-- <a-col :sm="24" :md="8" :xl="8">-->
      <!--<a-card class="dash-card">-->
      <!--<p class="ant-descriptions-title">常用菜单</p>-->
      <!--balabala-->
      <!--</a-card>-->
      <!--</a-col> -->
      <a-col :sm="24" :md="8" :xl="8">
        <a-card class="dash-card">
          <p class="ant-descriptions-title">待处理</p>
          <a-row :gutter="16">
            <a-col
              :span="8"
              class="dash-btn"
              @click="$router.push({ path: '/businessBasic/workflow/approve/takenbalk' })"
            >
              <a-spin :spinning="todoSpinning">
                <a-statistic title="待办事项" :value="todoValue"> </a-statistic> </a-spin
            ></a-col>
            <a-col
              :span="8"
              class="dash-btn"
              @click="$router.push({ path: '/businessBasic/workflow/approve/finishedBalk' })"
            >
              <a-spin :spinning="finishedSpinning">
                <a-statistic title="已办事项" :value="finishedValue"> </a-statistic> </a-spin
            ></a-col>
            <a-col
              :span="8"
              class="dash-btn"
              @click="$router.push({ path: '/businessBasic/workflow/approve/trackPage' })"
            >
              <a-spin :spinning="trackSpinning">
                <a-statistic title="流程跟踪" :value="trackValue" style=""> </a-statistic> </a-spin
            ></a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>

    <!-- <a-button @click="testPrint">testPrint</a-button>
    <a-button @click="testPrint2">testPrint2</a-button>
    <a-button @click="testPrint3">testPrint3</a-button> -->
    <!-- 
    <a-form :form="form">
      <a-button
        @click="form.setFieldsValue({ corpId: '35d3b5444ce248e3a06bb3851c5b7533', bankAcc: '986325744200063523' })"
        >setFieldsValue</a-button
      >
      <a-button @click="validateForm">validate</a-button>
    </a-form> -->
    <!-- {{ tempProvince }} -->
    <!-- <ProvinceCitySelect2 v-model="tempProvince"></ProvinceCitySelect2> -->
  </div>
</template>

<script>
import { todoPage, finishedNumber, trackPage } from '@/api/workflow'

import { getUserInfo } from '@/utils/util'
import { BasicLayout, BlankLayout, PageView, RouteView } from '@/layouts'
import bInput from './bInput'
import print from 'print-js'
const someJSONdata = [
  {
    name:
      'John DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn DoeJohn Doe',
    email: 'john@doe.com',
    phone: '111-111-1111',
  },
  {
    name: 'Barry Allen',
    email: 'barry@flash.com',
    phone: '222-222-2222',
  },
  {
    name: 'Cool Dude',
    email: 'cool@dude.com',
    phone: '333-333-3333',
  },
]

export default {
  name: 'Dashboard',
  components: {},
  data() {
    return {
      todoSpinning: true,
      finishedSpinning: true,
      trackSpinning: true,
      todoValue: 0,
      finishedValue: 0,
      trackValue: 0,
      currentUser: getUserInfo(),
      form: this.$form.createForm(this),
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    //----------------------------temp

    validateForm() {
      this.form.validateFields((err, values) => {
        console.log(values)
      })
    },
    testPrint() {
      printJS({
        printable: someJSONdata,
        properties: ['name', 'email', 'phone'],
        type: 'json',
        header: 'Multiple Images',
        gridHeaderStyle: 'color: red;  border: 2px solid #3971A5;',
        gridStyle: 'border: 2px solid #3971A5;',
      })
    },
    testPrint2() {
      printJS({
        printable: someJSONdata,
        properties: [
          {
            field: 'name',
            displayName:
              'Full Name  name  name name name name name name name name name name name name name name name name',
          },
          { field: 'email', displayName: 'E-mail' },
          { field: 'phone', displayName: 'Phone' },
        ],
        type: 'json',
        header: 'Multiple Images',
      })
    },
    testPrint3() {
      printJS({
        printable: someJSONdata,
        properties: [
          { field: 'name', displayName: 'Full Name' },
          { field: 'email', displayName: 'E-mail' },
          { field: 'phone', displayName: 'Phone' },
        ],
        type: 'json',
        header: '<h3 class="custom-h3">My custom header</h3>',
        style: '.custom-h3 { color: red; }',
      })
    },
    //-----------------------------temp
    initData() {
      this.todoValue = 0
      this.finishedValue = 0
      this.trackValue = 0

      todoPage().then((res) => {
        this.todoSpinning = false
        if (res.status === 0) {
          res.data.todoCounts.map((r) => {
            this.todoValue += parseInt(r.num)
          })
        } else {
          this.todoValue = res.msg
        }
      })
      finishedNumber().then((res) => {
        this.finishedSpinning = false
        if (res.status === 0) {
          this.finishedValue = res.data.count
        } else {
          this.finishedValue = res.msg
        }
      })
      trackPage().then((res) => {
        this.trackSpinning = false
        if (res.status === 0) {
          res.data.todoCounts.map((r) => {
            this.trackValue += parseInt(r.num)
          })
        } else {
          this.trackValue = res.msg
        }
      })
    },
  },
}
</script>

<style scoped>
.dash-card {
  min-height: 180px;
}
.dash-btn {
  cursor: pointer;
}
/* .dash-btn:hover {
  background-color: #efefef;
} */
</style>