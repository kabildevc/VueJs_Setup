import Vue from 'vue'
import App from './App'
import router from './router'
import config from './config'
import VueLazyload from 'vue-lazyload'
import BootstrapVue from 'bootstrap-vue'

Vue.prototype.$config = config
Vue.use(VueLazyload)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  // render: h=>h(App)
})