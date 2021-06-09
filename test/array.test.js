/*
 * @Author: crli
 * @Date: 2021-06-09 09:09:27
 * @LastEditors: crli
 * @LastEditTime: 2021-06-09 10:47:09
 * @Description: file content
 */
describe('Array API:', function () {
  describe('#getArrChunk()', function () {
      it(`crliutils.getArrChunk(arr, 3) should return Array`, function () {
        let arr = [1,2,3,4,5,6,7,8]
        assert.deepEqual(crliutils.getArrChunk(arr, 3), [[1,2,3],[4,5,6],[7,8]])
      })
      it(`crliutils.getArrChunk(arr2, 3) should return Array`, function () {
        let arr2 = [{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},]
        assert.deepEqual(crliutils.getArrChunk(arr2, 3) , [[{a:1},{a:1},{a:1}],[{a:1},{a:1},{a:1}],[{a:1},{a:1}]])
      })
      it(`crliutils.getArrChunk([], 3) should return Array`, function () {
        assert.deepEqual(crliutils.getArrChunk([], 3) , [])
      })
  })
  describe('#isArrEqual()', function () {
    it(`crliutils.isArrEqual(arr, [1,2,3,4,5,6,7,8]) should return true`, function () {
      let arr = [1,2,3,4,5,6,7,8]
      assert.strictEqual(crliutils.isArrEqual(arr, [1,2,3,4,5,6,7,8]), true)
    })
    it(`crliutils.isArrEqual([1], [{}]) should return false`, function () {
      let arr2 = [1]
      let arr3 = [{}]
      assert.strictEqual(crliutils.isArrEqual(arr2, arr3), false)
    })
    it(`crliutils.isArrEqual([{}], [{}]) should return false`, function () {
      let arr3 = [{}]
      let arr4 = [{}]
      assert.strictEqual(crliutils.isArrEqual(arr3, arr4), false)
    })
  })
})