<template>
    <tab-bar>
      <tab-bar-item path="/home" active-color="blue">
        <img slot="item-icon" src="" alt="">
        <img slot="item-icon-active" src="" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" active-color="pink">
        <img slot="item-icon" src="" alt="">
        <img slot="item-icon-active" src="" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" active-color="blue">
        <img slot="item-icon" src="" alt="">
        <img slot="item-icon-active" src="" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" active-color="blue">
        <img slot="item-icon" src="" alt="">
        <img slot="item-icon-active" src="" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../tabbar/TabBar";
    import TabBarItem from "../tabbar/TabBarItem";
    export default {
        name: "mainTabBar",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>

</style>