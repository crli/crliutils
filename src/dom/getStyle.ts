/*
 * @Author: crli
 * @Date: 2021-06-01 15:11:27
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 16:26:59
 * @Description: file content
 */

/**
 * @desc 获取属性值
 * @param { Element } element 
 * @param { String } attr
 * @param { String } NumberMode
 * @return { number } 
 */
const getStyle = (element:Element, attr: string, NumberMode: string = 'int') : number=> {
  let target
  if (attr === 'scrollTop') {
    target = element == document.documentElement ? (document.documentElement.scrollTop || document.body.scrollTop) : element.scrollTop
  } else if (element.currentStyle) {
    target = element.currentStyle[attr]
  } else if (document.defaultView) {
    target = document.defaultView.getComputedStyle(element, null)[attr]
  }
  //在获取 opactiy 时需要获取小数 parseFloat
  return NumberMode == 'float' ? parseFloat(target) : parseInt(target)
}
export default getStyle