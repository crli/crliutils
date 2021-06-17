/*
 * @Author: crli
 * @Date: 2021-06-01 09:46:36
 * @LastEditors: crli
 * @LastEditTime: 2021-06-17 13:27:43
 * @Description: file content
 */

/**
 * 浏览器全屏与退出全屏切换
 */
const fullscreenToggel = function (): void {
  if (fullscreenEnable()) {
    exitFullScreen()
  } else {
    reqFullScreen()
  }
};

/**
* 浏览器全屏
*/
const reqFullScreen = function (): Promise<void> {
  if (document.documentElement.requestFullscreen) {
    return document.documentElement.requestFullscreen()
  } else if (document.documentElement.webkitRequestFullScreen) {
    return document.documentElement.webkitRequestFullScreen()
  } else if (document.documentElement.mozRequestFullScreen) {
    return document.documentElement.mozRequestFullScreen()
  } else {
    return document.documentElement.msRequestFullscreen()
  }
}
/**
* 浏览器退出全屏
*/
function exitFullScreen(): Promise<void> {
  if (document.exitFullscreen) {
    return document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    return document.mozCancelFullScreen()
  } else if (document.webkitCancelFullScreen) {
    return document.webkitCancelFullScreen()
  } else {
    return document.msExitFullscreen()
  }
};
/**
 * 浏览器判断是否全屏
 */
const fullscreenEnable = () :boolean => {
  var isFullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
  return !!isFullscreen
}
export default fullscreenToggel