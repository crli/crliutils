/*
 * @Author: crli
 * @Date: 2021-06-08 14:29:58
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:41:08
 * @Description: file content
 */
/**
 * 
 * @desc H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */

const windowResize = function (downCb: Function, upCb: Function): void {
  const clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function () { }
  upCb = typeof upCb === 'function' ? upCb : function () { }
  window.addEventListener('resize', () => {
    let height = window.innerHeight
    if (height === clientHeight) {
      downCb()
    }
    if (height < clientHeight) {
      upCb()
    }
  })
}
export default windowResize