// 将各种网络请求相关的，都封装到该文件中，方便管理和维护
import axios from 'axios'

//// 4 最终封装版本
export function request(config) {
    // 1 创建axios的实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    });

    // 2 axios全局或者其实例的拦截器
    // 2.1 请求拦截器的作用
    //    1 比如config中的一些信息不符合服务器的要求
    //    2 比如每次发送网络请求时，都希望在界面中现实一个请求的图标
    //    3 某些网络请求(比如登陆(token))，必须携带一些特殊的信息
    // 下面的是请求拦截
    instance.interceptors.request.use(config => {
        console.log(config);
        // 拦截器请求成功后，需要将config返回，否则resolve那边得不到结果
        return config
    },err => {
        console.log(err);
    })
    // 下面的是响应的拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        // 注意： 响应成功后也需要将必要的信息返回
        return res.data
    },error => {
        console.log(error);
    })

    // 3 发送真正的网络请求
    // axios 的实例instance就是使用Promise封装的，因此直接返回就可以了，
    // 不需要在创建一个promise实例，再返回
    return instance(config)
}


//// 3 第三种封装方法
// export function request(config) {
//     return new Promise((resolve,reject) => {
//     // 1 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//     .then(res => {
//         resolve(res)
//         })
//     .catch(err => {
//         reject(err)
//         })
//     })
// }

//// 2 第二种封装方法
// export function request(config) {
//     // 1 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config.baseConfig)
//     .then(res => {
//         config.success(res)
//     })
//     .catch(err => {
//         config.failure(err)
//     })
// }

////  1 第一种封装方法
// export function request(config,success,failure) {
//     // 1 创建axios的实例
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })
//     // 发送真正的网络请求
//     instance(config)
//     .then(res => {
//         success(res)
//     })
//     .catch(err => {
//         failure(err)
//     })
// }