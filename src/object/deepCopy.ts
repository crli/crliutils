/*
 * @Author: crli
 * @Date: 2021-05-31 15:44:03
 * @LastEditors: crli
 * @LastEditTime: 2021-05-31 17:00:21
 * @Description: file content
 */
/**
 * 
 * @desc   对象深拷贝
 * @param  {any} obj
 * @return {obj} 
 */
function isQuote(obj: object) :boolean {
  return typeof obj === 'object' || typeof obj === 'function' && obj !== null
}
const deepCopy = function(obj : any) : object{
  if (isQuote(obj)) {
    //判断特殊处理的类型
    let type = [Date, Set, Map, WeakMap, WeakSet, RegExp]
    if (type.includes(obj.constructor)) {
      return new obj.constructor(obj)
    }
    let cloneobj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
    for (const prop of Reflect.ownKeys(obj)){
      cloneobj[prop] = isQuote(obj[prop]) && typeof obj[prop] !== 'function' ? deepCopy(obj[prop]) : obj[prop]
    }
    return cloneobj
  } else {
    return obj
  }
}
export default deepCopy