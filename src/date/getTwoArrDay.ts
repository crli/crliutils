/*
 * @Author: crli
 * @Date: 2021-06-01 16:47:55
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 09:58:17
 * @Description: file content
 */
/**
 * 
 * @desc   获得包含当天和前N天的日期数组 比如今天是2021-06-01
 * @param  {day} number = 7
 * @return {Array<string>} ["2021-05-26", "2021-06-01"]
 */
const getTwoArrDay = (day: number = 7) : Array<string> => {
  const temp = []
  const dayArr = [-day + 1, 0]
  for (let i = 0; i < dayArr.length; i++) {
    const time = new Date(new Date().setDate(new Date().getDate() + dayArr[i]))
    const year = time.getFullYear()
    const month = `0${time.getMonth() + 1}`.slice(-2)
    const strDate = `0${time.getDate()}`.slice(-2)
    temp.push(`${year}-${month}-${strDate}`)
  }
  return temp
}
export default getTwoArrDay