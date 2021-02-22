/*
* 路由器对象模块
* */
import Vue from 'vue'
// import VueRouter from 'vue-loader' 老天，真是够了
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 声明使用插件
Vue.use(VueRouter)
/* 路由组件映射为路由，一般组件映射为标签 */
export default new VueRouter({
  // 所有路由
  // routers: [
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
