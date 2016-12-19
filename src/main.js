import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import App from './App'
import routes from './options/routes'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$http = axios.create({
  baseURL: '//pokalc-c55f9.firebaseio.com/'
})

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
