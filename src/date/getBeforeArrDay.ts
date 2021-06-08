/*
 * @Author: crli
 * @Date: 2021-06-01 16:47:55
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:41:39
 * @Description: file content
 */
/**
 * 
 * @desc   获得前N天的日期数组 比如今天是2021-06-01
 * @param  {any} obj
 * @return {Array<string>} ["2021-05-25", "2021-05-26", "2021-05-27", "2021-05-28", "2021-05-29", "2021-05-30", "2021-05-31"]
 */
const getBeforeArrDay = (day: number = 7): Array<string> => {
  const temp = []
  for (let i = 0; i < day; i++) {
    const time = new Date(new Date().setDate((new Date().getDate() + i) - day))
    const year = time.getFullYear()
    const month = `0${time.getMonth() + 1}`.slice(-2)
    const strDate = `0${time.getDate()}`.slice(-2)
    temp.push(`${year}-${month}-${strDate}`)
  }
  return temp
}
export default getBeforeArrDay