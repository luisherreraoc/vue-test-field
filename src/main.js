import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import { MdDialog } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdDialog)

new Vue({
  // short para router: router, requerido para q funcione
  router,
  render: h => h(App)
}).$mount('#app')
