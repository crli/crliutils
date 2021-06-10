/*
 * @Author: crli
 * @Date: 2021-06-10 10:15:54
 * @LastEditors: crli
 * @LastEditTime: 2021-06-10 17:07:05
 * @Description: file content
 */
describe('Function API:', function () {
  describe('#getOs()', function () {
    it(`crliutils.getOs() should return object`, function () {
      assert.deepEqual(crliutils.getOs(), {
        android: false,
        iphone: false,
        ios: false,
        ipad: false,
        wechat: false
      })
    })
  })
  describe('#getRandomNum()', function () {
    it(`crliutils.getRandomNum(1,100) >=1 && crliutils.getRandomNum(1,100) <=100 should return true`, function () {
      let n = crliutils.getRandomNum(1,100)
      assert(n <= 100 && n>=1)
    })
  })
  describe('#getSex()', function () {
    it(`crliutils.getSex('110101190103071969') should return {
      sex: '女',
      birthday: '1901-03-07'
    }`, function () {
      assert.deepEqual(crliutils.getSex('110101190103071969'), {
        sex: '女',
        birthday: '1901-03-07'
      })
    })
  })
  // '[object Boolean]': 'boolean',
  //   '[object Number]': 'number',
  //   '[object String]': 'string',
  //   '[object Function]': 'function',
  //   '[object Array]': 'array',
  //   '[object Date]': 'date',
  //   '[object RegExp]': 'regExp',
  //   '[object Undefined]': 'undefined',
  //   '[object Null]': 'null',
  //   '[object Object]': 'object',
  //   '[object Symbol]': 'symbol',
  //   '[object Set]': 'set',
  //   '[object WeakSet]': 'weakSet',
  //   '[object Map]': 'map',
  //   '[object WeakMap]': 'weakmap'
  // }
  // if (obj instanceof Element) {
  //   return 'element'
  // }
  describe('#getType()', function () {
    it(`crliutils.getType(false) should return 'boolean'`, function () {
      assert.equal(crliutils.getType(false), 'boolean')
    })
    it(`crliutils.getType(1) should return 'number'`, function () {
      assert.equal(crliutils.getType(1), 'number')
    })
    it(`crliutils.getType(function(){}) should return 'function'`, function () {
      assert.equal(crliutils.getType(function(){}), 'function')
    })
    it(`crliutils.getType([]) should return 'array'`, function () {
      assert.equal(crliutils.getType([]), 'array')
    })
    it(`crliutils.getType(new Date()) should return 'date'`, function () {
      assert.equal(crliutils.getType(new Date()), 'date')
    })
    it(`crliutils.getType(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/) should return 'regExp'`, function () {
      assert.equal(crliutils.getType(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/), 'regExp')
    })
    it(`crliutils.getType(undefined) should return 'undefined'`, function () {
      assert.equal(crliutils.getType(undefined), 'undefined')
    })
    it(`crliutils.getType(null) should return 'null'`, function () {
      assert.equal(crliutils.getType(null), 'null')
    })
    it(`crliutils.getType({}) should return 'object'`, function () {
      assert.equal(crliutils.getType({}), 'object')
    })
    it(`crliutils.getType(Symbol(11)) should return 'symbol'`, function () {
      assert.equal(crliutils.getType(Symbol(11)), 'symbol')
    })
    it(`crliutils.getType(new Set([1,2,3])) should return 'set'`, function () {
      assert.equal(crliutils.getType(new Set([1,2,3])), 'set')
    })
    it(`crliutils.getType(div) should return 'element'`, function () {
      let div = document.createElement('div')
      assert.equal(crliutils.getType(div), 'element')
    })
  })
})