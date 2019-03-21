import $ from '@/api/api';

export default {
	//获取个人信息与系统菜单
	getMenu(data){
		return $.ajax(
			'/src/data/menu.json',
			data
		);
	}
}

