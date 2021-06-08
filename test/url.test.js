/*
 * @Author: crli
 * @Date: 2021-05-31 14:01:04
 * @LastEditors: crli
 * @LastEditTime: 2021-06-02 16:31:46
 * @Description: file content
 */
describe('Url API:', function () {
  // describe('#getUrlQuery()', function () {
    // it(`crliutils.getUrlQuery('tn') should return '16592486'`, function () {
    // })
  // })

  describe('#getQueryParse()', function () {
      it(`crliutils.getQueryParse('https://www.baidu.com/?tn=98012088_5_dg&ch=12') should return {tn:'98012088_5_dg',ch: '12'}`, function () {
        let url = 'https://www.baidu.com/?tn=98012088_5_dg&ch=12'
        assert.deepEqual(crliutils.getQueryParse(url), {
          tn: '98012088_5_dg',
          ch: '12'
        })
      })
      it(`crliutils.getQueryParse('https://www.baidu.com?a=123&b=%26') should return {a: '123',b: '&'}`, function () {
        let url = 'https://www.baidu.com?a=123&b=%26'
        assert.deepEqual(crliutils.getQueryParse(url), {
          a: '123',
          b: '&'
        })
      })
      it(`crliutils.getQueryParse('') should return {}`, function () {
        let url = ''
        assert.deepEqual(crliutils.getQueryParse(url), {})
      })
  })

  describe('#getQueryStringify()', function () {
    it(`crliutils.getQueryStringify({tn:'98012088_5_dg',ch: '12'}) should return 'tn=98012088_5_dg&ch=12'`, function () {
        crliutils.setCookie('test', 'setCookie')
        assert(crliutils.getQueryStringify({tn:'98012088_5_dg',ch: '12'}) === 'tn=98012088_5_dg&ch=12')
    })
  })
})