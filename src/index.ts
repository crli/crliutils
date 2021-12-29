/*
 * @Author: crli
 * @Date: 2021-05-27 14:39:05
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 11:27:47
 * @Description: file content
 */
import cookie, {setCookie, getCookie, removeCookie} from './cookie/index'
import url,{ getQueryParse, getQueryStringify, getUrlQuery} from './url/index'
import object, {deepCopy} from './object/index'
import bom, {fullscreenToggel,
  listenfullscreen,
  getScrollTop,
  setScrollTop,
  scrollTo,
  windowResize} from './bom/index'
import functions, {
  getType,
  insertCss,
  downFile,
  getOs,
  getRandomNum,
  getSex,
  debounce,
  throttle
} from './function/index'
import regexp,{
  isEmail,
  isIdCard,
  isNotPass,
  isPhoneNum
} from './regexp/index'
import storage,{
  setStore,
  getStore,
  removeStore,
  clearStore
} from './storage/index'
import date,{
  getBeforeArrDay,
  getMonthArrDay,
  getMonthDays,
  getTwoArrDay,
  isLeapYeay
} from './date/index'
import time,{
  formatPassTime,
  formatTimeCountdown,
  formatTime
} from './time/index'
import array,{
  getArrChunk,
  isArrEqual
} from './array/index'
import dom,{
  addClass,
  getStyle,
  hasClass,
  removeClass
} from './dom/index'
export {
  setCookie,
  getCookie,
  removeCookie,
  getQueryParse,
  getQueryStringify,
  getUrlQuery,
  deepCopy,
  fullscreenToggel,
  listenfullscreen,
  getScrollTop,
  setScrollTop,
  scrollTo,
  windowResize,
  getType,
  insertCss,
  downFile,
  getOs,
  getRandomNum,
  getSex,
  debounce,
  throttle,
  isEmail,
  isIdCard,
  isNotPass,
  isPhoneNum,
  setStore,
  getStore,
  removeStore,
  clearStore,
  getBeforeArrDay,
  getMonthArrDay,
  getMonthDays,
  getTwoArrDay,
  isLeapYeay,
  formatPassTime,
  formatTimeCountdown,
  formatTime,
  getArrChunk,
  isArrEqual,
  addClass,
  getStyle,
  hasClass,
  removeClass
}
export default {
  ...cookie,
  ...url,
  ...object,
  ...bom,
  ...functions,
  ...regexp,
  ...storage,
  ...date,
  ...time,
  ...array,
  ...dom
}