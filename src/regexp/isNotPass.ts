/*
 * @Author: crli
 * @Date: 2021-06-01 13:45:02
 * @LastEditors: crli
 * @LastEditTime: 2021-06-10 10:09:39
 * @Description: file content
 */
/**
 * 
 * @desc   判断是否通过
 * @param  {any} val 
 * @return {Boolean} 
 */

const isNotPass = function (val: any): boolean {
  if (val == false) {
    return true
  }
  if (val == 0) {
    return true
  }
  if (val instanceof Array) {
    if (val.length == 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') return true
    return false
  }
  return false
}
export default isNotPass