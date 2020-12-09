import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import Base64 from 'js-base64'

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function welcome() {
  const arr = ['休息一会儿吧', '准备吃什么呢?', '要不要打一把 DOTA', '我猜你可能累了']
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

/**
 * 触发 window.resize
 */
export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function handleScrollHeader(callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function () { }
  window.addEventListener(
    'scroll',
    event => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === '0') {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

export function isIE() {
  const bw = window.navigator.userAgent
  const compare = (s) => bw.indexOf(s) >= 0
  const ie11 = (() => 'ActiveXObject' in window)()
  return compare('MSIE') || ie11
}

/**
 * Remove loading animate
 * @param id parent element id or class
 * @param timeout
 */
export function removeLoadingAnimate(id = '', timeout = 1500) {
  if (id === '') {
    return
  }
  setTimeout(() => {
    document.body.removeChild(document.getElementById(id))
  }, timeout)
}
/**
 * 整理form初始值 使满足后台接口
 * 日期 格式转换
 * '' null undfined [] 清除字段
 *
 * @export
 * @param {*} formValues
 */
export function form2param(formValues) {
  const seqrchParams = {}
  for (const k in formValues) {
    const item = formValues[k]
    const itemType = Object.prototype.toString.call(item)
    if (item && item._isAMomentObject === true) {
      seqrchParams[k] = item.format('YYYY-MM-DD')
    } else if (itemType === '[object Array]' && item[0] && item[0]._isAMomentObject === true) {
      const dateRangeNames = k.split('-')
      seqrchParams[dateRangeNames[0]] = item[0].format('YYYY-MM-DD')
      seqrchParams[dateRangeNames[1]] = item[1].format('YYYY-MM-DD')
    } else {
      seqrchParams[k] = item
    }
  }
  return seqrchParams
}
// 过滤对象中的空值  '' null undefined []
export function filterEmptyVal(params) {
  const newParams = {}
  for (const k in params) {
    const item = params[k]
    if (item === null || item === undefined || item.length === 0) {
      // '' null undefined []
    } else {
      newParams[k] = item
    }
  }
  return newParams
}



export function notEmpty(name) {
  return v => {
    if (!v || v.trim === '') {
      return `${name} is required`
    } else {
      return true
    }
  }
}
// 日期回显
export function formatDate(val) {
  if (!val) return ''
  const now = new Date(val)
  const y = now.getFullYear()
  const m = (now.getMonth() + 1).toString().padStart(2, 0)
  const d = now
    .getDate()
    .toString()
    .padStart(2, 0)
  return `${y}-${m}-${d}`
}

// 时间回显
export function formatDateTime(val) {
  if (!val) return ''
  const now = new Date(val)
  const y = now.getFullYear()
  const m = (now.getMonth() + 1).toString().padStart(2, 0)
  const d = now
    .getDate()
    .toString()
    .padStart(2, 0)
  const hh = now.getHours()
  const mm = now.getMinutes()
  const ss = now.getSeconds()
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}
/**
 * 根据 选中情况 返回选中id值集合
 *
 * @export
 * @param {*} { current, options, selectedKeys }
 * @returns
 */
export function getTagSelected({ current, options, selectedKeys, idName = 'code' }) {
  if (current.checked) {
    if (current.value === 'total') {
      selectedKeys = options.map((i) => {
        return i[idName]
      })
    } else {
      selectedKeys.push(current.value)
    }
  } else {
    if (current.value === 'total') {
      selectedKeys = []
    } else {
      selectedKeys.splice(selectedKeys.indexOf(current.value), 1)
    }
  }
  return selectedKeys
}

export function initDefaultProps(propKeys, vm) {
  const defProps = {}
  propKeys.map((k) => {
    if (vm[k] !== undefined) {
      defProps[k] = vm[k]
    }
  })
  return defProps
}
// 根据token 解析用户信息
export function getUserInfo() {
  const token = storage.get(ACCESS_TOKEN) || ''
  const infoArr = token.split('.')
  if (infoArr && infoArr.length > 1) {
    const userInfoStr = Base64.Base64.decode(infoArr[1], 'utf-8')
    return userInfoStr ? JSON.parse(userInfoStr) : {}
  }
  return {}
}

// 递归 
export function flat2Tree({ list, pid = '0', idNa = 'id', pidNa = 'pid' }) {
  const treeData = []
  list.map(item => {
    if (item[pidNa] === pid) {
      item.children = flat2Tree({ list, pid: item[idNa], idNa, pidNa })
      // flat2Tree(list, item[idNa], idNa, pidNa)
      treeData.push(item)
    }
  })
  return treeData.length === 0 ? null : treeData
}

/**
 * 
 * @param {*} treeData  [treeData]
 * @param {*} childrenName 
 * @param {*} cb  // 接收item 返回 true 或者false
 */
export function getTreeNodeByCb({ treeData, childrenName = 'children', cb }) {
  const itemList = []
  treeData.map(item => {
    if (item.children && item.children.length > 0) {
      itemList.push(...getTreeNodeByCb({ treeData: item.children, childrenName, cb }))
    } else {
      if (cb(item)) {
        itemList.push(item)
      }
    }
  })
  return itemList
}

function findParentNodeKey(node) {
  if (node.$parent.$parent.treeData) {
    return [node.$parent.eventKey]
  } else if (node.$parent.eventKey) {
    return [node.$parent.eventKey, ...findParentNodeKey(node.$parent, node.$parent.eventKey)]
  }
}

function findLeafsVCom(VCom, checkedStatus) {
  const leafsVCom = []
  if (VCom.$children.length === 0 || !VCom.$children) {
    if (VCom.eventKey) {
      if (checkedStatus !== undefined) {
        if (VCom.checked === checkedStatus) leafsVCom.push(VCom)
      } else {
        leafsVCom.push(VCom)
      }
    }
  } else {
    VCom.$children.map((child) => {
      leafsVCom.push(...findLeafsVCom(child, checkedStatus))
    })
  }
  return leafsVCom
}
/**
 * antd 的tree 使用checkStrictly 父子没有任何关系 
 * 为了实现 父节点可单独选中 又能同子节点互相影响的半联动效果
 * @param {*} treeVM tree节点 如 this.$refs.tree
 * @param {*} info  tree oncheck 事件的第二个参数 onCheck(checkedKeys, info)
 * 
 */
export function getTreeCheckedKeys(treeVM, info) {
  // 等待选中完成后 获取已经选中的 叶子节点
  const checkedLeafs = findLeafsVCom(treeVM, true)
  // 获取 需要包含的叶子节点和排除的叶子节点
  let includeLeafs = []
  let exceptLeafs = []
  const result = []
  if (info) {
    if (info.checked === true) {
      includeLeafs = findLeafsVCom(info.node)
    } else {
      exceptLeafs = findLeafsVCom(info.node)
    }
  }
  //根据最终叶子节点 寻找父级节点
  ;[...checkedLeafs, ...includeLeafs].map((leaf) => {
    if (!exceptLeafs.includes(leaf)) {
      if (!result.includes(leaf.eventKey)) result.push(leaf.eventKey)
      findParentNodeKey(leaf).map((key) => {
        if (!result.includes(key)) result.push(key)
      })
    }
  })
  return result
}

export function upperCaseHump(str) {
  return str.toLocaleLowerCase().replace(/_([a-z])/g, function (s) {
    return s ? s.substr(1, 1).toUpperCase() : ''
  })
}