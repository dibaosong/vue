import $ from '@/api/api';

export default {
	/**
	 * 修改密码 页面相关请求
	 */
	editPasswordSave(data){
		return $.ajax(
			'/src/data/login.json',
			data
		);
	},

	/**
	 * 个人信息 页面相关请求
	 */
	getPersonal(){
		return $.ajax(
			'/src/data/getpersonal.json'
		);
	}
}

