/*
 * @Author: crli
 * @Date: 2021-12-29 10:05:59
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 11:23:36
 * @Description: file content
 */
interface Throttle {
  (this: Throttle): () => Function;
}
const throttle = function (fn:Function, wait: number): Function {
  // 记录上一次执行的时间戳
  let previous = 0
  let time: any = null
  return function(this: Throttle, ...args: any[]) {
      // 当前的时间戳，然后减去之前的时间戳，大于设置的时间间隔，就执行函数，否则不执行
      if(Date.now() - previous > wait) {
          clearTimeout(time)
          time = null
          // 更新上一次的时间戳为当前时间戳
          previous = Date.now()
          fn.apply(this, args)       
      } else if(!time)  {
          time = setTimeout(() => {
              time = null
              fn.apply(this, args)
          }, wait)
      }
  }
}
export default throttle