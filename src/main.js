import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { i18n } from "@/plugins/i18n";
import Vue2TouchEvents from "vue2-touch-events";
import VueMask from 'v-mask'

import TellaFooter from "@/components/Footer/Footer.vue";
import TellaNavigation from "@/components/Navigation/Navigation.vue";
import TellaAddress from "@/components/Address/Address.vue"

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);
Vue.use(VueMask);

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.component("tella-navigation", TellaNavigation);
Vue.component("tella-footer", TellaFooter);
Vue.component("tella-address", TellaAddress);

new Vue({
	i18n,
	router,
	store,
	render: h => h(App)
}).$mount("#app");
