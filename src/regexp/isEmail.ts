/*
 * @Author: crli
 * @Date: 2021-06-01 13:37:35
 * @LastEditors: crli
 * @LastEditTime: 2021-06-15 15:49:08
 * @Description: file content
 */

/**
 * 
 * @desc   判断是否为正确邮箱
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
const isEmail = function (str: string): boolean {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
}

export default isEmail