import MonitorMain from '@/views/public/submain'; //系统页面主体

import MonitorPlan from '@/views/monitor/plan'; //监控计划

import MonitorFlightPath from '@/views/monitor/flightPath'; //航迹回放

export default({
	path: 'monitor',
	meta: {
		requireAuth: true
	},
	name: 'MonitorMain',
	component: MonitorMain,
	children: [
		{
			//监控计划
			path: 'plan',
			name: 'MonitorPlan',
			component: MonitorPlan
		},
		{
			//航迹回放
			path: 'flightPath',
			name: 'MonitorFlightPath',
			component: MonitorFlightPath
		}
	]
});