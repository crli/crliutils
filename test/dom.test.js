/*
 * @Author: crli
 * @Date: 2021-06-09 13:36:33
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 09:57:51
 * @Description: file content
 */
describe('Dom API:', function () {
  describe('#addClass()', function () {
    let element = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'ediv'
      document.body.appendChild(div)
      element = document.getElementById('ediv')
    })
    it(`crliutils.addClass(element, 'add') should return void`, function () {
      crliutils.addClass(element, 'add')
      assert.equal(crliutils.hasClass(element,'add'), true)
    })
    it(`crliutils.addClass(element, 'add') 2 should return void`, function () {
      crliutils.addClass(element, 'add')
      assert.equal(crliutils.hasClass(element,'add'), true)
    })
    after(function () {
      document.body.removeChild(element)
    })
  })
  describe('#hasClass()', function () {
    let element = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'ediv'
      document.body.appendChild(div)
      element = document.getElementById('ediv')
      crliutils.addClass(element, 'test')
    })
    it(`crliutils.hasClass(element, 'test') should return true`, function () {
      assert.equal(crliutils.hasClass(element,'test'), true)
    })
    it(`crliutils.hasClass(element, 'test1') should return false`, function () {
      assert.equal(crliutils.hasClass(element,'test1'), false)
    })
    it(`crliutils.hasClass() should return false`, function () {
      assert.equal(crliutils.hasClass(element), false)
    })
    after(function () {
      document.body.removeChild(element)
    })
  })
  describe('#removeClass()', function () {
    let element = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'ediv'
      document.body.appendChild(div)
      element = document.getElementById('ediv')
      crliutils.addClass(element, 'test')
      crliutils.addClass(element, 'test1')
      crliutils.addClass(element, 'test2')
    })
    it(`crliutils.removeClass(element, 'test') should return void`, function () {
      crliutils.removeClass(element,'test')
      assert.equal(crliutils.hasClass(element,'test'), false)
    })
    it(`crliutils.removeClass(element, 'test111') should return void`, function () {
      assert.equal(crliutils.hasClass(element,'test2'), true)
    })
    // it(`crliutils.removeClass(element, 'test3') should return void`, function () {
    //   assert.equal(crliutils.hasClass(element,'test3'), false)
    // })
    after(function () {
      document.body.removeChild(element)
    })
  })
  describe('#getStyle()', function () {
    let element = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'ediv'
      div.style.width = '100px'
      div.style.height = '10000px'
      div.style.color = 'red'
      div.style.opacity = '.11'
      document.body.appendChild(div)
      element = document.getElementById('ediv')
    })
    it(`crliutils.getStyle(element, 'width') should return 100`, function () {
      assert.equal(crliutils.getStyle(element,'width'), 100)
    })
    it(`crliutils.getStyle(element, 'color') should return red`, function () {
      assert.equal(crliutils.getStyle(element,'color'), 'rgb(255, 0, 0)')
    })
    it(`crliutils.getStyle(element, 'opacity') should return .11`, function () {
      assert.equal(crliutils.getStyle(element,'opacity','float'), 0.11)
    })
    it(`crliutils.getStyle(element, 'scrollTop') should return 100`, function () {
      crliutils.bom.setScrollTop(10)
      assert.equal(crliutils.getStyle(document.documentElement || document.body,'scrollTop'), 10)
    })
    after(function () {
      document.body.removeChild(element)
    })
  })
})