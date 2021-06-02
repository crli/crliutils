/*
 * @Author: crli
 * @Date: 2021-06-01 16:47:55
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 09:59:42
 * @Description: file content
 */
/**
 * 
 * @desc   获得包含当天和前N月或者N年的的日期数组 比如今天是2021-06-01
 * @param  {count} number = 1
 * @param  {flag} string = 'month'||其他string
 * @return {Array<string>} ["2021-05-01", "2021-06-01"]
 */
import isLeapYear from './isLeapYeay'
function getyearNum(num: number, n: number) : number{
  if (num / 12 < n) {
    return n
  } else {
    return getyearNum(num, ++n)
  }
}
const getMonthArrDay = (count: number = 1, flag:string = 'month') : Array<string> => {
  const temp = []
  const time = new Date()
  const year = time.getFullYear()
  const month = `0${time.getMonth() + 1}`.slice(-2)
  const strDate = `0${time.getDate()}`.slice(-2)
  if (flag === 'month') {
    if (Number(month) - count > 0) {
      temp.push(`${year}-${`0${Number(month) - count}`.slice(-2)}-${strDate}`)
    } else {
      const num = Math.abs(Number(month) - count)
      const yearNum = getyearNum(num, 0)
      const beforeYearByMonth = year - yearNum // 之前的年
      const beforeMonth = Number(month) + 12 * yearNum - count // 之前的月
      if (beforeMonth == 2 && Number(strDate) == 29) {
        if (isLeapYear(beforeYearByMonth)) {
          temp.push(`${beforeYearByMonth}-02-29`)
        } else {
          temp.push(`${beforeYearByMonth}-02-28`)
        }
      } else {
        temp.push(`${beforeYearByMonth}-${`0${beforeMonth}`.slice(-2)}-${strDate}`)
      }
    }
    temp.push(`${year}-${month}-${strDate}`)
  } else {
    const beforeYear = year - count // 之前的年
    if (Number(month) == 2 && Number(strDate) == 29) {
      if (isLeapYear(beforeYear)) {
        temp.push(`${beforeYear}-02-29`)
      } else {
        temp.push(`${beforeYear}-02-28`)
      }
    } else {
      temp.push(`${beforeYear}-${month}-${strDate}`)
    }
    temp.push(`${year}-${month}-${strDate}`)
  }
  return temp
}
export default getMonthArrDay