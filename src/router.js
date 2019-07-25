import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: "/home",
			name: "home",
			component: () => import("@/views/Home/Home.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/views/About/About.vue"),
		},
		{
			path: "/team",
			name: "team",
			component: () => import("@/views/Team/Team.vue"),
		},
		{
			path: "/contacts",
			name: "contacts",
			component: () => import("@/views/Contacts/Contacts.vue"),
		},
		{
			path: "/request",
			name: "request",
			component: () => import("@/views/Request/Request.vue"),
		}
	]
});
