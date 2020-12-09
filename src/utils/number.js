/*
  * 金额格式化
  * @param ：number：要格式化的数字 decimals：保留几位小数 dec_point：小数点符号 thousands_sep：千分位符号
  */
export function number_format(number, decimals = 2, dec_point = '.', thousands_sep = ',') {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  var n = !isFinite(+number) ? 0 : +number
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
  var sep = thousands_sep
  var dec = dec_point
  var s = ''
  var toFixedFix = function(n, prec) {
    var k = Math.pow(10, prec)
    return '' + Math.round(n * k) / k
  }
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  s[1] = s[1] || ''
  if (s[1].length < prec) {
    s[1] += new Array(prec - s[1].length + 1).join('0')
  }
  return s.join(dec)
}

export function moneyToUppercase(money) {
  // 汉字的数字
  var cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  // 基本单位
  var cnIntRadice = ['', '拾', '佰', '仟']
  // 对应整数部分扩展单位
  var cnIntUnits = ['', '万', '亿', '兆']
  // 对应小数部分单位
  var cnDecUnits = ['角', '分', '毫', '厘']
  // 整数金额时后面跟的字符
  var cnInteger = '整'
  // 整型完以后的单位
  var cnIntLast = '元'
  // 最大处理的数字
  var maxNum = 999999999999999.9999
  // 金额整数部分
  var integerNum
  // 金额小数部分
  var decimalNum
  // 输出的中文金额字符串
  var chineseStr = ''
  // 分离金额后用的数组，预定义
  var parts
  if (money === '') { return '' }
  money = parseFloat(money)
  if (money >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (money === '0') {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }
  // 转换为字符串
  money = money.toString()
  if (money.indexOf('.') === -1) {
    integerNum = money
    decimalNum = ''
  } else {
    parts = money.split('.')
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 4)
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    var zeroCount = 0
    var IntLen = integerNum.length
    for (var i = 0; i < IntLen; i++) {
      var n = integerNum.substr(i, 1)
      var p = IntLen - i - 1
      var q = p / 4
      var m = p % 4
      if (n === '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m === '0' && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum !== '') {
    var decLen = decimalNum.length
    for (var is = 0; is < decLen; is++) {
      var ns = decimalNum.substr(is, 1)
      if (ns !== '0') {
        chineseStr += cnNums[Number(ns)] + cnDecUnits[is]
      }
    }
  }
  if (chineseStr === '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum === '') {
    chineseStr += cnInteger
  }
  return chineseStr
}
/**
 * input输入框金额格式检查
 * @param id:输入框的id
 * @param money：金额
 * @returns {*}
 */
export function input_money_check(id, money) {
  // 如果输入非数字，则替换为''
  money = money.replace(/[^\d\.]/g, '')
  // 必须保证第一个为数字而不是.
  money = money.replace(/^\./g, '')
  // 禁止录入整数部分两位以上，但首位为0
  money = money.replace(/^0(\d+)$/, '$1')
  // 保证只有出现一个.而没有多个.
  money = money.replace(/\.{2,}/g, '.')
  // 保证.只出现一次，而不能出现两次以上
  money = money.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.')
  // 只能输入两位小数
  money = money.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3')

  // 给对应的input框赋值金额
  document.getElementById(id).value = money
}
/*
* 对金额小数不足两位的进行补全
* @param id:金额对应的input框的id
* @param money:金额
* @returns {*}
* */
export function perfect_money(id, checkMoney) {
  var money = checkMoney

  if (money === '0') {
    money = '0.00'
  }
  if (money === '0.') {
    money = '0.00'
  }
  /* if (/^0+\d+\.?\d*.*$/.test(money)) {

       money = money.replace(/^0+(\d+\.?\d*).*$/, '$1');
       money = inp.getRightPriceFormat(money).val;
   }*/
  if (/^0\.\d$/.test(money)) { // 例：0.9 补0 0.90
    money = money + '0'
  }
  if (!/^\d+\.\d{2}$/.test(money)) {
    if (/^\d+\.\d{2}.+/.test(money)) {
      money = money.replace(/^(\d+\.\d{2}).*$/, '$1')
    }
    if (/^\d+$/.test(money)) {
      money = money + '.00'
    }
    if (/^\d+\.$/.test(money)) {
      money = money + '00'
    }
    if (/^\d+\.\d$/.test(money)) {
      money = money + '0'
    }
    /* else if (/^[^\d]+\d+\.?\d*$/.test(money)) {
        money = money.replace(/^[^\d]+(\d+\.?\d*)$/, '$1');
    } else if (/\d+/.test(money)) {
        money = money.replace(/^[^\d]*(\d+\.?\d*).*$/, '$1');
        ty = false;
    } else if (/^0+\d+\.?\d*$/.test(money)) {
        money = money.replace(/^0+(\d+\.?\d*)$/, '$1');
        ty = false;
    } else {
        money = "";
    }*/
  }
  document.getElementById(id).value = money

  var money_len = document.getElementById(id).value

  money_len = money_len.replace(',', '')
  money_len = money_len.replace('.', '')
  var msg = ''
  if (money_len.length > 18) {
    msg = '金额长度不能超过18位！请重新输入！'
    return msg
  }
}
/*
* 对金额区间进行比较
* @param mixMoney:最小金额  maxMoney:最大金额
* @returns {*}
* */
export function money_compare(mixId, maxId) {
  var mixMoney = document.getElementById(mixId).value
  var maxMoney = document.getElementById(maxId).value

  var msg = ''
  if (mixMoney !== '' && maxMoney !== '' && mixMoney > maxMoney) {
    document.getElementById(maxId).value = ''
    document.getElementById(maxId).value = ''
    msg = '起始金额不能大于结束金额，请重新输入'
  }
  return msg
}
/*
* 对利率类的值进行校验
* （小数位5位）
* @param id_name:id名  rate:需要进行校验的值
* @returns {*}
* */
export function checkRate(id_name, rate) {
  var msg = ''
  var regx2 = /^(([1-9])|([1-9][0-9]{0,1}[.][0-9]{1,5})|([1-9][0-9]{1})|([0][.][0-9]{1}[1-9]{0,3}))$/
  if (!regx2.test(rate)) {
    msg = '只能输入数字或小数！最多允许输入5位小数，并且不能超过100！请重新输入！'
    document.getElementById(id_name).value = ''
  }
  return msg
}
