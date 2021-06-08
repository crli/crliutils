/*
 * @Author: crli
 * @Date: 2021-06-08 13:31:17
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:42:25
 * @Description: file content
 */
/**
 * @desc 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 * @param {Array} array 数组
 * @param {Number} size 长度
 */
const getArrChunk = (array: Array<any>, size: number = 1): Array<Array<any>> => {
  const pages: any[] = []
  array.forEach((item, index) => {
    const page = Math.floor(index / size)
    if (!pages[page]) {
      pages[page] = []
    }
    pages[page].push(item)
  })
  return pages
}
const getArrChunk1 = (array: Array<any>, size: number = 1): Array<Array<any>> => {
  const pages: any[] = []
  let splitNum = Math.ceil(array.length / size)
  for (let i = 0; i < splitNum; i++) {
    pages.push(array.slice(i * size, i * size + size))
  }
  return pages
}
export default getArrChunk