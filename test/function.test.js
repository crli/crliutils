/*
 * @Author: crli
 * @Date: 2021-06-10 10:15:54
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 16:10:12
 * @Description: file content
 */
describe('Function API:', function () {
  describe('#getOs()', function () {
    it(`crliutils.functions.getOs() should return object`, function () {
      assert.deepEqual(crliutils.functions.getOs(), {
        android: false,
        iphone: false,
        ios: false,
        ipad: false,
        wechat: false
      })
    })
  })
  describe('#getRandomNum()', function () {
    it(`crliutils.functions.getRandomNum(1,100) >=1 && crliutils.functions.getRandomNum(1,100) <=100 should return true`, function () {
      let n = crliutils.functions.getRandomNum(1,100)
      assert(n <= 100 && n>=1)
    })
  })
  describe('#getSex()', function () {
    it(`crliutils.functions.getSex() should return null`, function () {
      assert.deepEqual(crliutils.functions.getSex(), null)
    })
    it(`crliutils.functions.getSex('110101190103071969') should return {
      sex: '女',
      birthday: '1901-03-07',
      age:120
    }`, function () {
      assert.deepEqual(crliutils.functions.getSex('110101190103071969'), {
        sex: '女',
        birthday: '1901-03-07',
        age:120
      })
    })
    it(`crliutils.functions.getSex('110101190111308372') should return {
      sex: '男',
      birthday: '1901-11-30',
      age:119
    }`, function () {
      assert.deepEqual(crliutils.functions.getSex('110101190111308372'), {
        sex: '男',
        birthday: '1901-11-30',
        age:119
      })
    })
    it(`crliutils.functions.getSex('110101190106153214') should return {
      sex: '男',
      birthday: '1901-06-15',
      age:120
    }`, function () {
      assert.deepEqual(crliutils.functions.getSex('110101190106153214'), {
        sex: '男',
        birthday: '1901-06-15',
        age:120
      })
    })
    it(`crliutils.functions.getSex('130503670401001') should return {
      sex: '女',
      birthday: '1967-04-01',
      age:54
    }`, function () {
      assert.deepEqual(crliutils.functions.getSex('130503670401001'), {
        sex: '女',
        birthday: '1967-04-01',
        age:54
      })
    })
    it(`crliutils.functions.getSex('130503671111001') should return {
      sex: '女',
      birthday: '1967-11-11',
      age:53
    }`, function () {
      assert.deepEqual(crliutils.functions.getSex('116503671111001'), {
        sex: '女',
        birthday: '1967-11-11',
        age:53
      })
    })
  })
  describe('#getType()', function () {
    it(`crliutils.functions.getType(false) should return 'boolean'`, function () {
      assert.equal(crliutils.functions.getType(false), 'boolean')
    })
    it(`crliutils.functions.getType(1) should return 'number'`, function () {
      assert.equal(crliutils.functions.getType(1), 'number')
    })
    it(`crliutils.functions.getType(function(){}) should return 'function'`, function () {
      assert.equal(crliutils.functions.getType(function(){}), 'function')
    })
    it(`crliutils.functions.getType([]) should return 'array'`, function () {
      assert.equal(crliutils.functions.getType([]), 'array')
    })
    it(`crliutils.functions.getType(new Date()) should return 'date'`, function () {
      assert.equal(crliutils.functions.getType(new Date()), 'date')
    })
    it(`crliutils.functions.getType(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/) should return 'regExp'`, function () {
      assert.equal(crliutils.functions.getType(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/), 'regExp')
    })
    it(`crliutils.functions.getType(undefined) should return 'undefined'`, function () {
      assert.equal(crliutils.functions.getType(undefined), 'undefined')
    })
    it(`crliutils.functions.getType(null) should return 'null'`, function () {
      assert.equal(crliutils.functions.getType(null), 'null')
    })
    it(`crliutils.functions.getType({}) should return 'object'`, function () {
      assert.equal(crliutils.functions.getType({}), 'object')
    })
    it(`crliutils.functions.getType(Symbol(11)) should return 'symbol'`, function () {
      assert.equal(crliutils.functions.getType(Symbol(11)), 'symbol')
    })
    it(`crliutils.functions.getType(new Set([1,2,3])) should return 'set'`, function () {
      assert.equal(crliutils.functions.getType(new Set([1,2,3])), 'set')
    })
    it(`crliutils.functions.getType(div) should return 'element'`, function () {
      let div = document.createElement('div')
      assert.equal(crliutils.functions.getType(div), 'element')
    })
  })
  describe('#insertCss()', function () {
    it(`crliutils.functions.insertCss('https://necolas.github.io/normalize.css/latest/normalize.css') should return void`, function () {
      crliutils.functions.insertCss('https://necolas.github.io/normalize.css/latest/normalize.css')
      let nodeEle = document.querySelectorAll('link')[0]
      assert.equal(nodeEle.href, 'https://necolas.github.io/normalize.css/latest/normalize.css')
    })
  })
  describe('#downFile()', function () {
    //karma.conf.js 文件browsers修改为 ['Chrome']测试
    it(`crliutils.functions.downFile([html],'一个表格') should return excel文件`, function () {
      let html = `html` 
      crliutils.functions.downFile([html],'一个表格')
    })
  })
})