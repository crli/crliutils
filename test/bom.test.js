/*
 * @Author: crli
 * @Date: 2021-06-15 09:42:28
 * @LastEditors: crli
 * @LastEditTime: 2021-12-29 09:57:20
 * @Description: file content
 */
const fullscreenEnable = () => {
  var isFullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
  return !!isFullscreen
}
describe('Bom API:', function () {
  describe('#fullscreenToggel()', function () {
    let element = null
    before(function() {
      let div = document.createElement('div')
      div.id = 'ediv'
      document.body.appendChild(div)
      element = document.getElementById('ediv')
      element.onclick = crliutils.fullscreenToggel
    })
    it(`flag should return false`, function () {
      assert.equal(fullscreenEnable(), false)
    })
    it(`crliutils.fullscreenToggel() && fullscreenEnable()should return true`, function (done) {
      element.click() //需要手动触发不可以模拟, Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture
      setTimeout(()=>{
        assert.equal(fullscreenEnable(), false) //正常使用单击之后fullscreenEnable()应该返回true
        done()
      },300)

    })
    after(function () {
      document.body.removeChild(element)
    })
  })
  describe('#listenfullscreen()', function () {
    let innerHeight = window.innerHeight
    it(`crliutils.listenfullscreen(func) should return true`, function () {
      crliutils.listenfullscreen(function () {
        assert.equal(window.innerHeight, innerHeight)
        // done()
      })
      // //需要手动触发不可以模拟, Failed to execute 'requestFullscreen' on 'Element': API can only be initiated by a user gesture
      window.dispatchEvent(new Event('fullscreenchange'))
    })
  })
  describe('#getScrollTop()', function () {
    let $body = document.body
    let bodyHeight = document.defaultView.getComputedStyle($body, null)['height']
    let length = 200
    before(function () {
      $body.style.height = '10000px'
      crliutils.setScrollTop(length)
    })
    it(`crliutils.getScrollTop() should return 200`, function () {
      assert.equal(crliutils.getScrollTop(), length)
    })
    after(function () {
      crliutils.setScrollTop(0)
      $body.style.height = bodyHeight
    })
  })

  describe('#setScrollTop()', function () {
    let $body = document.body
    let bodyHeight = document.defaultView.getComputedStyle($body, null)['height']
    before(function () {
      $body.style.height = '10000px'
    })
    it(`crliutils.getScrollTop() should return 300`, function () {
      crliutils.setScrollTop(300)
      assert.equal(crliutils.getScrollTop(), 300)
    })
    after(function () {
      crliutils.setScrollTop(0)
      $body.style.height = bodyHeight
    })
  })
  describe('#scrollTo()', function () {
    let $body = document.body
    let bodyHeight = document.defaultView.getComputedStyle($body, null)['height']
    before(function () {
      $body.style.height = '10000px'
    })
    it(`ccrliutils.scrollTo(20, 0) should to 10`, function (done) {
      crliutils.scrollTo(20, 0)
      setTimeout(() => {
        assert.equal(crliutils.getScrollTop(), 20)
        done()
      }, 10)
    })
    it(`crliutils.scrollTo(10, 100) should to 10`, function (done) {
      crliutils.scrollTo(10, 100)
      setTimeout(() => {
        assert.equal(crliutils.getScrollTop(), 10)
        done()
      }, 300)
    })
    it(`crliutils.scrollTo(10, 100) should to 10`, function (done) {
      crliutils.scrollTo(10, 100)
      setTimeout(() => {
        crliutils.scrollTo(10, 100)
        assert.equal(crliutils.getScrollTop(), 10)
        done()
      }, 300)
    })
    after(function () {
      crliutils.setScrollTop(0)
      $body.style.height = bodyHeight
    })
  })
  describe('#windowResize()', function () {
    let innerHeight = window.innerHeight
    it(`crliutils.windowResize(downCb) should return true`, function (done) {
      crliutils.windowResize(function () {
        // 键盘缩回回调
        assert(window.innerHeight == innerHeight)
        done()
      }, function () { })
      // 触发resize事件，模拟软键盘缩回
      window.dispatchEvent(new Event('resize'))
    })
  });

  describe('#windowResize()', function () {
    let innerHeight = window.innerHeight
    it(`crliutils.windowResize(upCb) should return true`, function (done) {
      crliutils.windowResize(function () { }, function () {
        // 键盘弹起回调
        assert(window.innerHeight === innerHeight - 200)
        done()
      })
      // 设置innerHeight，模拟软键盘弹起
      window.innerHeight = innerHeight - 200
      // 触发resize事件
      window.dispatchEvent(new Event('resize'))
    })
    after(function () {
      window.innerHeight = innerHeight
    })
  });
})