import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css';
import 'vue-material/dist/theme/default-dark.css' 

import store from './store';

Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
