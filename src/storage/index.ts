/*
 * @Author: crli
 * @Date: 2021-06-01 14:03:16
 * @LastEditors: crli
 * @LastEditTime: 2021-06-01 14:42:07
 * @Description: file content
 */
/**
 * 存储localStorage
 */
const setStore = (name: string, content: string) : void => {
	if (!name) return
	if (typeof content !== 'string') {
		content = JSON.stringify(content)
	}
	window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
const getStore = (name: string) : any => {
	if (!name) return
  let obj = window.localStorage.getItem(name)
  if (obj === null || obj === 'undefined') {
    return obj
  } else {
    try {
      return JSON.parse(obj)
    } catch{
      return obj
    }
  }
}

/**
 * 删除localStorage
 */
const removeStore = (name: string) : void => {
	if (!name) return
	window.localStorage.removeItem(name)
}

/**
 * 清空localStorage
 */
const clearStore = () : void => {
	window.localStorage.clear()
}

export default {
  setStore,
  getStore,
  removeStore,
  clearStore
}