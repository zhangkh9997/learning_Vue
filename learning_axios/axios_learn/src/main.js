import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


import axios from 'axios'

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  // method 设置请求的方式，get post等
  method:'get'
  // 支持promise，所以可以使用链式的方式进行书写
}).then(res => {
  console.log(res);
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 地址中的参数可以放到params中，以对象的方式存在，axios会将参数拼接到url中
  // 专门针对 get请求的参数拼接
  params:{
    type: 'pop',
    page: 1
  }
})