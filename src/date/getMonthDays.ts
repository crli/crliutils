/*
 * @Author: crli
 * @Date: 2021-06-02 10:34:59
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 10:41:10
 * @Description: file content
 */
/** 
 * @desc 获取指定日期月份的总天数
 * @param {Date} date
 * @return {number}
*/
const getMonthDays = (date: string): number => {
  const _data = new Date(date)
  let year = _data.getFullYear()
  let month = _data.getMonth() + 1
  return new Date(year, month, 0).getDate()
}
export default getMonthDays