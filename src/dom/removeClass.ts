/*
 * @Author: crli
 * @Date: 2021-06-01 14:47:19
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 16:27:09
 * @Description: file content
 */
/**
 * @desc 为元素添加class
 * @param { Element } element 
 * @param { String } cls
 * @return { Boolean } true or false 
 */
import hasClass from './hasClass'
const removeClass = (obj: Element, cls: string):void=> {
  if (hasClass(obj,cls)) {
    let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}
export default removeClass