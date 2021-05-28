/*
 * @Author: crli
 * @Date: 2021-05-28 16:47:04
 * @LastEditors: crli
 * @LastEditTime: 2021-05-28 17:14:30
 * @Description: file content
 */
describe('Cookie API:', function () {
    describe('#getCookie()', function () {
        before(function () {
            crliUtils.setCookie('test', 'value')
        })
        it(`crliUtils.getCookie('test') should return string`, function () {
            assert(crliUtils.getCookie('test') === 'value')
        })
        it(`crliUtils.getCookie('empty') should return ''`, function () {
            assert(crliUtils.getCookie('empty') === '')
        })
        after(function () {
            crliUtils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            crliUtils.setCookie('test', 'removeTestValue')
        })
        it(`crliUtils.removeCookie('test') should return void`, function () {
            crliUtils.removeCookie('test')
            assert.notEqual(crliUtils.getCookie('test') === 'removeTestValue', true)
            assert(crliUtils.getCookie('test') === '')
        })
    })

    describe('#setCookie()', function () {
        it(`crliUtils.setCookie('test') should return void`, function () {
            crliUtils.setCookie('test', 'setCookie')
            assert(crliUtils.getCookie('test') === 'setCookie')
        })
        after(function () {
            crliUtils.removeCookie('test')
        })
    })
})