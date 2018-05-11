// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store.js'

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api/';

Vue.config.productionTip = false

Vue.use(Vuex)

// 设置路由跳转
Vue.prototype.$goRoute = function(index) {
  this.$router.push(index)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})