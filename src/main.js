import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      loggedIn: false,
      username: null,
      name: null,
      userId: null,
    }
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
