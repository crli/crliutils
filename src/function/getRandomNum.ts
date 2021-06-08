/*
 * @Author: crli
 * @Date: 2021-06-08 15:22:16
 * @LastEditors: crli
 * @LastEditTime: 2021-06-08 15:43:33
 * @Description: file content
 */
/**
 * 
 * @desc 生成指定范围[min, max]的随机数
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
const getRandomNum = (min: number, max: number): number => {
  let nmin = Math.ceil(min)
  let nmax = Math.floor(max)
  return Math.floor(Math.random() * (nmax - nmin + 1)) + nmin;
}

export default getRandomNum