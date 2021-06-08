/*
 * @Author: crli
 * @Date: 2021-06-01 11:16:10
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 11:24:56
 * @Description: file content
 */
/**
 * 
 * @desc   动态插入css
 * @param  {string} string
 * @return {void} 
 */
const loadStyle = function (url: string): void {
  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}
export default loadStyle