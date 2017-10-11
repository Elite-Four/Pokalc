import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'bulma/css/bulma.css'

import App from './App'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.prototype.$http = axios.create({
  baseURL: '//pokalc-c55f9.firebaseio.com/'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
