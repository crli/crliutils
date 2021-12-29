/*
 * @Author: crli
 * @Date: 2021-05-28 16:47:04
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 09:57:32
 * @Description: file content
 */
describe('Cookie API:', function () {
  describe('#getCookie()', function () {
    before(function () {
      crliutils.setCookie('test', 'value')
      crliutils.setCookie('testDD', 'valueFFF')
    })
    it(`crliutils.getCookie('test') should return string`, function () {
      assert(crliutils.getCookie('test') === 'value')
    })
    it(`crliutils.getCookie('empty') should return ''`, function () {
      assert(crliutils.getCookie('empty') === '')
    })
    it(`crliutils.getCookie('testDD') should return 'valueFFF'`, function () {
      assert(crliutils.getCookie('testDD') === 'valueFFF')
    })
    after(function () {
      crliutils.removeCookie('test')
      crliutils.removeCookie('testDD')
    })
  })

  describe('#removeCookie()', function () {
    before(function () {
      crliutils.setCookie('test', 'removeTestValue')
    })
    it(`crliutils.removeCookie('test') should return void`, function () {
      crliutils.removeCookie('test')
      assert.notEqual(crliutils.getCookie('test') === 'removeTestValue', true)
      assert(crliutils.getCookie('test') === '')
    })
  })

  describe('#setCookie()', function () {
    it(`crliutils.setCookie('test', 'setCookie') should return void`, function () {
      crliutils.setCookie('test', 'setCookie')
      assert(crliutils.getCookie('test') === 'setCookie')
    })
    it(`crliutils.setCookie('setpath', 'setpath', null,'/setpath/') should return void`, function () {
      crliutils.setCookie('setpath', 'setpath', null, '/setpath/')
      assert.notEqual(crliutils.getCookie('setpath'), 'setpath')
    })
    it(`crliutils.setCookie('setdomain', 'setdomain', null,null,'https://www.baidu.com/') should return void`, function () {
      crliutils.setCookie('setdomain', 'setdomain', null, null, 'https://www.baidu.com/')
      assert.notEqual(crliutils.getCookie('setdomain'), 'setdomain')
    })
    it(`crliutils.setCookie('setsecure', 'setsecure', null,null,null,true) should return void`, function () {
      crliutils.setCookie('setsecure', 'setsecure', null, null, null, true)
      assert.equal(crliutils.getCookie('setsecure'), 'setsecure')
    })
    after(function () {
      crliutils.removeCookie('test')
      crliutils.removeCookie('setpath')
      crliutils.removeCookie('setdomain')
      crliutils.removeCookie('setsecure')
    })
  })
})