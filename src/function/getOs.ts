/*
 * @Author: crli
 * @Date: 2021-06-01 16:28:36
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 16:35:47
 * @Description: file content
 */
/**
 * 
 * @desc 获取操作系统类型
 * @return {object} 
 */
const osSelect = () : object=> {
  const os = {
    android: false,
    iphone: false,
    ios: false,
    ipad: false,
    wechat: false
  }
  let ua = navigator.userAgent

  let android = ua.match(/(Android);?[\s/]+([\d.]+)?/)
  let iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/)
  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
  let wechat = ua.match(/(MicroMessenger)\/([\d.]+)/i)

  if (android) {
    os.android = true
  }
  if (iphone) {
    os.ios = os.iphone = true
  }
  if (wechat) {
    os.wechat = true
  }
  if (ipad) {
    os.ios = os.ipad = true
  }
  return os
}
