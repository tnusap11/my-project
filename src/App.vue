<template>
  <div id="app">
    <my-header></my-header>
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
// 引入组件
import MyHeader from '@/components/myHeader'
export default {
  name: "App",
  // 注册组件
  components: {
    MyHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
