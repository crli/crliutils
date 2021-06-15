/*
 * @Author: crli
 * @Date: 2021-06-10 09:23:11
 * @LastEditors: crli
 * @LastEditTime: 2021-06-15 16:04:28
 * @Description: file content
 */
describe('Regexp API:', function () {
  describe('#isEmail()', function () {
    it(`crliutils.isEmail() should return false`, function () {
      assert.equal(crliutils.isEmail() , false)
    })
    it(`crliutils.isEmail('695922129@qq.com') should return true`, function () {
      assert.equal(crliutils.isEmail('695922129@qq.com') , true)
    })
  })
  describe('#isIdCard()', function () {
    it(`crliutils.isIdCard('2111111111111111111111111') should return object`, function () {
      assert.deepEqual(crliutils.isIdCard('2111111111111111111111111'), {
        'pass': false,
        'msg': '身份证号格式错误'
      })
    })
    it(`crliutils.isIdCard('102222190101012422') should return object`, function () {
      assert.deepEqual(crliutils.isIdCard('102222190101012422'), {
        'pass': false,
        'msg': '身份证号地址编码错误'
      })
    })
    it(`crliutils.isIdCard('210781198101112419') should return object`, function () {
      assert.deepEqual(crliutils.isIdCard('210781198101112419'), {
        'pass': false,
        'msg': '身份信息校验错误'
      })
    })
    it(`crliutils.isIdCard('110101190103071969') should return object`, function () {
      assert.deepEqual(crliutils.isIdCard('110101190103071969'), {
        'pass': true,
        'msg': '验证成功'
      })
    })
  })
  describe('#isNotPass()', function () {
    it(`crliutils.isNotPass(null) should return true`, function () {
      assert.equal(crliutils.isNotPass(null) , true)
    })
    it(`crliutils.isNotPass(undefined) should return true`, function () {
      assert.equal(crliutils.isNotPass(undefined) , true)
    })
    it(`crliutils.isNotPass('') should return true`, function () {
      assert.equal(crliutils.isNotPass('') , true)
    })
    it(`crliutils.isNotPass({}) should return true`, function () {
      assert.equal(crliutils.isNotPass({}) , true)
    })
    it(`crliutils.isNotPass('null') should return true`, function () {
      assert.equal(crliutils.isNotPass('null') , true)
    })
    it(`crliutils.isNotPass('undefined') should return true`, function () {
      assert.equal(crliutils.isNotPass('undefined') , true)
    })
    it(`crliutils.isNotPass([]) should return true`, function () {
      assert.equal(crliutils.isNotPass([]) , true)
    })
    it(`crliutils.isNotPass([1]) should return false`, function () {
      assert.equal(crliutils.isNotPass([1]) , false)
    })
    it(`crliutils.isNotPass(0) should return true`, function () {
      assert.equal(crliutils.isNotPass(0) , true)
    })
    it(`crliutils.isNotPass(false) should return true`, function () {
      assert.equal(crliutils.isNotPass(false) , true)
    })
    it(`crliutils.isNotPass(1) should return false`, function () {
      assert.equal(crliutils.isNotPass(1) , false)
    })
    it(`crliutils.isNotPass({a:1}) should return false`, function () {
      assert.equal(crliutils.isNotPass({a:1}) , false)
    })
  })

  describe('#isPhoneNum()', function () {
    it(`crliutils.isPhoneNum(13333333333) should return true`, function () {
      assert.equal(crliutils.isPhoneNum(13333333333) , true)
    })
    it(`crliutils.isPhoneNum('111111111111') should return false`, function () {
      assert.equal(crliutils.isPhoneNum('111111111111') , false)
    })
  })
})