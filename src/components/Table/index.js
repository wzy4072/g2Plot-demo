import T from 'ant-design-vue/es/table/Table'
import get from 'lodash.get'
import { form2param, filterEmptyVal } from '@/utils/util'

// 使用说明

// dataHandles: {
//   listApi: getChangeRecordList, // table 数据来源api
//   form: formVm,
//   handleRequest: (req) => {return req },
//   handleResponse: (res) => { return res},
//   initialParams: {},
// },


export default {
  data() {
    return {
      needTotalList: [],
      selectedRows: [],
      selectedRowKeys: [],
      localLoading: false,
      // localExpandedRowKeys: [],
      localDataSource: [],
      localPagination: Object.assign({
        showTotal: (total) => `共 ${total} 条`,
        pageSizeOptions: ['10', '30', '50', '100']
      }, this.pagination)
    }
  },
  props: Object.assign({}, T.props, {
    loadDataMounted: {
      default: true
    },
    bordered: {
      default: true
    },
    // defaultExpandAllRows: {
    //   default: true
    // },
    rowKey: {
      type: [String, Function],
      default: 'key'
    },
    dataHandles: {
      type: Object,
      required: true,
      validator: function (value) {
        //   if (Object.prototype.toString.call(value.listApi) !== '[object Promise]') {
        //     console.error('s-table.props.dataHandles.listApi is\'t Promise!')
        //     return false
        //   }
        // form 非必选 但是有格式要求
        if (value.form && !value.form.getFieldsValue) {
          console.error('s-table.props.dataHandles.form is\'t decorator Object!')
          return false
        }
        return true
      }
    },
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    // pageSizeOptions: {
    //   type: Array,
    //   default: () => (['10', '50'])
    // },
    showSizeChanger: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'small'
    },
    alert: {
      type: [Object, Boolean],
      default: null
    },
    rowSelection: {
      type: Object,
      default: null
    },
    /** @Deprecated */
    showAlertInfo: {
      type: Boolean,
      default: false
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    pageURI: {
      type: Boolean,
      default: false
    }
  }),
  watch: {
    'localPagination.current'(val) {
      this.pageURI && this.$router.push({
        ...this.$route,
        name: this.$route.name,
        params: Object.assign({}, this.$route.params, {
          pageNo: val
        })
      })
      // change pagination, reset total data
      this.needTotalList = this.initTotalList(this.columns)
      this.selectedRowKeys = []
      this.selectedRows = []
    },
    pageNum(val) {
      Object.assign(this.localPagination, {
        current: val
      })
    },
    pageSize(val) {
      Object.assign(this.localPagination, {
        pageSize: val
      })
    },
    showSizeChanger(val) {
      Object.assign(this.localPagination, {
        showSizeChanger: val
      })
    }
  },
  mounted() {
    if (this.loadDataMounted) {
      const { pageNo } = this.$route.params
      const localPageNum = this.pageURI && (pageNo && parseInt(pageNo)) || this.pageNum
      this.localPagination = ['auto', true].includes(this.showPagination) && Object.assign({}, this.localPagination, {
        current: localPageNum,
        pageSize: this.pageSize,
        showSizeChanger: this.showSizeChanger
      }) || false
      this.needTotalList = this.initTotalList(this.columns)
      this.loadData()
    }
    this.initColumns()
  },
  // created() {

  // },
  methods: {
    initColumns() {
      this.columns.map(item => {
        item.align = item.align || 'center'
        if (item.title === '操作') {
          item.align = 'left'
        }
      })
    },
    /**
     * 表格重新加载方法
     * 如果参数为 true, 则强制刷新到第一页
     * @param Boolean bool
     */
    refresh(bool = false) {
      bool && (this.localPagination = Object.assign({}, {
        current: 1, pageSize: this.pageSize
      }))
      this.clearSelected()
      this.loadData()
    },
    clearDataSource() {
      this.localPagination = Object.assign({}, {
        current: 1, pageSize: this.pageSize
      })
      this.localDataSource = []
    },
    async loadData(pagination, filters, sorter) {
      this.localLoading = true
      const pageInfo = this.showPagination === false ? {} : {

        page: (pagination && pagination.current) ||
          this.showPagination && this.localPagination.current || this.pageNum,
        limit: (pagination && pagination.pageSize) ||
          this.showPagination && this.localPagination.pageSize || this.pageSize
        // limit: (pagination && pagination.pageSize) ||
        //   this.showPagination && this.localPagination.pageSize || this.pageSize
      }
      const parameter = Object.assign(pageInfo,
        (sorter && sorter.field && {
          sortField: sorter.field
        }) || {},
        (sorter && sorter.order && {
          sortOrder: sorter.order
        }) || {}, {
        ...filters
      },
        this.dataHandles.initialParams || {},
        { menuId: this.$route.meta.menuId },
        this.getSearchFormValues() // 获取form参数
      )
      // 请求前执行 handleRequest
      const newParameter = this.dataHandles.handleRequest ? await this.dataHandles.handleRequest(parameter) : parameter
      // 去除 '' undefined null []
      // newParameter = filterEmptyVal(newParameter)

      // 调用接口
      this.dataHandles.listApi(newParameter)
        .then(r => {
          this.dataHandles.handleResponse && (r = this.dataHandles.handleResponse(r))
          if (r.data.data) {
            const { status, data: { data, count }, msg } = r
            r = { status, data, count, msg }
          }

          this.localPagination = this.showPagination && Object.assign({}, this.localPagination, {
            // current: r.page.currentPage, // 返回结果中的当前分页数
            current: (pagination && pagination.current) || this.localPagination.current,
            total: r.count, // 返回结果中的总记录数
            showSizeChanger: this.showSizeChanger,
            pageSize: (pagination && pagination.pageSize) ||
              this.localPagination.pageSize
          }) || false
          // 为防止删除数据后导致页面当前页面数据长度为 0 ,自动翻页到上一页
          if (r.data.length === 0 && this.showPagination && this.localPagination.current > 1) {
            this.localPagination.current--
            this.loadData()
            return
          }

          // 这里用于判断接口是否有返回 r.totalCount 且 this.showPagination = true 且 pageNo 和 pageSize 存在 且 totalCount 小于等于 pageNo * pageSize 的大小
          // 当情况满足时，表示数据不满足分页大小，关闭 table 分页功能
          try {
            if ((['auto', true].includes(this.showPagination) && r.count <= (r.pageNo * this.localPagination.pageSize))) {
              this.localPagination.hideOnSinglePage = true
            }
          } catch (e) {
            this.localPagination = false
          }
          this.localDataSource = this.initColumnCount(r.data) // 返回结果中的数组数据
          // if (this.defaultExpandAllRows) {
          //   this.localExpandedRowKeys = []
          //   this.localDataSource.map(item => item.children && this.localExpandedRowKeys.push(item[this.rowKey]))
          // }
          this.localLoading = false
        })

    },
    /**
     * 获取 表格头部 search 内的值 并自动转换 monment 对象
     * 如需要触发验证效果 请在handleRequest 中触发
     */
    getSearchFormValues() {
      let seqrchParams = {}
      if (this.dataHandles.form) {
        seqrchParams = form2param(this.dataHandles.form.getFieldsValue())
      }
      return seqrchParams
    },
    initTotalList(columns) {
      const totalList = []
      columns && columns instanceof Array && columns.forEach(column => {
        if (column.needTotal) {
          totalList.push({
            ...column,
            total: 0
          })
        }
      })
      return totalList
    },
    /**
     * 用于更新已选中的列表数据 total 统计
     * @param selectedRowKeys
     * @param selectedRows
     */
    updateSelect(selectedRowKeys, selectedRows) {
      this.selectedRows = selectedRows
      this.selectedRowKeys = selectedRowKeys
      const list = this.needTotalList
      this.needTotalList = list.map(item => {
        return {
          ...item,
          total: selectedRows.reduce((sum, val) => {
            const total = sum + parseInt(get(val, item.dataIndex))
            return isNaN(total) ? 0 : total
          }, 0)
        }
      })
    },
    /**
     * 清空 table 已选中项
     */
    clearSelected() {
      if (this.rowSelection) {
        this.rowSelection.onChange && this.rowSelection.onChange([], [])
        this.updateSelect([], [])
      }
    },
    /**
     * 处理交给 table 使用者去处理 clear 事件时，内部选中统计同时调用
     * @param callback
     * @returns {*}
     */
    renderClear(callback) {
      if (this.selectedRowKeys.length <= 0) return null
      return (
        <a style="margin-left: 24px" onClick={() => {
          callback()
          this.clearSelected()
        }}>清空</a>
      )
    },
    renderAlert() {
      // 绘制统计列数据
      const needTotalItems = this.needTotalList.map((item) => {
        return (<span style="margin-right: 12px">
          {item.title}总计 <a style="font-weight: 600">{!item.customRender ? item.total : item.customRender(item.total)}</a>
        </span>)
      })

      // 绘制 清空 按钮
      const clearItem = (typeof this.alert.clear === 'boolean' && this.alert.clear) ? (
        this.renderClear(this.clearSelected)
      ) : (this.alert !== null && typeof this.alert.clear === 'function') ? (
        this.renderClear(this.alert.clear)
      ) : null

      // 绘制 alert 组件
      return (
        <a-alert showIcon={true} style="margin-bottom: 16px">
          <template slot="message">
            <span style="margin-right: 12px">已选择: <a style="font-weight: 600">{this.selectedRows.length}</a></span>
            {needTotalItems}
            {clearItem}
          </template>
        </a-alert>
      )
    },
    initColumnCount(dataSource) {
      const countColumns = this.columns.filter(col => col.localCount)
      if (countColumns.length > 0) {
        console.log('有合计行 总行数会多计算1')
        const countRow = { [this.rowKey]: '合计', localCount: true, }
        countColumns.map(col => {
          countRow[col.dataIndex] = 0
          dataSource.map(r => {
            countRow[col.dataIndex] += (parseFloat(r[col.dataIndex]) || 0)
          })
        })
        return [...dataSource, countRow]
      }
      return dataSource
    },
  },

  render() {
    const props = {}
    const localKeys = Object.keys(this.$data)
    const showAlert = (typeof this.alert === 'object' && this.alert !== null && this.alert.show) && typeof this.rowSelection.selectedRowKeys !== 'undefined' || this.alert
    Object.keys(T.props).forEach(k => {
      const localKey = `local${k.substring(0, 1).toUpperCase()}${k.substring(1)}`


      if (localKeys.includes(localKey)) {
        props[k] = this[localKey]
        return props[k]
      }
      if (k === 'rowSelection') {
        if (showAlert && this.rowSelection) {
          // 如果需要使用alert，则重新绑定 rowSelection 事件
          props[k] = {
            selectedRows: this.selectedRows,
            selectedRowKeys: this.selectedRowKeys,
            ...this.rowSelection,
            onChange: (selectedRowKeys, selectedRows) => {
              this.updateSelect(selectedRowKeys, selectedRows)
              typeof this[k].onChange !== 'undefined' && this[k].onChange(selectedRowKeys, selectedRows)
            }
          }
          return props[k]
        } else if (!this.rowSelection) {
          // 如果没打算开启 rowSelection 则清空默认的选择项
          props[k] = null
          return props[k]
        }
      }
      this[k] && (props[k] = this[k])
      return props[k]
    })
    // {localCount:true, localCountValue:}
    const table = (
      <a-table {...{ props, defaultExpandAllRows: true, scopedSlots: { ...this.$scopedSlots } }} onChange={this.loadData} onExpand={(expanded, record) => { this.$emit('expand', expanded, record) }}>
        {Object.keys(this.$slots).map(name => (<template slot={name}>{this.$slots[name]}</template>))}
      </a-table>
    )

    return (
      <div class="table-wrapper">
        {showAlert ? this.renderAlert() : null}
        {table}
      </div>
    )
  }
}
