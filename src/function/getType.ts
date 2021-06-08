/*
 * @Author: crli
 * @Date: 2021-05-31 15:31:47
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:43:40
 * @Description: file content
 */
/**
 * 
 * @desc   获得对象类型
 * @param  {any} obj
 * @return {String} 
 */
const getType = function (obj: any): string {
  var toString = Object.prototype.toString
  var map: { [key: string]: string } = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object',
    '[object Symbol]': 'symbol',
    '[object Set]': 'set',
    '[object WeakSet]': 'weakSet',
    '[object Map]': 'map',
    '[object WeakMap]': 'weakmap'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}
export default getType