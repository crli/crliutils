/*
 * @Author: crli
 * @Date: 2021-06-08 14:35:54
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:40:27
 * @Description: file content
 */
import getScrollTop from './getScrollTop'
import setScrollTop from './setScrollTop'
var requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()
/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 
 * @param {Number} duration 
 */
const scrollTo = (to: number, duration: number): void => {
  if (duration <= 0) {
    setScrollTop(to)
    return
  }
  let diff = to - getScrollTop()
  if (diff === 0) return
  let step = diff / duration * 10
  requestAnimFrame(
    function () {
      if (Math.abs(step) > Math.abs(diff)) {
        setScrollTop(getScrollTop() + diff)
        return
      }
      setScrollTop(getScrollTop() + step)
      if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
        return
      }
      scrollTo(to, duration - 16)
    })
}

export default scrollTo