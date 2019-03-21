import Main from '@/views/public/main'; //公共的主体页面

import Monitor from '@/router/monitor/monitor'; //监控

import System from '@/router/system/system'; //系统


export default({
	path: '',
	name: 'Main',
	component: Main,
	children: [
		Monitor,
		System
	]
});