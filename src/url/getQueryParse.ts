/*
 * @Author: crli
 * @Date: 2021-05-31 11:03:48
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 14:07:46
 * @Description: file content
 */
/**
 * 
 * @desc   url参数转对象
 * @param  {String} url
 * @return {Object} 
 */
const getQueryParse = function (url: string = window && window.location.href): object {
  url = !url ? window && window.location.href : url;
  if (url.indexOf('?') === -1) {
    return {}
  }
  let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1)
  if (search === '') {
    return {}
  }
  let searchArr = search.split('&')

  const query: { [key: string]: any } = {}
  for (let i = 0; i < searchArr.length; i++) {
    let pair = searchArr[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  }
  return query
}

export default getQueryParse
