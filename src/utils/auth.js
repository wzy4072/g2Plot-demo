import Cookies from 'js-cookie'
import Base64 from 'js-base64'
const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserInfo() {
  const token = getToken()
  let infoArr
  if (token) {
    infoArr = token.split('.')
  }
  if (infoArr && infoArr.length > 1) {
    const userInfoStr = Base64.Base64.decode(infoArr[1], 'utf-8')
    return userInfoStr ? JSON.parse(userInfoStr) : {}
  }
}
