/*
 * @Author: wanghy
 * @Date: 2020-11-17 10:27:53
 * @LastEditTime: 2020-11-17 11:05:45
 * @Description: 
 */

 import Vue from 'vue'
 import App from "./App.vue"

 export function createApp() {
    const app = new Vue({
        render: h => h(App)
    })

    return { app }
 }
