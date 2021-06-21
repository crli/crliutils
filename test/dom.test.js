/*
 * @Author: crli
 * @Date: 2021-06-09 13:36:33
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:12:56
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
    it(`crliutils.dom.addClass(element, 'add') should return void`, function () {
      crliutils.dom.addClass(element, 'add')
      assert.equal(crliutils.dom.hasClass(element,'add'), true)
    })
    it(`crliutils.dom.addClass(element, 'add') 2 should return void`, function () {
      crliutils.dom.addClass(element, 'add')
      assert.equal(crliutils.dom.hasClass(element,'add'), true)
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
      crliutils.dom.addClass(element, 'test')
    })
    it(`crliutils.dom.hasClass(element, 'test') should return true`, function () {
      assert.equal(crliutils.dom.hasClass(element,'test'), true)
    })
    it(`crliutils.dom.hasClass(element, 'test1') should return false`, function () {
      assert.equal(crliutils.dom.hasClass(element,'test1'), false)
    })
    it(`crliutils.dom.hasClass() should return false`, function () {
      assert.equal(crliutils.dom.hasClass(element), false)
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
      crliutils.dom.addClass(element, 'test')
      crliutils.dom.addClass(element, 'test1')
      crliutils.dom.addClass(element, 'test2')
    })
    it(`crliutils.dom.removeClass(element, 'test') should return void`, function () {
      crliutils.dom.removeClass(element,'test')
      assert.equal(crliutils.dom.hasClass(element,'test'), false)
    })
    it(`crliutils.dom.removeClass(element, 'test111') should return void`, function () {
      assert.equal(crliutils.dom.hasClass(element,'test2'), true)
    })
    // it(`crliutils.dom.removeClass(element, 'test3') should return void`, function () {
    //   assert.equal(crliutils.dom.hasClass(element,'test3'), false)
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
    it(`crliutils.dom.getStyle(element, 'width') should return 100`, function () {
      assert.equal(crliutils.dom.getStyle(element,'width'), 100)
    })
    it(`crliutils.dom.getStyle(element, 'color') should return red`, function () {
      assert.equal(crliutils.dom.getStyle(element,'color'), 'rgb(255, 0, 0)')
    })
    it(`crliutils.dom.getStyle(element, 'opacity') should return .11`, function () {
      assert.equal(crliutils.dom.getStyle(element,'opacity','float'), 0.11)
    })
    it(`crliutils.dom.getStyle(element, 'scrollTop') should return 100`, function () {
      crliutils.bom.setScrollTop(10)
      assert.equal(crliutils.dom.getStyle(document.documentElement || document.body,'scrollTop'), 10)
    })
    after(function () {
      document.body.removeChild(element)
    })
  })
})