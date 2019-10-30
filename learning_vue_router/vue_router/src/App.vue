<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!--
        1. keep-alive是Vue中内置的组件，是用来解决切换组件时，组件被频繁创建和销毁的问题的
            也就是说，可以使被包含的组件保留状态，或避免重新渲染
        2. keep-alive有两个非常重要的属性：
          2.1 include 字符串或正则表达式，只有匹配的组件会被缓存
          2.2 exclude 字符串或正则表达式，任何匹配的组件都不会被缓存
        3. router-view 也是一个组件，如果直接被包在keep-alive 中，所有路径匹配到的视图组件都会被缓存
     -->
    <!-- \d{2,9} 注意：和正则有关系的，不要在逗号后面家为空格 -->
    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
