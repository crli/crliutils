/*
 * @Author: crli
 * @Date: 2021-05-27 14:39:05
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 10:54:15
 * @Description: file content
 */
import cookie from './cookie/index'
import url from './url/index'
import object from './object/index'
import bom from './bom/index'
import functions from './function/index'
import regexp from './regexp/index'
import storage from './storage/index'
import date from './date/index'
import time from './time/index'
export {
  cookie,
  url,
  object,
  bom,
  functions,
  regexp,
  storage,
  date,
  time
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
  ...time
}