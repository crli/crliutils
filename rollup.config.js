/*
 * @Author: crli
 * @Date: 2021-05-27 14:33:24
 * @LastEditors: crli
 * @LastEditTime: 2021-05-28 10:52:03
 * @Description: file content
 */
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import pkg from './package.json'

export default {
  input: 'src/index.ts', // 打包入口
  output:[
    { 
      name: pkg.name,
      file: pkg.browser, // 最终打包出来的文件路径和文件名，这里是在package.json的browser字段中配置的
      format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
    { 
      name: pkg.name,
      file: pkg.moduleName, 
      format: 'es' 
    }
  ],
  plugins: [ // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript() // 解析TypeScript
  ]
};