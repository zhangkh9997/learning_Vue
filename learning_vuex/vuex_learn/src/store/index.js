import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 定义需要管理的状态，存在的状态会进行数据同步，未被定义的状态不会响应式
  state: {
  },
  // 在其中定义一些操作状态的函数，但不能是异步的
  mutations: {
  },
  // 在其中专门进行一些异步的操作，再提交给mutations进行下一步操作
  actions: {
  },
  // 可以进行模块化的进一步开发，在各个模块中也可以定义一些state,mutations,actions等函数
  modules: {
  },
  // 在其中可以进行一些简单的状态操作，类似于computed属性
  getters:{

  }
})
