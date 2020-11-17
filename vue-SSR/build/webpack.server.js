/*
 * @Author: wanghy
 * @Date: 2020-11-17 10:53:22
 * @LastEditTime: 2020-11-17 10:59:29
 * @Description: 
 */

 const path = require('path')
 
 const { merge } = require('webpack-merge')
 const base = require('./webpack.base')

 const HtmlWebpackPlugin = require('html-webpack-plugin')

 const resolve = (dir) => {
     return path.resolve(__dirname, dir)
 }

 module.exports = merge(base, {
     entry: {
         server: resolve('../src/entry-server.js')
     },
     target: 'node',
     output: {
         libraryTarget: 'commonjs2'
     },
     plugins: [
         new HtmlWebpackPlugin({
             filename: 'index.ssr.html',
             template: resolve('../public/index.ssr.html'),
             excludeChunks: ['server'],
             minify: {
                 removeComments: false
             }
         })
     ]
 })