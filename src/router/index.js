import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './login/login.js'; //登录
import Main from './public/main.js'; //公共

Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		{
			path: '/', //默认路由重定向至登录页
			redirect: 'login'
		},
		Login,
		Main
	],
	linkActiveClass: 'active'
});