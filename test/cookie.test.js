/*
 * @Author: crli
 * @Date: 2021-05-28 16:47:04
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:09:24
 * @Description: file content
 */
describe('Cookie API:', function () {
  describe('#getCookie()', function () {
    before(function () {
      crliutils.cookie.setCookie('test', 'value')
      crliutils.cookie.setCookie('testDD', 'valueFFF')
    })
    it(`crliutils.cookie.getCookie('test') should return string`, function () {
      assert(crliutils.cookie.getCookie('test') === 'value')
    })
    it(`crliutils.cookie.getCookie('empty') should return ''`, function () {
      assert(crliutils.cookie.getCookie('empty') === '')
    })
    it(`crliutils.cookie.getCookie('testDD') should return 'valueFFF'`, function () {
      assert(crliutils.cookie.getCookie('testDD') === 'valueFFF')
    })
    after(function () {
      crliutils.cookie.removeCookie('test')
      crliutils.cookie.removeCookie('testDD')
    })
  })

  describe('#removeCookie()', function () {
    before(function () {
      crliutils.cookie.setCookie('test', 'removeTestValue')
    })
    it(`crliutils.cookie.removeCookie('test') should return void`, function () {
      crliutils.cookie.removeCookie('test')
      assert.notEqual(crliutils.cookie.getCookie('test') === 'removeTestValue', true)
      assert(crliutils.cookie.getCookie('test') === '')
    })
  })

  describe('#setCookie()', function () {
    it(`crliutils.cookie.setCookie('test', 'setCookie') should return void`, function () {
      crliutils.cookie.setCookie('test', 'setCookie')
      assert(crliutils.cookie.getCookie('test') === 'setCookie')
    })
    it(`crliutils.cookie.setCookie('setpath', 'setpath', null,'/setpath/') should return void`, function () {
      crliutils.cookie.setCookie('setpath', 'setpath', null, '/setpath/')
      assert.notEqual(crliutils.cookie.getCookie('setpath'), 'setpath')
    })
    it(`crliutils.cookie.setCookie('setdomain', 'setdomain', null,null,'https://www.baidu.com/') should return void`, function () {
      crliutils.cookie.setCookie('setdomain', 'setdomain', null, null, 'https://www.baidu.com/')
      assert.notEqual(crliutils.cookie.getCookie('setdomain'), 'setdomain')
    })
    it(`crliutils.cookie.setCookie('setsecure', 'setsecure', null,null,null,true) should return void`, function () {
      crliutils.cookie.setCookie('setsecure', 'setsecure', null, null, null, true)
      assert.equal(crliutils.cookie.getCookie('setsecure'), 'setsecure')
    })
    after(function () {
      crliutils.cookie.removeCookie('test')
      crliutils.cookie.removeCookie('setpath')
      crliutils.cookie.removeCookie('setdomain')
      crliutils.cookie.removeCookie('setsecure')
    })
  })
})