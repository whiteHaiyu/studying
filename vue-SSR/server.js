/*
 * @Author: wanghy
 * @Date: 2020-11-12 17:03:15
 * @LastEditTime: 2020-11-17 14:49:41
 * @Description: vue SSR
 */

const fs = require('fs')
const path = require('path')

const Vue = require('vue')
const Express = require('express')
const VueServerRenderer = require('vue-server-renderer')

const server = Express()

server.use(Express.static(path.join(__dirname,'dist')))

server.get('/', async (req, res) => {
    // const app = new Vue({
    //     data: {
    //         url: req.url
    //     },
    //     template: '<div>Vue SSR {{ url }}</div>'
    // })

    // const template = fs.readFileSync('./index.template.html', 'utf-8')
    
    // const renderer = VueServerRenderer.createRenderer({
    //     template
    // })

    const serverBundle = fs.readFileSync('./dist/server.bundle.js', 'utf-8')
    const template = fs.readFileSync('./dist/index.ssr.html', 'utf-8')

    const renderer = VueServerRenderer.createBundleRenderer(serverBundle, {
        template
    })

    const ctx = await renderer.renderToString()
    res.send(ctx)

    // const context = {
    //     title: 'Vue SSR',
    //     metas: `
    //         <meta name="keyword" content="vue,ssr">
    //         <meta name="description" content="vue ssr demo">
    //     `
    // }

    // renderer.renderToString(app, context, (err, html) => {
    //     if (err) {
    //         console.log(err)
    //         res.status(500).send('Internal Server Error')
    //         return
    //     }
    //     // res.send(`
    //     //     <!DOCTYPE html>
    //     //     <html lang='en'>
    //     //         <head><title>Vue SSR</title></head>
    //     //         <body>${html}</body>
    //     //     </html>
    //     // `)
    //     res.send(html)
    // })
})

server.listen(8080, () => {
    console.log(`vue ssr 启动`)
})


