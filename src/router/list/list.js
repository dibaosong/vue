import ListMain from '@/views/list/main'; //列表页面主体

import List from '@/views/list/list'; //列表

export default({
	path: '',
	name: 'ListMain',
	component: ListMain,
	children: [
		{
			path: '/list',
			name: 'List',
			component: List
		}
	]
});