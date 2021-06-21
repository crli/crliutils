/*
 * @Author: crli
 * @Date: 2021-06-10 09:23:11
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:10:37
 * @Description: file content
 */
describe('Regexp API:', function () {
  describe('#isEmail()', function () {
    it(`crliutils.regexp.isEmail() should return false`, function () {
      assert.equal(crliutils.regexp.isEmail() , false)
    })
    it(`crliutils.regexp.isEmail('695922129@qq.com') should return true`, function () {
      assert.equal(crliutils.regexp.isEmail('695922129@qq.com') , true)
    })
  })
  describe('#isIdCard()', function () {
    it(`crliutils.regexp.isIdCard('2111111111111111111111111') should return object`, function () {
      assert.deepEqual(crliutils.regexp.isIdCard('2111111111111111111111111'), {
        'pass': false,
        'msg': '身份证号格式错误'
      })
    })
    it(`crliutils.regexp.isIdCard('102222190101012422') should return object`, function () {
      assert.deepEqual(crliutils.regexp.isIdCard('102222190101012422'), {
        'pass': false,
        'msg': '身份证号地址编码错误'
      })
    })
    it(`crliutils.regexp.isIdCard('210781198101112419') should return object`, function () {
      assert.deepEqual(crliutils.regexp.isIdCard('210781198101112419'), {
        'pass': false,
        'msg': '身份信息校验错误'
      })
    })
    it(`crliutils.regexp.isIdCard('110101190103071969') should return object`, function () {
      assert.deepEqual(crliutils.regexp.isIdCard('110101190103071969'), {
        'pass': true,
        'msg': '验证成功'
      })
    })
  })
  describe('#isNotPass()', function () {
    it(`crliutils.regexp.isNotPass(null) should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass(null) , true)
    })
    it(`crliutils.regexp.isNotPass(undefined) should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass(undefined) , true)
    })
    it(`crliutils.regexp.isNotPass('') should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass('') , true)
    })
    it(`crliutils.regexp.isNotPass({}) should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass({}) , true)
    })
    it(`crliutils.regexp.isNotPass('null') should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass('null') , true)
    })
    it(`crliutils.regexp.isNotPass('undefined') should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass('undefined') , true)
    })
    it(`crliutils.regexp.isNotPass([]) should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass([]) , true)
    })
    it(`crliutils.regexp.isNotPass([1]) should return false`, function () {
      assert.equal(crliutils.regexp.isNotPass([1]) , false)
    })
    it(`crliutils.regexp.isNotPass(0) should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass(0) , true)
    })
    it(`crliutils.regexp.isNotPass(false) should return true`, function () {
      assert.equal(crliutils.regexp.isNotPass(false) , true)
    })
    it(`crliutils.regexp.isNotPass(1) should return false`, function () {
      assert.equal(crliutils.regexp.isNotPass(1) , false)
    })
    it(`crliutils.regexp.isNotPass({a:1}) should return false`, function () {
      assert.equal(crliutils.regexp.isNotPass({a:1}) , false)
    })
  })

  describe('#isPhoneNum()', function () {
    it(`crliutils.regexp.isPhoneNum(13333333333) should return true`, function () {
      assert.equal(crliutils.regexp.isPhoneNum(13333333333) , true)
    })
    it(`crliutils.regexp.isPhoneNum('111111111111') should return false`, function () {
      assert.equal(crliutils.regexp.isPhoneNum('111111111111') , false)
    })
  })
})