/*
 * @Author: crli
 * @Date: 2021-05-28 17:21:50
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:41:27
 * @Description: file content
 */
import setCookie from './setCookie'
/**
 * @desc 获取cookie的操作
 * @param {String} name cookie的名
 * @param {String} domain 可以访问该Cookie的域名
 * @param {String} path Cookie的使用路径
 * @param {Boolean} secure 该Cookie是否仅被使用安全协议传输(https)
 */

const removeCookie = function (name: string, domain: string | null, path: string | null, secure: boolean | null): void {
  setCookie(name, "", new Date(0), domain, path, secure)
}

export default removeCookie