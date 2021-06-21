(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.crliutils = {}));
}(this, (function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /*
     * @Author: crli
     * @Date: 2021-05-27 15:28:24
     * @LastEditors: crli
     * @LastEditTime: 2021-06-16 09:11:03
     * @Description: file content
     */
    /**
     * @desc 对cookie的设置操作
     * @param {String} name cookie的名
     * @param {String} value cookie的值
     * @param {Date} expires cookie的过期时间
     * @param {String} domain 可以访问该Cookie的域名
     * @param {String} path Cookie的使用路径
     * @param {Boolean} secure 该Cookie是否仅被使用安全协议传输(https)
     */
    var setCookie = function (name, value, expires, path, domain, secure) {
        var cookieText = "";
        cookieText += encodeURIComponent(name) + "=" + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toUTCString();
        }
        if (path) {
            cookieText += "; path=" + path;
        }
        if (domain) {
            cookieText += "; domain=" + domain;
        }
        if (secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    };

    /*
     * @Author: crli
     * @Date: 2021-05-27 15:28:24
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:41:19
     * @Description: file content
     */
    /**
     * @desc 获取cookie的操作
     * @param {String} name cookie的名
     */
    var getCookie = function (name) {
        var cookieName = encodeURIComponent(name) + "=";
        var cookieStart = document.cookie.indexOf(cookieName);
        var cookieValue = "";
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    };

    /*
     * @Author: crli
     * @Date: 2021-05-28 17:21:50
     * @LastEditors: crli
     * @LastEditTime: 2021-06-17 14:23:53
     * @Description: file content
     */
    /**
     * @desc 移除cookie的操作
     * @param {String} name cookie的名
     * @param {String} domain 可以访问该Cookie的域名
     * @param {String} path Cookie的使用路径
     * @param {Boolean} secure 该Cookie是否仅被使用安全协议传输(https)
     */
    var removeCookie = function (name, domain, path, secure) {
        setCookie(name, "", new Date(0), domain, path, secure);
    };

    /*
     * @Author: crli
     * @Date: 2021-05-27 15:28:24
     * @LastEditors: crli
     * @LastEditTime: 2021-05-28 14:07:38
     * @Description: file content
     */
    var cookie = {
        setCookie: setCookie,
        getCookie: getCookie,
        removeCookie: removeCookie
    };

    /*
     * @Author: crli
     * @Date: 2021-05-31 11:03:48
     * @LastEditors: crli
     * @LastEditTime: 2021-06-21 14:07:46
     * @Description: file content
     */
    /**
     *
     * @desc   url参数转对象
     * @param  {String} url
     * @return {Object}
     */
    var getQueryParse = function (url) {
        if (url === void 0) { url = window && window.location.href; }
        url = !url ? window && window.location.href : url;
        if (url.indexOf('?') === -1) {
            return {};
        }
        var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
        if (search === '') {
            return {};
        }
        var searchArr = search.split('&');
        var query = {};
        for (var i = 0; i < searchArr.length; i++) {
            var pair = searchArr[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return query;
    };

    /*
     * @Author: crli
     * @Date: 2021-05-31 13:39:25
     * @LastEditors: crli
     * @LastEditTime: 2021-06-15 16:51:15
     * @Description: file content
     */
    /**
     * @desc   对象序列化
     * @param  {Object} obj
     * @return {String}
     */
    var getQueryStringify = function (obj) {
        if (!obj)
            return '';
        var pairs = [];
        for (var key in obj) {
            var value = obj[key];
            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    pairs.push(key + '[' + i + ']' + '=' + value[i]);
                }
                continue;
            }
            pairs.push(key + '=' + obj[key]);
        }
        return pairs.join('&');
    };

    /*
     * @Author: crli
     * @Date: 2021-05-31 10:38:30
     * @LastEditors: crli
     * @LastEditTime: 2021-06-15 16:17:01
     * @Description: file content
     */
    /**
     * @desc url中获取参数名为name的参数值
     * @param {String} name 参数名
     * @param {String} search 参数名 默认 window.location.search
     */
    var getUrlQuery = function (name, search) {
        if (search === void 0) { search = window.location.search; }
        if (!name)
            return null;
        var r = search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"));
        if (r != null)
            return unescape(r[2]);
        return null;
    };

    /*
     * @Author: crli
     * @Date: 2021-05-31 13:58:41
     * @LastEditors: crli
     * @LastEditTime: 2021-05-31 13:59:04
     * @Description: file content
     */
    var url = {
        getQueryParse: getQueryParse,
        getQueryStringify: getQueryStringify,
        getUrlQuery: getUrlQuery
    };

    /*
     * @Author: crli
     * @Date: 2021-05-31 15:44:03
     * @LastEditors: crli
     * @LastEditTime: 2021-06-09 16:05:55
     * @Description: file content
     */
    /**
     *
     * @desc   对象深拷贝
     * @param  {any} obj
     * @return {obj}
     */
    function isObject(obj) {
        return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
    }
    var deepCopy = function (obj) {
        if (isObject(obj)) {
            //判断特殊处理的类型
            var type = [Date, Set, Map, WeakMap, WeakSet, RegExp];
            if (type.includes(obj.constructor)) {
                return new obj.constructor(obj);
            }
            //包装类型
            if ([Boolean, String, Number].includes(obj.constructor)) {
                return new obj.constructor(obj.valueOf());
            }
            // 其他类型
            var cloneobj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
            for (var _i = 0, _a = Reflect.ownKeys(obj); _i < _a.length; _i++) {
                var prop = _a[_i];
                cloneobj[prop] = isObject(obj[prop]) && typeof obj[prop] !== 'function' ? deepCopy(obj[prop]) : obj[prop];
            }
            return cloneobj;
        }
        else {
            return obj;
        }
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 09:48:53
     * @LastEditors: crli
     * @LastEditTime: 2021-06-01 09:49:28
     * @Description: file content
     */
    var object = {
        deepCopy: deepCopy
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 09:46:36
     * @LastEditors: crli
     * @LastEditTime: 2021-06-17 13:27:43
     * @Description: file content
     */
    /**
     * 浏览器全屏与退出全屏切换
     */
    var fullscreenToggel = function () {
        if (fullscreenEnable()) {
            exitFullScreen();
        }
        else {
            reqFullScreen();
        }
    };
    /**
    * 浏览器全屏
    */
    var reqFullScreen = function () {
        if (document.documentElement.requestFullscreen) {
            return document.documentElement.requestFullscreen();
        }
        else if (document.documentElement.webkitRequestFullScreen) {
            return document.documentElement.webkitRequestFullScreen();
        }
        else if (document.documentElement.mozRequestFullScreen) {
            return document.documentElement.mozRequestFullScreen();
        }
        else {
            return document.documentElement.msRequestFullscreen();
        }
    };
    /**
    * 浏览器退出全屏
    */
    function exitFullScreen() {
        if (document.exitFullscreen) {
            return document.exitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            return document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen) {
            return document.webkitCancelFullScreen();
        }
        else {
            return document.msExitFullscreen();
        }
    }
    /**
     * 浏览器判断是否全屏
     */
    var fullscreenEnable = function () {
        var isFullscreen = document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen;
        return !!isFullscreen;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 09:46:36
     * @LastEditors: crli
     * @LastEditTime: 2021-06-15 15:29:22
     * @Description: file content
     */
    /**
    * esc监听全屏
    */
    var listenfullscreen = function (callback) {
        callback = typeof callback === 'function' ? callback : function () { };
        function listen() {
            callback();
        }
        document.addEventListener("fullscreenchange", function () {
            listen();
        });
        document.addEventListener("mozfullscreenchange", function () {
            listen();
        });
        document.addEventListener("webkitfullscreenchange", function () {
            listen();
        });
        document.addEventListener("msfullscreenchange", function () {
            listen();
        });
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 14:35:54
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 14:38:51
     * @Description: file content
     */
    /**
     *
     * @desc 获取滚动条距顶部的距离
     */
    var getScrollTop = function () {
        return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 14:35:54
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:39:51
     * @Description: file content
     */
    /**
     *
     * @desc 设置滚动条距顶部的距离
     * @param {Number} value
     */
    var setScrollTop = function (value) {
        window.scrollTo(0, value);
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 14:35:54
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:40:27
     * @Description: file content
     */
    var requestAnimFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();
    /**
     *
     * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
     * @param {Number} to
     * @param {Number} duration
     */
    var scrollTo = function (to, duration) {
        if (duration <= 0) {
            setScrollTop(to);
            return;
        }
        var diff = to - getScrollTop();
        if (diff === 0)
            return;
        var step = diff / duration * 10;
        requestAnimFrame(function () {
            if (Math.abs(step) > Math.abs(diff)) {
                setScrollTop(getScrollTop() + diff);
                return;
            }
            setScrollTop(getScrollTop() + step);
            if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
                return;
            }
            scrollTo(to, duration - 16);
        });
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 14:29:58
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:41:08
     * @Description: file content
     */
    /**
     *
     * @desc H5软键盘缩回、弹起回调
     * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
     * @param {Function} downCb 当软键盘弹起后，缩回的回调
     * @param {Function} upCb 当软键盘弹起的回调
     */
    var windowResize = function (downCb, upCb) {
        var clientHeight = window.innerHeight;
        downCb = typeof downCb === 'function' ? downCb : function () { };
        upCb = typeof upCb === 'function' ? upCb : function () { };
        window.addEventListener('resize', function () {
            var height = window.innerHeight;
            if (height === clientHeight) {
                downCb();
            }
            if (height < clientHeight) {
                upCb();
            }
        });
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 09:52:28
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:21:26
     * @Description: file content
     */
    var bom = {
        fullscreenToggel: fullscreenToggel,
        listenfullscreen: listenfullscreen,
        getScrollTop: getScrollTop,
        setScrollTop: setScrollTop,
        scrollTo: scrollTo,
        windowResize: windowResize
    };

    /*
     * @Author: crli
     * @Date: 2021-05-31 15:31:47
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:43:40
     * @Description: file content
     */
    /**
     *
     * @desc   获得对象类型
     * @param  {any} obj
     * @return {String}
     */
    var getType = function (obj) {
        var toString = Object.prototype.toString;
        var map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object',
            '[object Symbol]': 'symbol',
            '[object Set]': 'set',
            '[object WeakSet]': 'weakSet',
            '[object Map]': 'map',
            '[object WeakMap]': 'weakmap'
        };
        if (obj instanceof Element) {
            return 'element';
        }
        return map[toString.call(obj)];
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 11:16:10
     * @LastEditors: crli
     * @LastEditTime: 2021-06-01 11:24:56
     * @Description: file content
     */
    /**
     *
     * @desc   动态插入css
     * @param  {string} string
     * @return {void}
     */
    var loadStyle = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(link);
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 11:27:57
     * @LastEditors: crli
     * @LastEditTime: 2021-06-16 15:42:55
     * @Description: file content
     */
    /**
     *
     * @desc  下载excel文件 请求时候注意responseType: 'blob',
     * @param  {Array<Blob>} [Blob] 文件流
     * @return {void}
     */
    var downFile = function (data, name) {
        var date = new Date();
        var year = date.getFullYear() + '';
        var day = ("0" + date.getDate()).slice(-2);
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var blob = new Blob(data, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8' });
        var downloadElement = document.createElement('a');
        var url = window.URL.createObjectURL(blob);
        downloadElement.href = url;
        downloadElement.download = name + "_" + (year + month + day) + ".csv";
        document.body.appendChild(downloadElement);
        downloadElement.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(downloadElement);
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 16:28:36
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:43:21
     * @Description: file content
     */
    /**
     *
     * @desc 获取操作系统类型
     * @return {object}
     */
    var osSelect = function () {
        var os = {
            android: false,
            iphone: false,
            ios: false,
            ipad: false,
            wechat: false
        };
        var ua = navigator.userAgent;
        var android = ua.match(/(Android);?[\s/]+([\d.]+)?/);
        var iphone = ua.match(/(iPhone\sOS)\s([\d_]+)/);
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var wechat = ua.match(/(MicroMessenger)\/([\d.]+)/i);
        if (android) {
            os.android = true;
        }
        if (iphone) {
            os.ios = os.iphone = true;
        }
        if (wechat) {
            os.wechat = true;
        }
        if (ipad) {
            os.ios = os.ipad = true;
        }
        return os;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 15:22:16
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:43:33
     * @Description: file content
     */
    /**
     *
     * @desc 生成指定范围[min, max]的随机数
     * @param  {Number} min
     * @param  {Number} max
     * @return {Number}
     */
    var getRandomNum = function (min, max) {
        var nmin = Math.ceil(min);
        var nmax = Math.floor(max);
        return Math.floor(Math.random() * (nmax - nmin + 1)) + nmin;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 15:48:06
     * @LastEditors: crli
     * @LastEditTime: 2021-06-16 09:43:52
     * @Description: file content
     */
    /**
     *
     * @desc  根据身份证号获取生日，性别
     * @param  {String} idCardNo
     * @return {object}
     */
    var getSex = function (idCardNo) {
        if (!idCardNo)
            return null;
        var sex = null;
        var birth = null;
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var age = 0;
        if (idCardNo.length === 18) {
            age = myDate.getFullYear() - Number(idCardNo.substring(6, 10)) - 1;
            sex = idCardNo.substring(16, 17);
            birth = idCardNo.substring(6, 10) + "-" + idCardNo.substring(10, 12) + "-" + idCardNo.substring(12, 14);
            if (Number(idCardNo.substring(10, 12)) < month || Number(idCardNo.substring(10, 12)) == month && Number(idCardNo.substring(12, 14)) <= day)
                age++;
        }
        if (idCardNo.length === 15) {
            age = myDate.getFullYear() - Number(idCardNo.substring(6, 8)) - 1901;
            sex = idCardNo.substring(13, 14);
            birth = "19" + idCardNo.substring(6, 8) + "-" + idCardNo.substring(8, 10) + "-" + idCardNo.substring(10, 12);
            if (Number(idCardNo.substring(8, 10)) < month || Number(idCardNo.substring(8, 10)) == month && Number(idCardNo.substring(10, 12)) <= day)
                age++;
        }
        if (Number(sex) % 2 === 0)
            sex = '女';
        else
            sex = '男';
        return {
            sex: sex,
            birthday: birth,
            age: age
        };
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 11:17:45
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:44:43
     * @Description: file content
     */
    var functions = {
        getType: getType,
        insertCss: loadStyle,
        downFile: downFile,
        getOs: osSelect,
        getRandomNum: getRandomNum,
        getSex: getSex
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 13:37:35
     * @LastEditors: crli
     * @LastEditTime: 2021-06-15 15:49:08
     * @Description: file content
     */
    /**
     *
     * @desc   判断是否为正确邮箱
     * @param  {String|Number} str
     * @return {Boolean}
     */
    var isEmail = function (str) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 13:40:34
     * @LastEditors: crli
     * @LastEditTime: 2021-06-16 16:20:45
     * @Description: file content
     */
    /**
     *
     * @desc  判断是否为身份证号
     * @param  {String} code
     * @return {object}
     */
    var isIdCard = function (code) {
        //身份证号合法性验证
        //支持18位身份证号
        //支持地址编码、出生日期、校验位验证
        var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
        var row = {
            'pass': true,
            'msg': '验证成功'
        };
        if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(code)) {
            row = {
                'pass': false,
                'msg': '身份证号格式错误'
            };
        }
        else if (!city[code.substr(0, 2)]) {
            row = {
                'pass': false,
                'msg': '身份证号地址编码错误'
            };
        }
        else {
            //18位身份证需要验证最后一位校验位
            var codes = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = Number(codes[i]);
                wi = factor[i];
                sum += ai * wi;
            }
            if (parity[sum % 11] != codes[17].toUpperCase()) {
                row = {
                    'pass': false,
                    'msg': '身份信息校验错误'
                };
            }
        }
        return row;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 13:45:02
     * @LastEditors: crli
     * @LastEditTime: 2021-06-16 15:23:03
     * @Description: file content
     */
    /**
     *
     * @desc   判断是否通过
     * @param  {any} val
     * @return {Boolean}
     */
    var isNotPass = function (val) {
        if (val == false) {
            return true;
        }
        if (val === 0) {
            return true;
        }
        if (val instanceof Array) {
            if (val.length == 0)
                return true;
        }
        else if (val instanceof Object) {
            if (JSON.stringify(val) === '{}')
                return true;
        }
        else {
            if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '')
                return true;
            return false;
        }
        return false;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 13:23:32
     * @LastEditors: crli
     * @LastEditTime: 2021-06-01 13:36:23
     * @Description: file content
     */
    /**
     *
     * @desc   判断是否为手机号
     * @param  {String|Number} str
     * @return {Boolean}
     */
    var isPhoneNum = function (str) {
        return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(String(str));
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 13:23:13
     * @LastEditors: crli
     * @LastEditTime: 2021-06-10 10:10:20
     * @Description: file content
     */
    var regexp = {
        isEmail: isEmail,
        isIdCard: isIdCard,
        isNotPass: isNotPass,
        isPhoneNum: isPhoneNum
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 14:03:16
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:45:28
     * @Description: file content
     */
    /**
     * 存储localStorage
     */
    var setStore = function (name, content) {
        if (!name)
            return;
        if (typeof content !== 'string') {
            content = JSON.stringify(content);
        }
        window.localStorage.setItem(name, content);
    };
    /**
     * 获取localStorage
     */
    var getStore = function (name) {
        if (!name)
            return;
        var obj = window.localStorage.getItem(name);
        if (obj === null || obj === 'undefined') {
            return obj;
        }
        else {
            try {
                return JSON.parse(obj);
            }
            catch (_a) {
                return obj;
            }
        }
    };
    /**
     * 删除localStorage
     */
    var removeStore = function (name) {
        if (!name)
            return;
        window.localStorage.removeItem(name);
    };
    /**
     * 清空localStorage
     */
    var clearStore = function () {
        window.localStorage.clear();
    };
    var storage = {
        setStore: setStore,
        getStore: getStore,
        removeStore: removeStore,
        clearStore: clearStore
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 16:47:55
     * @LastEditors: crli
     * @LastEditTime: 2021-06-09 11:07:45
     * @Description: file content
     */
    /**
     *
     * @desc   获得前N天的日期数组 比如今天是2021-06-01
     * @param  {any} obj
     * @param  {Date|string} date '2021-06-01'|new Date()
     * @return {Array<string>} ["2021-05-25", "2021-05-26", "2021-05-27", "2021-05-28", "2021-05-29", "2021-05-30", "2021-05-31"]
     */
    var getBeforeArrDay = function (day, date) {
        if (day === void 0) { day = 7; }
        var temp = [];
        for (var i = 0; i < day; i++) {
            var time = new Date(new Date().setDate((new Date(date ? date : new Date()).getDate() + i) - day));
            var year = time.getFullYear();
            var month = ("0" + (time.getMonth() + 1)).slice(-2);
            var strDate = ("0" + time.getDate()).slice(-2);
            temp.push(year + "-" + month + "-" + strDate);
        }
        return temp;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 09:47:15
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:42:11
     * @Description: file content
     */
    /**
     *
     * @desc 是否为闰年
     * @param {Number} year
     * @returns {Boolean}
     */
    var isLeapYear = function (year) {
        if (0 === year % 4 && year % 100 !== 0 || year % 400 === 0) {
            return true;
        }
        return false;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 16:47:55
     * @LastEditors: crli
     * @LastEditTime: 2021-06-09 11:19:01
     * @Description: file content
     */
    function getyearNum(num, n) {
        if (num / 12 < n) {
            return n;
        }
        else {
            return getyearNum(num, ++n);
        }
    }
    var getMonthArrDay = function (count, flag, date) {
        if (count === void 0) { count = 1; }
        if (flag === void 0) { flag = 'month'; }
        var temp = [];
        var time = new Date(date ? date : new Date());
        var year = time.getFullYear();
        var month = ("0" + (time.getMonth() + 1)).slice(-2);
        var strDate = ("0" + time.getDate()).slice(-2);
        if (flag === 'month') {
            if (Number(month) - count > 0) {
                temp.push(year + "-" + ("0" + (Number(month) - count)).slice(-2) + "-" + strDate);
            }
            else {
                var num = Math.abs(Number(month) - count);
                var yearNum = getyearNum(num, 0);
                var beforeYearByMonth = year - yearNum; // 之前的年
                var beforeMonth = Number(month) + 12 * yearNum - count; // 之前的月
                if (beforeMonth == 2 && Number(strDate) == 29) {
                    if (isLeapYear(beforeYearByMonth)) {
                        temp.push(beforeYearByMonth + "-02-29");
                    }
                    else {
                        temp.push(beforeYearByMonth + "-02-28");
                    }
                }
                else {
                    temp.push(beforeYearByMonth + "-" + ("0" + beforeMonth).slice(-2) + "-" + strDate);
                }
            }
            temp.push(year + "-" + month + "-" + strDate);
        }
        else {
            var beforeYear = year - count; // 之前的年
            if (Number(month) == 2 && Number(strDate) == 29) {
                if (isLeapYear(beforeYear)) {
                    temp.push(beforeYear + "-02-29");
                }
                else {
                    temp.push(beforeYear + "-02-28");
                }
            }
            else {
                temp.push(beforeYear + "-" + month + "-" + strDate);
            }
            temp.push(year + "-" + month + "-" + strDate);
        }
        return temp;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 10:34:59
     * @LastEditors: crli
     * @LastEditTime: 2021-06-09 13:13:51
     * @Description: file content
     */
    /**
     * @desc 获取指定日期月份的总天数
     * @param {Date|string} date '2021-06-01'|new Date()
     * @return {number}
    */
    var getMonthDays = function (date) {
        var _data = new Date(date);
        var year = _data.getFullYear();
        var month = _data.getMonth() + 1;
        return new Date(year, month, 0).getDate();
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 16:47:55
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:42:01
     * @Description: file content
     */
    /**
     *
     * @desc   获得包含当天和前N天的日期数组 比如今天是2021-06-01
     * @param  {day} number = 7
     * @return {Array<string>} ["2021-05-26", "2021-06-01"]
     */
    var getTwoArrDay = function (day) {
        if (day === void 0) { day = 7; }
        var temp = [];
        var dayArr = [-day + 1, 0];
        for (var i = 0; i < dayArr.length; i++) {
            var time = new Date(new Date().setDate(new Date().getDate() + dayArr[i]));
            var year = time.getFullYear();
            var month = ("0" + (time.getMonth() + 1)).slice(-2);
            var strDate = ("0" + time.getDate()).slice(-2);
            temp.push(year + "-" + month + "-" + strDate);
        }
        return temp;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 10:52:40
     * @LastEditors: crli
     * @LastEditTime: 2021-06-02 10:53:26
     * @Description: file content
     */
    var date = {
        getBeforeArrDay: getBeforeArrDay,
        getMonthArrDay: getMonthArrDay,
        getMonthDays: getMonthDays,
        getTwoArrDay: getTwoArrDay,
        isLeapYeay: isLeapYear
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 10:34:59
     * @LastEditors: crli
     * @LastEditTime: 2021-06-11 11:14:44
     * @Description: file content
     */
    /**
     * @desc   startDate时间距离现在或者某个时间的时间描述
     * @param  {string| Date} startDate
     * @param  {string| Date} nowDate
     * @return {String}
     */
    var formatPassTime = function (startDate, nowDate) {
        var currentTime = new Date(nowDate ? nowDate : new Date()).getTime(), time = currentTime - new Date(startDate).getTime(), day = parseInt(time / (1000 * 60 * 60 * 24) + ''), hour = parseInt(time / (1000 * 60 * 60) + ''), min = parseInt(time / (1000 * 60) + ''), month = parseInt(day / 30 + ''), year = parseInt(month / 12 + '');
        if (year)
            return year + "年前";
        if (month)
            return month + "个月前";
        if (day)
            return day + "天前";
        if (hour)
            return hour + "小时前";
        if (min)
            return min + "分钟前";
        else
            return '刚刚';
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 10:34:59
     * @LastEditors: crli
     * @LastEditTime: 2021-06-11 13:35:47
     * @Description: file content
     */
    /**
     *
     * @desc   格式化时间倒计时
     * @param  {Date} endTime
     * @return {String}
     */
    var formatTimeCountdown = function (endTime, nowDate) {
        var startDate = new Date(nowDate ? nowDate : new Date());
        var endDate = new Date(endTime);
        var t = endDate.getTime() - startDate.getTime();
        var d = 0, h = 0, m = 0, s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 3600 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 11:02:43
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:45:44
     * @Description: file content
     */
    /**
     * @desc   时间日期格式化
     * @param  {fmt} string "yyyy-MM-dd hh:mm:ss"
     * @param  {Date} date
     * @return {String}
     */
    // formatTime()
    // "2021-06-02 11:24:09"
    // formatTime('yyyy/MM/dd')
    // "2021/06/02"
    // formatTime('yyyy年MM月dd日 hh时mm分ss秒')
    // "2021年06月02日 11时25分23秒"
    // formatTime('yyyy年MM月dd日 hh时mm分ss秒', new Date('2021-02-02'))
    // "2021年02月02日 08时00分00秒"
    var formatTime = function (fmt, date) {
        if (fmt === void 0) { fmt = "yyyy-MM-dd hh:mm:ss"; }
        if (date === void 0) { date = new Date(); }
        var currentDate = date;
        var o = {
            "M+": currentDate.getMonth() + 1,
            "d+": currentDate.getDate(),
            "h+": currentDate.getHours(),
            "m+": currentDate.getMinutes(),
            "s+": currentDate.getSeconds(),
            "q+": Math.floor((currentDate.getMonth() + 3) / 3),
            "S": currentDate.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (currentDate.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-02 10:52:40
     * @LastEditors: crli
     * @LastEditTime: 2021-06-02 11:28:47
     * @Description: file content
     */
    var time = {
        formatPassTime: formatPassTime,
        formatTimeCountdown: formatTimeCountdown,
        formatTime: formatTime
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 13:31:17
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:42:25
     * @Description: file content
     */
    /**
     * @desc 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
     * @param {Array} array 数组
     * @param {Number} size 长度
     */
    var getArrChunk = function (array, size) {
        if (size === void 0) { size = 1; }
        var pages = [];
        array.forEach(function (item, index) {
            var page = Math.floor(index / size);
            if (!pages[page]) {
                pages[page] = [];
            }
            pages[page].push(item);
        });
        return pages;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 13:44:58
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 13:47:50
     * @Description: file content
     */
    /**
     *
     * @desc 判断两个数组是否相等
     * @param {Array} arr1
     * @param {Array} arr2
     * @return {Boolean}
     */
    var isArrEqual = function (arr1, arr2) {
        if (arr1 === arr2)
            return true;
        if (arr1.length != arr2.length)
            return false;
        for (var i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i])
                return false;
        }
        return true;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-08 13:49:06
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 13:49:29
     * @Description: file content
     */
    var array = {
        getArrChunk: getArrChunk,
        isArrEqual: isArrEqual
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 14:47:19
     * @LastEditors: crli
     * @LastEditTime: 2021-06-09 13:51:52
     * @Description: file content
     */
    /**
     * @desc 判断元素是否包含类名
     * @param { Element } element
     * @param { String } argClassName
     * @return { Boolean } true or false
     */
    var hasClass = function (obj, cls) {
        if (cls && obj) {
            return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(obj.className);
        }
        return false;
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 14:47:19
     * @LastEditors: crli
     * @LastEditTime: 2021-06-08 15:42:36
     * @Description: file content
     */
    var addClass = function (obj, cls) {
        if (!hasClass(obj, cls)) {
            obj.className += ' ' + cls;
        }
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 15:11:27
     * @LastEditors: crli
     * @LastEditTime: 2021-06-09 14:24:21
     * @Description: file content
     */
    /**
     * @desc 获取属性值
     * @param { Element } element
     * @param { String } attr
     * @param { String } NumberMode
     * @return { number|string }
     */
    var getStyle = function (element, attr, NumberMode) {
        if (NumberMode === void 0) { NumberMode = 'int'; }
        var target;
        if (attr === 'scrollTop') {
            target = element == document.documentElement ? (document.documentElement.scrollTop || document.body.scrollTop) : element.scrollTop;
        }
        else if (element.currentStyle) {
            target = element.currentStyle[attr];
        }
        else if (document.defaultView) {
            target = document.defaultView.getComputedStyle(element, null)[attr];
        }
        if (parseFloat(target) || parseInt(target)) {
            //在获取 opactiy 时需要获取小数 parseFloat
            return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
        }
        else {
            return target;
        }
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 14:47:19
     * @LastEditors: crli
     * @LastEditTime: 2021-06-21 15:54:42
     * @Description: file content
     */
    var removeClass = function (obj, cls) {
        if (hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    };

    /*
     * @Author: crli
     * @Date: 2021-06-01 15:33:59
     * @LastEditors: crli
     * @LastEditTime: 2021-06-01 15:34:44
     * @Description: file content
     */
    var dom = {
        addClass: addClass,
        getStyle: getStyle,
        hasClass: hasClass,
        removeClass: removeClass
    };

    var index = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, cookie), url), object), bom), functions), regexp), storage), date), time), array), dom);

    exports.array = array;
    exports.bom = bom;
    exports.cookie = cookie;
    exports.date = date;
    exports.default = index;
    exports.dom = dom;
    exports.functions = functions;
    exports.object = object;
    exports.regexp = regexp;
    exports.storage = storage;
    exports.time = time;
    exports.url = url;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
