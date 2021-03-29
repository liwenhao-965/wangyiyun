import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import 'vant/lib/button/style';


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(ViewUI);



Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
