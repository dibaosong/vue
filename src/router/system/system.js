import SystemMain from '@/views/public/submain'; //系统页面主体

import SystemWelcome from '@/views/system/welcome'; //系统欢迎页面

import SystemEditPassword from '@/views/system/edit_password'; //修改密码

import SystemAuthManagement from '@/views/system/auth_management'; //权限管理

import SystemPersonal from '@/views/system/personal'; //个人信息

import SystemLocation from '@/views/system/location'; //飞行定位

export default({
	path: 'system',
	meta: {
		requireAuth: true
	},
	name: 'SystemMain',
	component: SystemMain,
	children: [
		{
			//系统欢迎页面
			path: 'welcome',
			name: 'SystemWelcome',
			component: SystemWelcome
		},
		{
			//修改密码
			path: 'edit-password',
			name: 'SystemEditPassword',
			component: SystemEditPassword
		},
		{
			//权限管理
			path: 'auth-management',
			name: 'SystemAuthManagement',
			component: SystemAuthManagement
		},
		{
			//个人信息
			path: 'personal',
			name: 'SystemPersonal',
			component: SystemPersonal
		},
		{
			//飞行定位
			path: 'location',
			name: 'SystemLocation',
			component: SystemLocation
		}
	]
});