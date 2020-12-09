import queryItemList from './qyd/queryItemList'
import queryCorpItemList from './qyd/queryCorpItemList'
export default [
  {
    url: '/budget/budget/fbsBudgetItemConfig/queryItemList',
    type: 'post',
    response: config => {
      return queryItemList
    }
  },
  {
    url: '/budget/fbsCorpItemConfig/queryCorpItemList',
    type: 'post',
    response: config => {
      return queryCorpItemList
    }
  },
]
