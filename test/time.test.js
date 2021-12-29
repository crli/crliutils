/*
 * @Author: crli
 * @Date: 2021-06-10 10:15:10
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 09:58:39
 * @Description: file content
 */
describe('Time API:', function () {
  describe('#formatPassTime()', function () {
      it(`crliutils.formatPassTime(new Date('2021-06-09'), new Date('2021-06-09')) should return 21年前`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2000-06-09'), new Date('2021-06-09')),'21年前')
      })
      it(`crliutils.formatPassTime(new Date('2021-06-09'), new Date('2021-06-09')) should return 3个月前`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2021-03-09'), new Date('2021-06-09')),'3个月前')
      })
      it(`crliutils.formatPassTime(new Date('2021-06-09'), new Date('2021-06-11')) should return '2天前'`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2021-06-09'), new Date('2021-06-11')),'2天前')
      })
      it(`crliutils.formatPassTime(new Date('2021-06-09 12:04:11'),new Date('2021-06-09 14:04:11')) should return '2小时前'`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2021-06-09 12:04:11'),new Date('2021-06-09 14:04:11')),'2小时前')
      })
      it(`crliutils.formatPassTime(new Date('2021-06-09 12:02:41'),new Date('2021-06-09 12:04:44')) should return '2分钟前'`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2021-06-09 12:02:41'),new Date('2021-06-09 12:04:44')),'2分钟前')
      })
      it(`crliutils.formatPassTime(new Date('2021-06-09 11:04:50'), new Date('2021-06-09 11:05:10')) should return Array`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2021-06-09 11:04:50'), new Date('2021-06-09 11:05:10')),'刚刚')
      })
      it(`crliutils.formatPassTime(new Date('2021-06-09')) should return 21年前`, function () {
        assert.equal(crliutils.formatPassTime(new Date('2000-06-09')),'21年前')
      })
  })
  describe('#formatTime()', function () {
    it(`crliutils.formatTime() should return 'now time'`, function () {
      assert.equal(Date.parse(new Date(crliutils.formatTime())), Date.parse(new Date()))
    })
    it(`crliutils.formatTime('yyyy-MM-dd hh:mm:ss',new Date('2021-06-01')) should return '2021-06-01 08:00:00'`, function () {
      assert.equal(crliutils.formatTime('yyyy-MM-dd hh:mm:ss',new Date('2021-06-01')), '2021-06-01 08:00:00')
    })
    it(`crliutils.formatTime('yyyy/MM/dd',new Date('2021-06-01')) should return '2021/06/01'`, function () {
      assert.equal(crliutils.formatTime('yyyy/MM/dd',new Date('2021-06-01')), '2021/06/01')
    })
    it(`crliutils.formatTime('yyyy年MM月dd日 hh时mm分ss秒',new Date('2021-06-01')) should return '2021年06月01日 08时00分00秒'`, function () {
      assert.equal(crliutils.formatTime('yyyy年MM月dd日 hh时mm分ss秒',new Date('2021-06-01')), "2021年06月01日 08时00分00秒")
    })
    it(`crliutils.formatTime('yyyy年MM月dd日 hh时mm分ss秒',new Date('2021-06-01 11:12:30')) should return '2021年06月01日 11时12分30秒'`, function () {
      assert.equal(crliutils.formatTime('yyyy年MM月dd日 hh时mm分ss秒',new Date('2021-06-01 11:12:30')), "2021年06月01日 11时12分30秒")
    })
  })
  describe('#formatTimeCountdown()', function () {
    it(`crliutils.formatTimeCountdown('2021-06-20 11:12:30', '2021-06-11 11:11:11') should return '9天 0小时 1分钟 19秒'`, function () {
      assert.equal(crliutils.formatTimeCountdown('2021-06-20 11:12:30', '2021-06-11 11:11:11'), '9天 0小时 1分钟 19秒')
    })
    it(`crliutils.formatTimeCountdown('2020-06-20 11:12:30', '2021-06-11 11:11:11') should return '0天 0小时 0分钟 0秒'`, function () {
      assert.equal(crliutils.formatTimeCountdown('2020-06-20 11:12:30', '2021-06-11 11:11:11'), '0天 0小时 0分钟 0秒')
    })
    it(`crliutils.formatTimeCountdown('2020-06-20 11:12:30') should return '0天 0小时 0分钟 0秒'`, function () {
      assert.equal(crliutils.formatTimeCountdown('2020-06-20 11:12:30'), '0天 0小时 0分钟 0秒')
    })
  })
})