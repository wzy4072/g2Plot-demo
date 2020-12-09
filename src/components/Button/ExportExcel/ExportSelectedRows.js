import { export_json_to_excel } from '@/components/Button/ExportExcel/Export2Excel'
import message from 'ant-design-vue/es/message'

function initExcelData({ selectedRows, columns }) {
  const tHeader = ['序号']

  const listDataScouce = []
  selectedRows.map((row, index) => {
    const nrow = [index + 1]
    columns.map((colInfo) => {
      const { dataIndex, title, customRender } = colInfo
      if (title === '操作') return
      if (dataIndex && title) {
        if (index === selectedRows.length - 1) {
          tHeader.push(colInfo.title)
        }
        const keyValue = customRender ? customRender(row[dataIndex], row, index) : row[dataIndex]
        nrow.push(keyValue)
        // return nrow
      }
    })
    listDataScouce.push(nrow)
  })
  // filterVal.unshift('_index')
  return { tHeader, data: listDataScouce }
}

export default function ({ selectedRows = [], columns = [], filename = '导出文件' }) {
  if (!selectedRows || selectedRows.length === 0) {
    message.info('尚未选中可操作数据！')
    return
  }
  const { tHeader, data } = initExcelData({ selectedRows, columns })
  //   const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
  //   const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time'];
  export_json_to_excel({
    header: tHeader,
    data,
    filename,
    autoWidth: true,
    bookType: 'xlsx',
  })

}