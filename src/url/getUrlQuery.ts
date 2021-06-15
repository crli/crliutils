/*
 * @Author: crli
 * @Date: 2021-05-31 10:38:30
 * @LastEditors: crli
 * @LastEditTime: 2021-06-15 16:17:01
 * @Description: file content
 */
/**
 * @desc url中获取参数名为name的参数值
 * @param {String} name 参数名
 * @param {String} search 参数名 默认 window.location.search
 */
const getUrlQuery = function (name: string | null, search :string = window.location.search ): string | null {
  if (!name) return null
  let r = search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"))
  if (r != null) return unescape(r[2]); return null
}
export default getUrlQuery