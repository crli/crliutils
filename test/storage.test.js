/*
 * @Author: crli
 * @Date: 2021-06-10 10:14:53
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:10:51
 * @Description: file content
 */
describe('Storage API:', function () {
  describe('#getStore()', function () {
      before(function () {
          crliutils.storage.setStore('test', 'value')
      })
      it(`crliutils.storage.getStore('test') should return value`, function () {
          assert.equal(crliutils.storage.getStore('test') , 'value')
      })
      it(`crliutils.storage.getStore('empty') should return null`, function () {
          assert.equal(crliutils.storage.getStore('empty') , null)
      })
      after(function () {
          crliutils.storage.removeStore('test')
      })
  })

  describe('#removeStore()', function () {
      before(function () {
          crliutils.storage.setStore('test', 'removeTestValue')
          crliutils.storage.setStore('test1', 'removeTestValue1')
      })
      it(`crliutils.storage.removeStore('test') should return void`, function () {
          crliutils.storage.removeStore('test')
          assert.notEqual(crliutils.storage.getStore('test') === 'removeTestValue', true)
          assert.equal(crliutils.storage.getStore('test') , null)
      })
      it(`crliutils.storage.removeStore() should return void`, function () {
        crliutils.storage.removeStore()
        assert.equal(crliutils.storage.getStore('test1') , 'removeTestValue1')
    })
  })

  describe('#setStore()', function () {
      it(`crliutils.storage.setStore() should return void`, function () {
        crliutils.storage.setStore()
        assert.equal(crliutils.storage.getStore() , undefined)
      })
      it(`crliutils.storage.setStore('test') should return void`, function () {
          crliutils.storage.setStore('test', 'setStore')
          assert.equal(crliutils.storage.getStore('test') , 'setStore')
      })
      it(`crliutils.storage.setStore('name',[]) should return void`, function () {
        crliutils.storage.setStore('name',[])
        assert.deepEqual(crliutils.storage.getStore('name') , [])
      })
      after(function () {
          crliutils.storage.removeStore('test')
      })
  })
  describe('#clearStore()', function () {
    it(`crliutils.storage.clearStore() should return void`, function () {
        crliutils.storage.setStore('test', 'setStore')
        crliutils.storage.setStore('test1', 'setStore1')
        crliutils.storage.clearStore()
        assert.equal(crliutils.storage.getStore('test') , null)
        assert.equal(crliutils.storage.getStore('test1') , null)
    })
})
})