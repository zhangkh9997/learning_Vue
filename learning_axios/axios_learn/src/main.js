import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// import axios from 'axios'
//
// // 3. 可以设置一些基础地址，超时时间等
// // 在使用全局的axios和对应的配置在进行网络请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// // 1. 基本使用
// axios({
//   url: '/home/multidata',
//   // method 设置请求的方式，get post等
//   method:'get'
//   // 支持promise，所以可以使用链式的方式进行书写
// }).then(res => {
//   console.log(res);
// })
//
// axios({
//   url: '/home/data',
//   // 地址中的参数可以放到params中，以对象的方式存在，axios会将参数拼接到url中
//   // 专门针对 get请求的参数拼接
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//
// // 2. axios 发送并发请求
// axios.all([
//     axios(
//         {
//           url: '/home/multidata'
//         }
//     ),
//     axios(
//         {
//           url: '/home/data',
//           params: {
//             type: 'sell',
//             page: 5
//           }
//         }
//     )]).then( result => {
//   console.log(result);
// } )
//
// // 4. 创建 axios 对应的实例，针对不同的服务器设置相应的基础访问地址或者是超时时间等。
// // 不同的服务器对应不同的axios实例,每个实例有自己独立的配置
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
//
// instance1({
//   url: '/home/data',
//   params:{
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })
//
// const instance2 = axios.create({
//   baseURL: 'http://222.111.32.32:8080',
//   timeout: 1000
// })

// 5 封装request模块进行网络请求
import {request} from './network/request'
// 1 第一种封装方法
// request({
//   url: '/home/multidata'
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// 2 第二种封装方法
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success:function (res) {
//     console.log(res);
//   },
//   failure:function (err) {
//     console.log(err);
//   }
// })

// 3 第三种封装方法
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


