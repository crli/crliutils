/*
 * @Author: crli
 * @Date: 2021-05-31 14:01:04
 * @LastEditors: crli
 * @LastEditTime: 2021-05-31 14:54:30
 * @Description: file content
 */
describe('Url API:', function () {
  // describe('#getUrlQuery()', function () {
    // it(`crliUtils.getUrlQuery('tn') should return '16592486'`, function () {
    // })
  // })

  describe('#getQueryParse()', function () {
      it(`crliUtils.getQueryParse('https://www.baidu.com/?tn=98012088_5_dg&ch=12') should return {tn:'98012088_5_dg',ch: '12'}`, function () {
        let url = 'https://www.baidu.com/?tn=98012088_5_dg&ch=12'
        assert.deepEqual(crliUtils.getQueryParse(url), {
          tn: '98012088_5_dg',
          ch: '12'
        })
      })
      it(`crliUtils.getQueryParse('https://www.baidu.com?a=123&b=%26') should return {a: '123',b: '&'}`, function () {
        let url = 'https://www.baidu.com?a=123&b=%26'
        assert.deepEqual(crliUtils.getQueryParse(url), {
          a: '123',
          b: '&'
        })
      })
      it(`crliUtils.getQueryParse('') should return {}`, function () {
        let url = ''
        assert.deepEqual(crliUtils.getQueryParse(url), {})
      })
  })

  describe('#getQueryStringify()', function () {
    it(`crliUtils.getQueryStringify({tn:'98012088_5_dg',ch: '12'}) should return 'tn=98012088_5_dg&ch=12'`, function () {
        crliUtils.setCookie('test', 'setCookie')
        assert(crliUtils.getQueryStringify({tn:'98012088_5_dg',ch: '12'}) === 'tn=98012088_5_dg&ch=12')
    })
  })
})