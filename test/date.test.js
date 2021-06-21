/*
 * @Author: crli
 * @Date: 2021-06-09 10:48:03
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:09:43
 * @Description: file content
 */
describe('Date API:', function () {
  describe('#getBeforeArrDay()', function () {
      it(`crliutils.date.getBeforeArrDay(7,new Date('2021-06-09')) should return Array`, function () {
        assert.deepEqual(crliutils.date.getBeforeArrDay(7,new Date('2021-06-09')), ["2021-06-02", "2021-06-03", "2021-06-04", "2021-06-05", "2021-06-06", "2021-06-07", "2021-06-08"])
      })
      it(`crliutils.date.getBeforeArrDay(1,new Date('2021-06-09')) should return Array`, function () {
        assert.deepEqual(crliutils.date.getBeforeArrDay(1,new Date('2021-06-09')), ["2021-06-08"])
      })
      it(`crliutils.date.getBeforeArrDay() should return Array`, function () {
        assert.notDeepEqual(crliutils.date.getBeforeArrDay(), ["2021-06-08"])
      })
  })
  describe('#getMonthArrDay()', function () {
    it(`crliutils.date.getMonthArrDay() should return Array`, function () {
      assert.notDeepEqual(crliutils.date.getMonthArrDay(), ["2021-05-09", "2021-06-09"])
    })
    it(`crliutils.date.getMonthArrDay(1,'month', '2021-06-01') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(1,'month', '2021-06-01'), ["2021-05-01", "2021-06-01"])
    })
    it(`crliutils.date.getMonthArrDay(7,'month', '2021-06-01') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(7,'month', '2021-06-01'), ["2020-11-01", "2021-06-01"])
    })
    it(`crliutils.date.getMonthArrDay(16,'month', '2021-06-29') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(16,'month', '2021-06-29'), ["2020-02-29", "2021-06-29"])
    })
    it(`crliutils.date.getMonthArrDay(16,'month', '2020-06-29') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(16,'month', '2020-06-29'), ["2019-02-28", "2020-06-29"])
    })
    it(`crliutils.date.getMonthArrDay(1,'y', '2021-06-01') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(1,'y', '2021-06-01'), ["2020-06-01", "2021-06-01"])
    })
    it(`crliutils.date.getMonthArrDay(1,'y', '2020-02-29') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(1,'y', '2020-02-29'), ["2019-02-28", "2020-02-29"])
    })
    it(`crliutils.date.getMonthArrDay(20,'y', '2020-02-29') should return Array`, function () {
      assert.deepEqual(crliutils.date.getMonthArrDay(20,'y', '2020-02-29'), ["2000-02-29", "2020-02-29"])
    })
    // it(`crliutils.date.getMonthArrDay(1,'y') should return Array`, function () {
    //   assert.deepEqual(crliutils.date.getMonthArrDay(1,'y'), ["2020-06-09", "2021-06-09"])
    // })
  })
  describe('#getMonthDays()', function () {
    it(`crliutils.date.getMonthDays('2021-06-01') should return number`, function () {
      assert.equal(crliutils.date.getMonthDays('2021-06-01'), 30)
    })
  })
  describe('#getTwoArrDay()', function () {
    it(`crliutils.date.getTwoArrDay(1) should return Array`, function () {
      assert.notDeepEqual(crliutils.date.getTwoArrDay(1), ["2021-06-03", "2021-06-09"])
    })
    it(`crliutils.date.getTwoArrDay() should return Array`, function () {
      assert.notDeepEqual(crliutils.date.getTwoArrDay(), ["2021-06-03", "2021-06-09"])
    })
  })
  describe('#isLeapYeay()', function () {
    it(`crliutils.date.isLeapYeay(2020) should return bolean`, function () {
      assert.equal(crliutils.date.isLeapYeay(2020), true)
    })
    it(`crliutils.date.isLeapYeay(2021) should return bolean`, function () {
      assert.equal(crliutils.date.isLeapYeay(2021), false)
    })
  })
})