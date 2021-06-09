/*
 * @Author: crli
 * @Date: 2021-06-01 14:47:19
 * @LastEditors: crli
 * @LastEditTime: 2021-06-09 13:51:52
 * @Description: file content
 */
/**
 * @desc 判断元素是否包含类名
 * @param { Element } element 
 * @param { String } argClassName
 * @return { Boolean } true or false 
 */
const hasClass = (obj: Element, cls: string): boolean => {
  if (cls && obj) {
    return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(obj.className)
  }
  return false
}
export default hasClass