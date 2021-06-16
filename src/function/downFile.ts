/*
 * @Author: crli
 * @Date: 2021-06-01 11:27:57
 * @LastEditors: crli
 * @LastEditTime: 2021-06-16 15:42:55
 * @Description: file content
 */
/**
 * 
 * @desc  下载excel文件 请求时候注意responseType: 'blob',
 * @param  {Array<Blob>} [Blob] 文件流
 * @return {void} 
 */
const downFile = function (data: Array<Blob>, name: string): void {
  let date = new Date()
  let year: string = date.getFullYear() + ''
  let day: string = `0${date.getDate()}`.slice(-2)
  let month: string  = `0${date.getMonth() + 1}`.slice(-2)
  let blob = new Blob(data, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' })
  let downloadElement = document.createElement('a')
  let url = window.URL.createObjectURL(blob)
  downloadElement.href = url
  downloadElement.download = `${name}_${year + month + day}.csv`
  document.body.appendChild(downloadElement)
  downloadElement.click()
  window.URL.revokeObjectURL(url)
  document.body.removeChild(downloadElement)
}
export default downFile