import Vue from 'vue'
import App from './App.vue'
// Import untuk http request menggunakan vue-resources
import VueResource from 'vue-resource'
Vue.use(VueResource);

// Deklarasi bus
export const bus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
