/*
 * @Author: crli
 * @Date: 2021-05-31 14:01:04
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:11:14
 * @Description: file content
 */
describe('Url API:', function () {
  describe('#getUrlQuery()', function () {
    it(`crliutils.url.getUrlQuery('tn') should return null`, function () {
      assert.equal(crliutils.url.getUrlQuery('tn'), null)
    })
    it(`crliutils.url.getUrlQuery() should return null`, function () {
      assert.equal(crliutils.url.getUrlQuery(), null)
    })
    it(`crliutils.url.getUrlQuery('tn', '?tn=98012088_5_dg&ch=12') should return null`, function () {
      assert.equal(crliutils.url.getUrlQuery('tn', '?tn=98012088_5_dg&ch=12'), '98012088_5_dg')
    })
  })

  describe('#getQueryParse()', function () {
      it(`crliutils.url.getQueryParse('https://www.baidu.com/?tn=98012088_5_dg&ch=12') should return {tn:'98012088_5_dg',ch: '12'}`, function () {
        let url = 'https://www.baidu.com/?tn=98012088_5_dg&ch=12'
        assert.deepEqual(crliutils.url.getQueryParse(url), {
          tn: '98012088_5_dg',
          ch: '12'
        })
      })
      it(`crliutils.url.getQueryParse('https://www.baidu.com?a=123&b=%26') should return {a: '123',b: '&'}`, function () {
        let url = 'https://www.baidu.com?a=123&b=%26'
        assert.deepEqual(crliutils.url.getQueryParse(url), {
          a: '123',
          b: '&'
        })
      })
      it(`crliutils.url.getQueryParse('?a=123&b=%26') should return {a: '123',b: '&'}`, function () {
        let url = '?a=123&b=%26'
        assert.deepEqual(crliutils.url.getQueryParse(url), {
          a: '123',
          b: '&'
        })
      })
      it(`crliutils.url.getQueryParse('?') should return {a: '123',b: '&'}`, function () {
        let url = '?'
        assert.deepEqual(crliutils.url.getQueryParse(url), {})
      })
      it(`crliutils.url.getQueryParse('') should return {}`, function () {
        let url = ''
        assert.deepEqual(crliutils.url.getQueryParse(url), {})
      })
      it(`crliutils.url.getQueryParse() should return {}`, function () {
        assert.deepEqual(crliutils.url.getQueryParse(), {})
      })
  })

  describe('#getQueryStringify()', function () {
    it(`crliutils.url.getQueryStringify({tn:'98012088_5_dg',ch: '12'}) should return 'tn=98012088_5_dg&ch=12'`, function () {
      assert.equal(crliutils.url.getQueryStringify({tn:'98012088_5_dg',ch: '12'}), 'tn=98012088_5_dg&ch=12')
    })
    it(`crliutils.url.getQueryStringify() should return ''`, function () {
      assert(crliutils.url.getQueryStringify() === '')
    })
    it(`crliutils.url.getQueryStringify({a:[{tn:'98012088_5_dg',ch: '12'}]}) should return 'tn=98012088_5_dg&ch=12'`, function () {
      assert.equal(crliutils.url.getQueryStringify({a:[1,1]}) , 'a[0]=1&a[1]=1')
  })
  })
})