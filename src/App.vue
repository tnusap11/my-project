<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// 引入组件
import MyHeader from "@/components/myHeader";
export default {
  name: "App"
};
</script>

<style>
@import './reset.css';
</style>
