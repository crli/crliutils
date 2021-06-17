/*
 * @Author: crli
 * @Date: 2021-05-27 14:33:24
 * @LastEditors: crli
 * @LastEditTime: 2021-06-17 15:03:59
 * @Description: file content
 */
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'
const env = process.env.NODE_ENV
let config = {
  input: 'src/index.ts', // 打包入口
  output:[
    { 
      name: pkg.name,
      file: 'dist/crliutils.js',
      format: 'umd', // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
    },
    { 
      name: pkg.name,
      file: 'dist/crliutils.esm.js', 
      format: 'es' 
    }
  ],
  plugins: [ // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
    typescript() // 解析TypeScript
  ]
}
if (env === 'production') {
  config.output = [
    { 
      name: pkg.name,
      file: 'dist/'+ pkg.main,
      format: 'umd',
    },
    { 
      name: pkg.name,
      file: 'dist/'+ pkg.module, 
      format: 'es' 
    }
  ],
  config.plugins.push(
    uglify({
      mangle: false // 不混淆一些代码的变量名
    })
  )
}
export default config