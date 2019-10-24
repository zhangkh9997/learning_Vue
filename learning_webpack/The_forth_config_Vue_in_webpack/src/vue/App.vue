<template>
    <div id="app">
        <h2>{{ msg }}</h2>
        <button>click</button>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                msg:'Good morning!!'
            }
        }
    }
</script>

<style scoped>
#app{
    color: aqua;
}
</style>