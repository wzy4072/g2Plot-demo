import getDictByCodeAndType from './dataBases/getDictByCodeAndType'
import serverList from './dataBases/serverList'
export default [
  {
    url: '/businessBasic/businessBasic/dict/getDictByCodeAndType',
    type: 'post',
    response: config => {
      return getDictByCodeAndType
    }
  },
  {
    url: '/upload',
    type: 'post',
    response: config => {
      return {
        status:0,
        data:[]
      }
    }
  },
  {
    url: '/service',
    type: 'get',
    response: config => {
      return serverList
    }
  },

]

