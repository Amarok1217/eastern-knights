import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import '@/element/theme/index.css'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.use(ElementUI)
Vue.use(Viewer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
