import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/home.js' // 首页
import Vendor from './vendor/vendor.js'

Vue.use(Router)

const router = new Router({
  routes: [].concat(
    Home,
    Vendor
  )
})

export default router
