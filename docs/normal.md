### table 对齐问题

title 统一 居中 操作列居左
内容 同上
tree table 所有居左

序号列 65

      <a-button  type="default" @click="visible = false">关闭</a-button>

      <a-button @click="visible = false">关闭</a-button>

### 导出功能

```

import ExportSelectedRows from '@/components/Button/ExportExcel/ExportSelectedRows'

<a-button @click="export2file">导出</a-button>

methods:{
  export2file() {
      const { selectedRows, columns } = this
      ExportSelectedRows({ selectedRows, columns, filename: '收款人管理' })
    },
}

// columns 参数决定打印顺序
// selectedRows 内应把 status  等code转换为对应的中文
// 已经含有序号

```

### CorpTreeSelect BankAccSelect 使用

```vue
<a-form-item label="单位">
             <CorpTreeSelect
              :isBasic="true"
               @change="(corpId) => $refs.BankAccSelect.updateOptions(corpId)"
               v-decorator="['corpId',{ rules: [{ required: true, message: '必填' }]},]"
             ></CorpTreeSelect>
           </a-form-item>

<a-form-item label="账号">
             <BankAccSelect  :isBasic="true" ref="BankAccSelect" v-decorator="['bankAcc']"></BankAccSelect>
           </a-form-item>

:isBasic="true"
```

### 表单验证

```
- 验证规则
// 表单会识别值的格式 尤其是数字与字符串 请明确指定格式 比如 [{ required: true, type:'number'...
  noteRules: [
        { required: true, message: '必填' },
        { type: 'string', message: '请输入字符串！' },
        { pattern: /^[a-z]$/, message: '格式不正确！' },
        { min: 2, max: 6, message: '请输入2-6的数字!' },
        { validator: validaNa }
        ]
    }

-  验证并提交
     this.form.validateFields((err, values) => {
        if (!err) {
          console.log('this is form value', values)
        }
      })

-  重置表单
 // 意思是重置为初始状态 默认值会保留
this.form.resetFields()

- 清空

    this.initData = {}
    this.form.resetFields()

- 设置
    setFiledsValue(){
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model,'description','status'));
      });
    }

```

### 日期转换

```
 // datepicker 接受/返回的数据是 moment对象，同后台交互时需要进行格式转换  需要安装依赖moment
 import moment from 'moment'
// 获取
this.formValue.createDate = this.formValue.createDate.format('YYYY-MM-DD') // 2018-05-06
this.formValue.createDate = this.formValue.createDate.format('x') // 1566970446059
// 设置
this.form.setFieldsValue({ createDate: moment('2019-01-02') })
this.form.setFieldsValue({ createDate: moment(1566970446059) })
```

### value 转换 label

```

```

### 路由跳转

```
// 路由跳转及传参
router.push({ path: 'home' })
router.push({ path: 'register', query: { id: 666 }})

<router-link :to="'home'">Home</router-link>
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

// 取参数
this.$router.query.id
```

### table 自定义列

- 方法 1
  > 自定义插槽名，使用插槽 slot-scope="record, index, indent, expanded"

```js
const columns = [...
  { type: 'index', title: '序号', customRender: (text, record, index) => index + 1 },
  { title: '操作', scopedSlots: { customRender: 'operate' } },
{
    title: '描述',
    dataIndex: 'description',
    scopedSlots: { customRender: 'description' } // 定义自定义插槽 name
  }]

  <s-table >
    <span slot="description" slot-scope="text">
      <ellipsis :length="4" tooltip>{{ text }}</ellipsis>
    </span>
  </s-table>
```

- 方法 2 直接返回需要渲染的内容

```
const columns = [... {
    title: '描述',
    dataIndex: 'description',
    customRender: (text) => text + ' 次'
  }]
```

### 实现 tree 父节点可单独选中 使用演示

```js
  <a-tree
      checkable
      ref="tree"
      :tree-data="treeData"
      :selectable="false"
      :checkStrictly="true"
      :default-expanded-keys="['0-0-0', '0-0-1']"
      :checked-keys="checkedKeys"
      @check="onCheck"
    >
    </a-tree>

import { getTreeCheckedKeys } from '@/utils/util'
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    root: { isRoot: true },
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', title: '0-0-1-0' }],
      },
    ],
  },
]

data() {
    return {
      treeData,
      checkedKeys: [],
    }
  },

  methods: {
    onCheck(checkedKeys, info) {
      this.checkedKeys = checkedKeys
      this.$nextTick(() => {
        this.checkedKeys = getTreeCheckedKeys(this.$refs.tree, info,'0-0')
      })
    },
  },


```

\$confirm

```js
this.$confirm({
  title: '确认提交？',
  onOk() {
    return
      periodicMaintenance(values).then(res => {
     return
      })
    })
  },
  onCancel() {}
})
```
