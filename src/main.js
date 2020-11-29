import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import './services/axios'

Vue.config.productionTip = false;

export const vm = new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
