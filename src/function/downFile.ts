/*
 * @Author: crli
 * @Date: 2021-06-01 11:27:57
 * @LastEditors: crli
 * @LastEditTime: 2021-06-11 10:11:06
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
  let month: string = date.getMonth() + 1 + ''
  let day: string = date.getDate() + ''
  if (Number(month) < 10) month = "0" + month
  if (Number(day) < 10) day = "0" + day
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