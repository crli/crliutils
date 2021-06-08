/*
 * @Author: crli
 * @Date: 2021-05-31 13:39:25
 * @LastEditors: crli
 * @LastEditTime: 2021-05-31 13:48:27
 * @Description: file content
 */
/**
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
const getQueryStringify = function (obj: { [key: string]: any }): object | string {
  if (!obj) return ''
  let pairs = []
  for (let key in obj) {
    let value = obj[key]
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
  }
  return pairs.join('&')
}

export default getQueryStringify