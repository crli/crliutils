/*
 * @Author: crli
 * @Date: 2021-06-01 15:48:06
 * @LastEditors: crli
 * @LastEditTime: 2021-06-16 09:43:52
 * @Description: file content
 */
/**
 * 
 * @desc  根据身份证号获取生日，性别
 * @param  {String} idCardNo 
 * @return {object}
 */
const getSex = (idCardNo: string): object | null => {
  if (!idCardNo) return null
  let sex = null
  let birth = null
  let myDate = new Date()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  let age = 0

  if (idCardNo.length === 18) {
    age = myDate.getFullYear() - Number(idCardNo.substring(6, 10)) - 1
    sex = idCardNo.substring(16, 17)
    birth = idCardNo.substring(6, 10) + "-" + idCardNo.substring(10, 12) + "-" + idCardNo.substring(12, 14)
    if (Number(idCardNo.substring(10, 12)) < month || Number(idCardNo.substring(10, 12)) == month && Number(idCardNo.substring(12, 14)) <= day) age++
  }

  if (idCardNo.length === 15) {
    age = myDate.getFullYear() - Number(idCardNo.substring(6, 8)) - 1901
    sex = idCardNo.substring(13, 14)
    birth = "19" + idCardNo.substring(6, 8) + "-" + idCardNo.substring(8, 10) + "-" + idCardNo.substring(10, 12)
    if (Number(idCardNo.substring(8, 10)) < month || Number(idCardNo.substring(8, 10)) == month && Number(idCardNo.substring(10, 12)) <= day) age++
  }

  if (Number(sex) % 2 === 0)
    sex = '女'
  else
    sex = '男'

  return {
    sex,
    birthday: birth,
    age
  }
}
export default getSex