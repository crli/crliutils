/*
 * @Author: crli
 * @Date: 2021-06-09 15:43:24
 * @LastEditors: crli
 * @LastEditTime: 2021-06-16 15:15:44
 * @Description: file content
 */
describe('Object API:', function () {
  describe('#deepCopy()', function () {
    it(`crliutils.deepCopy(null) should return null`, function () {
      assert.strictEqual(crliutils.deepCopy(null), null)
    })
    it(`crliutils.deepCopy(undefined ) should return undefined `, function () {
      assert.strictEqual(crliutils.deepCopy(undefined ), undefined )
    })
    it(`crliutils.deepCopy(NaN) should return NaN`, function () {
      assert.notEqual(crliutils.deepCopy(NaN), NaN)
    })
    it(`crliutils.deepCopy(true) should return true`, function () {
      assert.strictEqual(crliutils.deepCopy(true), true)
    })
    it(`crliutils.deepCopy(1) should return 1`, function () {
      assert.strictEqual(crliutils.deepCopy(1), 1)
    })
    it(`crliutils.deepCopy(Infinity) should return Infinity`, function () {
      assert.strictEqual(crliutils.deepCopy(Infinity), Infinity)
    })
    it(`crliutils.deepCopy('str') should return 'str'`, function () {
      assert.strictEqual(crliutils.deepCopy('str'), 'str')
    })
    it(`crliutils.deepCopy(new Date()) should return new Date()`, function () {
      let date = new Date('2021-06-09')
      let cloneDate = crliutils.deepCopy(date)
      assert.deepEqual(crliutils.deepCopy(date), cloneDate)
    })
    it(`crliutils.deepCopy(set) should return  new set`, function () {
      let set = new Set([1, 2, 3])
      let cloneSet = crliutils.deepCopy(set)
      set.add(4)
      assert.equal(set.has(4), true)
      assert.equal(cloneSet.has(4), false)
    })
    it(`crliutils.deepCopy(obj) should return  new obj`, function () {
      let obj = {
        a: 0
      }
      let cloneObj = crliutils.deepCopy(obj)
      cloneObj.a = 2
      assert.equal(obj.a === 2, false)
    })
    it(`crliutils.deepCopy(reg) should return  new reg`, function () {
      let reg = /^abc$/
      let cloneReg = crliutils.deepCopy(reg)
      assert.deepEqual(reg, cloneReg)
    })
    it(`crliutils.deepCopy(new Number(111)) should return  new Number(111)`, function () {
      let numObj = new Number(111)
      let cloneNumObj = crliutils.deepCopy(numObj)
      assert.deepEqual(numObj, cloneNumObj)
    })
    it(`crliutils.deepCopy(new Number(111)) should return  new Number(111)`, function () {
      let obj = {
        a: {
          b: 1
        }
      }
      let cloneobj = crliutils.deepCopy(obj)
      assert.equal(obj.a.b, cloneobj.a.b)
    })
  })
})