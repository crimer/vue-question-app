import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import dateFilter from "./filters/date.filter";

Vue.filter("date", dateFilter);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
