<template>
    <div>
        <h2>这是主组件</h2>
        <router-link to="/home/news">新闻</router-link>
        <router-link to="/home/messages">信息</router-link>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                path:'/home/news'
            }
        },
        methods: {

        },
        // 注意：activated 和 activated 这两个函数只有当该组件使用keep-alive 的时候才能够起作用
        // activated() {
        //     // this.$router.push(this.path)
        // },
        // deactivated() {
        // },
        // created() {
        // },
        // destroyed() {
        // },
        // // 这个方法是路由的守卫方法
        // beforeRouteLeave(){
        // }

    }
</script>

<style scoped>

</style>