import Vue from 'vue'
import App from './App.vue'
import io from 'socket.io-client'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueAxios, axios)

Vue.prototype.$socket = io(`http://192.168.43.186:${process.env.VUE_APP_SOCKET_PORT}`)
//Vue.prototype.$socket = io(`http://osmarpj.com`)

new Vue({
  render: h => h(App),
}).$mount('#app')
