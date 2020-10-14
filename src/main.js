import Vue from 'vue'
import App from './App.vue'
// Import untuk http request menggunakan vue-resources
import VueResource from 'vue-resource'
Vue.use(VueResource);

// Filters
// 2 argumen nama dan fungsi

Vue.filter('snippet', function(value){
  return value.slice(0,100) + '...'
})

// Custom Directives (deklarasi)
Vue.directive('theme', {
  bind(el, binding, vnode) {
    if(binding.value == "wide") {
      el.style.maxWidth = "1200px";
    } else if(binding.value == "narrow") {
      el.style.maxWidth = "560px"
    }
    if (binding.arg =="column") {
      el.style.background = "#ddd";
      el.style.padding = "20px"
    }
  }
});

// Deklarasi bus
export const bus = new Vue();


new Vue({
  el: '#app',
  render: h => h(App)
})
