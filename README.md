<!--
 * @Author: crli
 * @Date: 2021-06-08 10:08:14
 * @LastEditors: crli
 * @LastEditTime: 2021-06-21 15:54:31
 * @Description: file content
-->
 
# 前端工具库

## crliutils
[![npm](https://img.shields.io/npm/v/crliutils.svg)](https://www.npmjs.com/package/crliutils) 
[![LICENSE MIT](https://img.shields.io/npm/l/crliutils.svg)](https://www.npmjs.com/package/crliutils)
[![downloads](https://img.shields.io/npm/dm/crliutils.svg)](https://www.npmjs.com/package/crliutils)
### 安装使用:

1. 直接下载`dist`目录下的[crliutils.min.js](https://github.com/crli/crliutils/blob/master/dist/outils.min.js)
2. 使用npm安装

### 浏览器:
``` html
  <script src="crliutils.min.js"></script>
  <script>
    console.log(crliutils)
    console.log(crliutils.cookie)
  </script>
```

### npm:
``` bash
$ npm install -D crliutils
```

``` javascript
// 引入
const crliutils = require('crliutils')
console.log(crliutils)
//或者
import crliutils, {cookie} from 'crliutils'
```

###  API:

### Array  
#### &emsp;&emsp;[getArrChunk][getArrChunk]&emsp;&emsp;将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组
#### &emsp;&emsp;[isArrEqual][isArrEqual]&emsp;&emsp;判断两个数组是否相等 

### Bom  
#### &emsp;&emsp;[fullscreenToggel][fullscreenToggel]&emsp;&emsp;浏览器全屏与退出全屏切换
#### &emsp;&emsp;[getScrollTop][getScrollTop]&emsp;&emsp;获取滚动条距顶部的距离 
#### &emsp;&emsp;[listenfullscreen][listenfullscreen]&emsp;&emsp;esc监听全屏
#### &emsp;&emsp;[scrollTo][scrollTo]&emsp;&emsp;在${duration}时间内，滚动条平滑滚动到${to}指定位置
#### &emsp;&emsp;[setScrollTop][setScrollTop]&emsp;&emsp;设置滚动条距顶部的距离
#### &emsp;&emsp;[windowResize][windowResize]&emsp;&emsp;H5软键盘缩回、弹起回调

### Cookie  
#### &emsp;&emsp;[getCookie][getCookie]&emsp;&emsp;获取cookie的操作
#### &emsp;&emsp;[removeCookie][removeCookie]&emsp;&emsp;移除某个cookie的操作
#### &emsp;&emsp;[setCookie][setCookie]&emsp;&emsp;对cookie的设置操作

### Date  
#### &emsp;&emsp;[getBeforeArrDay][getBeforeArrDay]&emsp;&emsp;获得前N天的日期数组（包含N个值的数组）
#### &emsp;&emsp;[getMonthArrDay][getMonthArrDay]&emsp;&emsp;获得包含当天和前N月或者N年的的日期数组（包含2个值的数组）
#### &emsp;&emsp;[getMonthDays][getMonthDays]&emsp;&emsp;获取指定日期月份的总天数
#### &emsp;&emsp;[getTwoArrDay][getTwoArrDay]&emsp;&emsp;获得包含当天和前N天的日期数组（包含2个值的数组）
#### &emsp;&emsp;[isLeapYeay][isLeapYeay]&emsp;&emsp;是否为闰年

### Dom  
#### &emsp;&emsp;[addClass][addClass]&emsp;&emsp;为元素添加class
#### &emsp;&emsp;[getStyle][getStyle]&emsp;&emsp;获取属性值
#### &emsp;&emsp;[hasClass][hasClass]&emsp;&emsp;判断元素是否包含类名
#### &emsp;&emsp;[removeClass][removeClass]&emsp;&emsp;移除class

### Function
#### &emsp;&emsp;[getType][getType]&emsp;&emsp;获得对象类型
#### &emsp;&emsp;[insertCss][insertCss]&emsp;&emsp;动态插入css
#### &emsp;&emsp;[downFile][downFile]&emsp;&emsp;下载excel文件 请求时候注意responseType: 'blob',
#### &emsp;&emsp;[getOs][getOs]&emsp;&emsp;获取操作系统类型
#### &emsp;&emsp;[getRandomNum][getRandomNum]&emsp;&emsp;生成指定范围[min, max]的随机数
#### &emsp;&emsp;[getSex][getSex]&emsp;&emsp;根据身份证号获取生日，性别

### Object
#### &emsp;&emsp;[deepCopy][deepCopy]&emsp;&emsp;对象深拷贝

### Regexp
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为正确邮箱
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为18位身份证号
#### &emsp;&emsp;[isNotPass][isNotPass]&emsp;&emsp;判断是否通过
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号

### Storage
#### &emsp;&emsp;[setStore][setStore]&emsp;&emsp;存储localStorage
#### &emsp;&emsp;[getStore][getStore]&emsp;&emsp;获取localStorage
#### &emsp;&emsp;[removeStore][removeStore]&emsp;&emsp;删除localStorage
#### &emsp;&emsp;[clearStore][clearStore]&emsp;&emsp;清空localStorage

### Time
#### &emsp;&emsp;[formatPassTime][formatPassTime]&emsp;&emsp;startDate时间距离现在或者某个时间的时间描述
#### &emsp;&emsp;[formatTime][formatTime]&emsp;&emsp;时间日期格式化
#### &emsp;&emsp;[formatTimeCountdown][formatTimeCountdown]&emsp;&emsp;格式化时间倒计时

### Url
#### &emsp;&emsp;[getQueryParse][getQueryParse]&emsp;&emsp;url参数转对象
#### &emsp;&emsp;[getQueryStringify][getQueryStringify]&emsp;&emsp;对象序列化
#### &emsp;&emsp;[getUrlQuery][getUrlQuery]&emsp;&emsp;url中获取参数名为name的参数值

[getArrChunk]:https://github.com/crli/crliutils/blob/master/src/array/getArrChunk.ts
[isArrEqual]:https://github.com/crli/crliutils/blob/master/src/array/isArrEqual.ts

[fullscreenToggel]:https://github.com/crli/crliutils/blob/master/src/bom/fullscreenToggel.ts
[getScrollTop]:https://github.com/crli/crliutils/blob/master/src/bom/getScrollTop.ts
[listenfullscreen]:https://github.com/crli/crliutils/blob/master/src/bom/listenfullscreen.ts
[scrollTo]:https://github.com/crli/crliutils/blob/master/src/bom/scrollTo.ts
[setScrollTop]:https://github.com/crli/crliutils/blob/master/src/bom/setScrollTop.ts
[windowResize]:https://github.com/crli/crliutils/blob/master/src/bom/windowResize.ts

[getCookie]:https://github.com/crli/crliutils/blob/master/src/cookie/getCookie.ts
[removeCookie]:https://github.com/crli/crliutils/blob/master/src/cookie/removeCookie.ts
[setCookie]:https://github.com/crli/crliutils/blob/master/src/cookie/setCookie.ts

[getBeforeArrDay]:https://github.com/crli/crliutils/blob/master/src/dom/addClass.ts
[getMonthArrDay]:https://github.com/crli/crliutils/blob/master/src/date/getMonthArrDay.ts
[getMonthDays]:https://github.com/crli/crliutils/blob/master/src/date/getMonthDays.ts
[getTwoArrDay]:https://github.com/crli/crliutils/blob/master/src/date/getTwoArrDay.ts
[isLeapYeay]:https://github.com/crli/crliutils/blob/master/src/date/isLeapYeay.ts

[addClass]:https://github.com/crli/crliutils/blob/master/src/dom/addClass.ts
[getStyle]:https://github.com/crli/crliutils/blob/master/src/dom/getStyle.ts
[hasClass]:https://github.com/crli/crliutils/blob/master/src/dom/hasClass.ts
[removeClass]:https://github.com/crli/crliutils/blob/master/src/dom/removeClass.ts

[getType]:https://github.com/crli/crliutils/blob/master/src/function/getType.ts
[insertCss]:https://github.com/crli/crliutils/blob/master/src/function/insertCss.ts
[downFile]:https://github.com/crli/crliutils/blob/master/src/function/downFile.ts
[getOs]:https://github.com/crli/crliutils/blob/master/src/function/getOs.ts
[getRandomNum]:https://github.com/crli/crliutils/blob/master/src/function/getRandomNum.ts
[getSex]:https://github.com/crli/crliutils/blob/master/src/function/getSex.ts

[deepCopy]:https://github.com/crli/crliutils/blob/master/src/object/deepCopy.ts

[isEmail]:https://github.com/crli/crliutils/blob/master/src/regexp/isEmail.ts
[isIdCard]:https://github.com/crli/crliutils/blob/master/src/regexp/isIdCard.ts
[isNotPass]:https://github.com/crli/crliutils/blob/master/src/regexp/isNotPass.ts
[isPhoneNum]:https://github.com/crli/crliutils/blob/master/src/regexp/isPhoneNum.ts

[setStore]:https://github.com/crli/crliutils/blob/master/src/storage/index.ts
[getStore]:https://github.com/crli/crliutils/blob/master/src/storage/index.ts
[removeStore]:https://github.com/crli/crliutils/blob/master/src/storage/index.ts
[clearStore]:https://github.com/crli/crliutils/blob/master/src/storage/index.ts

[formatPassTime]:https://github.com/crli/crliutils/blob/master/src/time/formatPassTime.ts
[formatTimeCountdown]:https://github.com/crli/crliutils/blob/master/src/time/formatTimeCountdown.ts
[formatTime]:https://github.com/crli/crliutils/blob/master/src/time/formatTime.ts

[getQueryParse]:https://github.com/crli/crliutils/blob/master/src/url/getQueryParse.ts
[getQueryStringify]:https://github.com/crli/crliutils/blob/master/src/url/getQueryStringify.ts
[getUrlQuery]:https://github.com/crli/crliutils/blob/master/src/url/getUrlQuery.ts