
import Vue from 'vue'
import router from './router'
import App from './App'
import Axios from 'axios'
import Element from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './style/global.scss'

// axios start ---
Object.defineProperty(Vue.prototype, '$axios', {
  get () {
    return Axios
  }
})
Axios.defaults.baseURL = 'http://dev.vocoorcn.com/api';

let loadingInstance;
Axios.interceptors.request.use( config => {
  loadingInstance = Element.Loading.service({
    text : '数据加载中...',
    target : '.main',
    spinner : 'vocoor-icon-doing'
  });
  return config;
});

Axios.interceptors.response.use( response => {
  loadingInstance.close();
  return response;
});
// axios end ---

// use start ---
Vue.use(Element)
// use end ---

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: c => c(App)
})
