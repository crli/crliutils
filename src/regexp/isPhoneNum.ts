/*
 * @Author: crli
 * @Date: 2021-06-01 13:23:32
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 13:36:23
 * @Description: file content
 */
/**
 * 
 * @desc   判断是否为手机号
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
const isPhoneNum = function(str: string|number) :boolean {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(String(str))
}

export default isPhoneNum