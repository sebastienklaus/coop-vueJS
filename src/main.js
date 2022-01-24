import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false


Vue.prototype.$api = axios.create({
  baseURL: 'https://allweb.fun/coop/api/',
  params : {},
  headers: {'Authorization': "c59bc08d0048833f35491aeb431411924b3c7268"}
});


Vue.prototype.$api.interceptors.request.use(function (config) {
  console.log(config);
  if(store.state.token){
    config.params.token = store.state.token;
  }
  return config;
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
