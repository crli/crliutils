/*
 * @Author: crli
 * @Date: 2021-06-02 09:47:15
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 09:48:36
 * @Description: file content
 */
/**
 * 
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */

const isLeapYear = (year: number) : boolean => {
  if (0 === year % 4 && year % 100 !== 0 || year % 400 === 0) {
    return true
  }
  return false
}
export default isLeapYear