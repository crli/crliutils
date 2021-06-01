/*
 * @Author: crli
 * @Date: 2021-06-01 14:47:19
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 14:55:41
 * @Description: file content
 */
/**
 * @desc 为元素添加class
 * @param { Element } element 
 * @param { String } cls
 * @return { Boolean } true or false 
 */
import hasClass from './hasClass'
const addClass = (obj: Element, cls: string):void=> {
  if (!hasClass(obj,cls)) {
    obj.className += ' ' + cls
  }
}
export default addClass