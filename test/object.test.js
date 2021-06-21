/*
 * @Author: crli
 * @Date: 2021-06-09 15:43:24
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:10:22
 * @Description: file content
 */
describe('Object API:', function () {
  describe('#deepCopy()', function () {
    it(`crliutils.object.deepCopy(null) should return null`, function () {
      assert.strictEqual(crliutils.object.deepCopy(null), null)
    })
    it(`crliutils.object.deepCopy(undefined ) should return undefined `, function () {
      assert.strictEqual(crliutils.object.deepCopy(undefined ), undefined )
    })
    it(`crliutils.object.deepCopy(NaN) should return NaN`, function () {
      assert.notEqual(crliutils.object.deepCopy(NaN), NaN)
    })
    it(`crliutils.object.deepCopy(true) should return true`, function () {
      assert.strictEqual(crliutils.object.deepCopy(true), true)
    })
    it(`crliutils.object.deepCopy(1) should return 1`, function () {
      assert.strictEqual(crliutils.object.deepCopy(1), 1)
    })
    it(`crliutils.object.deepCopy(Infinity) should return Infinity`, function () {
      assert.strictEqual(crliutils.object.deepCopy(Infinity), Infinity)
    })
    it(`crliutils.object.deepCopy('str') should return 'str'`, function () {
      assert.strictEqual(crliutils.object.deepCopy('str'), 'str')
    })
    it(`crliutils.object.deepCopy(new Date()) should return new Date()`, function () {
      let date = new Date('2021-06-09')
      let cloneDate = crliutils.object.deepCopy(date)
      assert.deepEqual(crliutils.object.deepCopy(date), cloneDate)
    })
    it(`crliutils.object.deepCopy(set) should return  new set`, function () {
      let set = new Set([1, 2, 3])
      let cloneSet = crliutils.object.deepCopy(set)
      set.add(4)
      assert.equal(set.has(4), true)
      assert.equal(cloneSet.has(4), false)
    })
    it(`crliutils.object.deepCopy(obj) should return  new obj`, function () {
      let obj = {
        a: 0
      }
      let cloneObj = crliutils.object.deepCopy(obj)
      cloneObj.a = 2
      assert.equal(obj.a === 2, false)
    })
    it(`crliutils.object.deepCopy(reg) should return  new reg`, function () {
      let reg = /^abc$/
      let cloneReg = crliutils.object.deepCopy(reg)
      assert.deepEqual(reg, cloneReg)
    })
    it(`crliutils.object.deepCopy(new Number(111)) should return  new Number(111)`, function () {
      let numObj = new Number(111)
      let cloneNumObj = crliutils.object.deepCopy(numObj)
      assert.deepEqual(numObj, cloneNumObj)
    })
    it(`crliutils.object.deepCopy(new Number(111)) should return  new Number(111)`, function () {
      let obj = {
        a: {
          b: 1
        }
      }
      let cloneobj = crliutils.object.deepCopy(obj)
      assert.equal(obj.a.b, cloneobj.a.b)
    })
  })
})