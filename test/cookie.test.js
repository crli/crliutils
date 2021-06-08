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
            crliutils.setCookie('test', 'value')
        })
        it(`crliutils.getCookie('test') should return string`, function () {
            assert(crliutils.getCookie('test') === 'value')
        })
        it(`crliutils.getCookie('empty') should return ''`, function () {
            assert(crliutils.getCookie('empty') === '')
        })
        after(function () {
            crliutils.removeCookie('test')
        })
    })

    describe('#removeCookie()', function () {
        before(function () {
            crliutils.setCookie('test', 'removeTestValue')
        })
        it(`crliutils.removeCookie('test') should return void`, function () {
            crliutils.removeCookie('test')
            assert.notEqual(crliutils.getCookie('test') === 'removeTestValue', true)
            assert(crliutils.getCookie('test') === '')
        })
    })

    describe('#setCookie()', function () {
        it(`crliutils.setCookie('test') should return void`, function () {
            crliutils.setCookie('test', 'setCookie')
            assert(crliutils.getCookie('test') === 'setCookie')
        })
        after(function () {
            crliutils.removeCookie('test')
        })
    })
})