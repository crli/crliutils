/*
 * @Author: crli
 * @Date: 2021-05-31 14:01:04
 * @LastEditors: crli
 * @LastEditTime: 2021-06-15 16:51:27
 * @Description: file content
 */
describe('Url API:', function () {
  describe('#getUrlQuery()', function () {
    it(`crliutils.getUrlQuery('tn') should return null`, function () {
      assert.equal(crliutils.getUrlQuery('tn'), null)
    })
    it(`crliutils.getUrlQuery() should return null`, function () {
      assert.equal(crliutils.getUrlQuery(), null)
    })
    it(`crliutils.getUrlQuery('tn', '?tn=98012088_5_dg&ch=12') should return null`, function () {
      assert.equal(crliutils.getUrlQuery('tn', '?tn=98012088_5_dg&ch=12'), '98012088_5_dg')
    })
  })

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
      it(`crliutils.getQueryParse('?a=123&b=%26') should return {a: '123',b: '&'}`, function () {
        let url = '?a=123&b=%26'
        assert.deepEqual(crliutils.getQueryParse(url), {
          a: '123',
          b: '&'
        })
      })
      it(`crliutils.getQueryParse('?') should return {a: '123',b: '&'}`, function () {
        let url = '?'
        assert.deepEqual(crliutils.getQueryParse(url), {})
      })
      it(`crliutils.getQueryParse('') should return {}`, function () {
        let url = ''
        assert.deepEqual(crliutils.getQueryParse(url), {})
      })
  })

  describe('#getQueryStringify()', function () {
    it(`crliutils.getQueryStringify({tn:'98012088_5_dg',ch: '12'}) should return 'tn=98012088_5_dg&ch=12'`, function () {
      assert.equal(crliutils.getQueryStringify({tn:'98012088_5_dg',ch: '12'}), 'tn=98012088_5_dg&ch=12')
    })
    it(`crliutils.getQueryStringify() should return ''`, function () {
      assert(crliutils.getQueryStringify() === '')
    })
    it(`crliutils.getQueryStringify({a:[{tn:'98012088_5_dg',ch: '12'}]}) should return 'tn=98012088_5_dg&ch=12'`, function () {
      assert.equal(crliutils.getQueryStringify({a:[1,1]}) , 'a[0]=1&a[1]=1')
  })
  })
})