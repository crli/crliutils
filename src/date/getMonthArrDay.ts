/*
 * @Author: crli
 * @Date: 2021-06-01 16:47:55
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 17:11:47
 * @Description: file content
 */
/**
 * 
 * @desc   获得近包含当天和前N月或者N年的的日期数组 比如今天是2021-06-01
 * @param  {any} obj
 * @return {Array<string>} ["2021-05-01", "2021-06-01"]
 */
function getyearNum(num, n) {
  if (num / 12 < n) {
    return n
  } else {
    getyearNum(num, ++n)
  }
}
const getMonthArrDay = (count: number = 1, flag:string = 'month') : Array<string> => {
  const temp = []
  const time = new Date()
  const year = time.getFullYear()
  const month = `0${time.getMonth() + 1}`.slice(-2)
  const strDate = `0${time.getDate()}`.slice(-2)
  if (flag === 'month') {
    if (month - count > 0) {
      temp.push(`${year}-${month - count}-${strDate}`)
    } else {
      const num = Math.abs(month - count)
      const yearNum = getyearNum(num, 0)
      const beforeYearByMonth = year - yearNum // 之前的年
      const beforeMonth = month + 12 * yearNum - count // 之前的月
      if (beforeMonth == 2 && strDate == 29) {
        if (beforeYearByMonth % 4 === 0 && beforeYearByMonth % 100 !== 0 || beforeYearByMonth % 400 === 0) {
          temp.push(`${beforeYearByMonth}-02-29`)
        } else {
          temp.push(`${beforeYearByMonth}-02-28`)
        }
      } else {
        temp.push(`${beforeYearByMonth}-${beforeMonth}-${strDate}`)
      }
    }
    temp.push(`${year}-${month}-${strDate}`)
  } else {
    const beforeYear = year - count // 之前的年
    if (month == 2 && strDate == 29) {
      if (beforeYear % 4 === 0 && beforeYear % 100 !== 0 || beforeYear % 400 === 0) {
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