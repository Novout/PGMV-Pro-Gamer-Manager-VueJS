import Vue from "vue";
import vSelect from "vue-select";
import App from "./App.vue";

import router from "./router";
import store from "./store";
import "./plugins/font-awesome";

import "vue-select/dist/vue-select.css";
import "./css/main.css";
import "./css/preset.css";

Vue.config.productionTip = false;
Vue.component("v-select", vSelect);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
