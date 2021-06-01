/*
 * @Author: crli
 * @Date: 2021-06-01 09:46:36
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 14:04:46
 * @Description: file content
 */

/**
* esc监听全屏
*/
const listenfullscreen = function(callback: Function): void {
  function listen() {
      callback()
  }
  document.addEventListener("fullscreenchange", function () {
      listen();
  });
  document.addEventListener("mozfullscreenchange", function () {
      listen();
  });
  document.addEventListener("webkitfullscreenchange", function () {
      listen();
  });
  document.addEventListener("msfullscreenchange", function () {
      listen();
  });
};

export default listenfullscreen