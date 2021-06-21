/*
 * @Author: crli
 * @Date: 2021-06-09 09:09:27
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:08:27
 * @Description: file content
 */
describe('Array API:', function () {
  describe('#getArrChunk()', function () {
      it(`crliutils.array.getArrChunk(arr, 3) should return Array`, function () {
        let arr = [1,2,3,4,5,6,7,8]
        assert.deepEqual(crliutils.array.getArrChunk(arr, 3), [[1,2,3],[4,5,6],[7,8]])
      })
      it(`crliutils.array.getArrChunk(arr) should return Array`, function () {
        let arr = [1,2,3]
        assert.deepEqual(crliutils.array.getArrChunk(arr), [[1],[2],[3]])
      })
      it(`crliutils.array.getArrChunk(arr2, 3) should return Array`, function () {
        let arr2 = [{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},]
        assert.deepEqual(crliutils.array.getArrChunk(arr2, 3) , [[{a:1},{a:1},{a:1}],[{a:1},{a:1},{a:1}],[{a:1},{a:1}]])
      })
      it(`crliutils.array.getArrChunk([], 3) should return Array`, function () {
        assert.deepEqual(crliutils.array.getArrChunk([], 3) , [])
      })
  })
  describe('#isArrEqual()', function () {
    it(`crliutils.array.isArrEqual(arr, [1,2,3,4,5,6,7,8]) should return true`, function () {
      let arr = [1,2,3,4,5,6,7,8]
      assert.strictEqual(crliutils.array.isArrEqual(arr, [1,2,3,4,5,6,7,8]), true)
    })
    it(`crliutils.array.isArrEqual([1], [{}]) should return false`, function () {
      let arr2 = [1]
      let arr3 = [{}]
      assert.strictEqual(crliutils.array.isArrEqual(arr2, arr3), false)
    })
    it(`crliutils.array.isArrEqual([{}], [{}]) should return true`, function () {
      let arr3 = [{}]
      let arr4 = arr3
      assert.strictEqual(crliutils.array.isArrEqual(arr3, arr4), true)
    })
    it(`crliutils.array.isArrEqual(arr, []) should return true`, function () {
      let arr = [1,2,3,4,5,6,7,8]
      assert.strictEqual(crliutils.array.isArrEqual(arr, []), false)
    })
  })
})