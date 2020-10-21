import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {manageTableGlobalConfigUtil} from "../index";

Vue.use(ElementUI)

Vue.use(manageTableGlobalConfigUtil, {
  operateButtons: []
})

new Vue({
  render: h => h(App)
}).$mount('#app')
