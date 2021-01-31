import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import routes from '../src/routes'
import axios from 'axios';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({routes});
new Vue({
    render: h => h(App),
    router,
    data () {
        return {
          info: null
        }
      },
      mounted () {
        axios
          .get('http://localhost:3001/notes')
          .then(response => (this.info = response))
      }
}).$mount('#app')