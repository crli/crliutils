/*
 * @Author: crli
 * @Date: 2021-06-10 10:14:53
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 09:58:29
 * @Description: file content
 */
describe('Storage API:', function () {
  describe('#getStore()', function () {
      before(function () {
          crliutils.setStore('test', 'value')
      })
      it(`crliutils.getStore('test') should return value`, function () {
          assert.equal(crliutils.getStore('test') , 'value')
      })
      it(`crliutils.getStore('empty') should return null`, function () {
          assert.equal(crliutils.getStore('empty') , null)
      })
      after(function () {
          crliutils.removeStore('test')
      })
  })

  describe('#removeStore()', function () {
      before(function () {
          crliutils.setStore('test', 'removeTestValue')
          crliutils.setStore('test1', 'removeTestValue1')
      })
      it(`crliutils.removeStore('test') should return void`, function () {
          crliutils.removeStore('test')
          assert.notEqual(crliutils.getStore('test') === 'removeTestValue', true)
          assert.equal(crliutils.getStore('test') , null)
      })
      it(`crliutils.removeStore() should return void`, function () {
        crliutils.removeStore()
        assert.equal(crliutils.getStore('test1') , 'removeTestValue1')
    })
  })

  describe('#setStore()', function () {
      it(`crliutils.setStore() should return void`, function () {
        crliutils.setStore()
        assert.equal(crliutils.getStore() , undefined)
      })
      it(`crliutils.setStore('test') should return void`, function () {
          crliutils.setStore('test', 'setStore')
          assert.equal(crliutils.getStore('test') , 'setStore')
      })
      it(`crliutils.setStore('name',[]) should return void`, function () {
        crliutils.setStore('name',[])
        assert.deepEqual(crliutils.getStore('name') , [])
      })
      after(function () {
          crliutils.removeStore('test')
      })
  })
  describe('#clearStore()', function () {
    it(`crliutils.clearStore() should return void`, function () {
        crliutils.setStore('test', 'setStore')
        crliutils.setStore('test1', 'setStore1')
        crliutils.clearStore()
        assert.equal(crliutils.getStore('test') , null)
        assert.equal(crliutils.getStore('test1') , null)
    })
})
})