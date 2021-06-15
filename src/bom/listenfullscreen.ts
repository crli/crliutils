/*
 * @Author: crli
 * @Date: 2021-06-01 09:46:36
 * @LastEditors: crli
 * @LastEditTime: 2021-06-15 15:29:22
 * @Description: file content
 */

/**
* esc监听全屏
*/
const listenfullscreen = function (callback: Function): void {
  callback = typeof callback === 'function' ? callback : function () {}
  function listen() {
    callback()
  }
  document.addEventListener("fullscreenchange", function () {
    listen()
  })
  document.addEventListener("mozfullscreenchange", function () {
    listen()
  })
  document.addEventListener("webkitfullscreenchange", function () {
    listen()
  })
  document.addEventListener("msfullscreenchange", function () {
    listen()
  })
}

export default listenfullscreen