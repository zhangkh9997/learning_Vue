import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import HomeMessages from "../components/HomeMessages";
import HomeNews from "../components/HomeNews";
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }

  {
    path:'/home',
    name:'Home',
    component: Home,
    // 这个是元数据：定义数据的数据，可以用来定义组件的一些是数据
    meta:[],
    children:[
      {
        path:'news',
        component:'HomeNews',
      },
      {
        path: 'messages',
        component: 'HomeMessages'
      }
    ]
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
