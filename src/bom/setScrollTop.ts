/*
 * @Author: crli
 * @Date: 2021-06-08 14:35:54
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:39:51
 * @Description: file content
 */
/**
 * 
 * @desc 设置滚动条距顶部的距离
 * @param {Number} value
 */
const setScrollTop = (value: number): void => {
  window.scrollTo(0, value)
}

export default setScrollTop