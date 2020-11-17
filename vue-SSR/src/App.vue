<!--
 * @Author: wanghy
 * @Date: 2020-11-17 10:29:42
 * @LastEditTime: 2020-11-17 10:31:16
 * @Description: 
-->

<template>
  <div id="app">
      <div class="demo">
          一段内容
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        onClick() {
            console.log(`click!!!!!`)
        }
    }
}
</script>

<style>
.demo  {
    width: 300px;
    height: 300px;
    background-color: orange;
}
</style>
