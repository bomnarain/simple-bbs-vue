import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 전역변수로 설정 컴포넌트에서 this.$axios 호출할 수 있음
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
