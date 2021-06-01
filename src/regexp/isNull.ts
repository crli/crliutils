/*
 * @Author: crli
 * @Date: 2021-06-01 13:45:02
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 13:47:00
 * @Description: file content
 */
/**
 * 
 * @desc   判断是否为空
 * @param  {any} val 
 * @return {Boolean} 
 */

const isNull = function(val: any) : boolean{
  if (typeof val == 'boolean') {
      return false
  }
  if (typeof val == 'number') {
      return false
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
export default isNull