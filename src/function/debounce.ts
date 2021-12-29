/*
 * @Author: crli
 * @Date: 2021-12-29 10:05:47
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 11:22:13
 * @Description: file content
 */
interface Debounce {
  (this: Debounce): () => Function;
}
const debounce = function (fn:Function, wait: number): Function {
  let time: any = null
  return function(this: Debounce,...args: any[]) {
      clearTimeout(time)
      time = setTimeout(() => {
          fn.apply(this, args)
      }, wait);
  }
}
export default debounce