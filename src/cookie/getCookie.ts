/*
 * @Author: crli
 * @Date: 2021-05-27 15:28:24
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:41:19
 * @Description: file content
 */
/**
 * @desc 获取cookie的操作
 * @param {String} name cookie的名
 */

const getCookie = function (name: string): string {
  let cookieName = encodeURIComponent(name) + "="
  let cookieStart = document.cookie.indexOf(cookieName)
  let cookieValue = ""
  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(";", cookieStart)
    if (cookieEnd === -1) {
      cookieEnd = document.cookie.length
    }
    cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd))
  }
  return cookieValue
}

export default getCookie