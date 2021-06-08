/*
 * @Author: crli
 * @Date: 2021-06-08 14:35:54
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 14:38:51
 * @Description: file content
 */
/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
const getScrollTop = (): number => {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
}

export default getScrollTop