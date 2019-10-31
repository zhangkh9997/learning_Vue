<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainTabBar from "./components/maintabbar/MainTabBar";
  export default {
    name: 'App',
    components:{
      MainTabBar
    }
  }
</script>

<style>
  /*在style中引用文件的固定格式，使用 @import 开头*/
  @import "assets/css/base.css";

</style>
