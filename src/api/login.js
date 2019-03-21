import $ from '@/api/api';

export default {
	/**
	 * 登录
	 * data: {user: 用户名    password: 密码    codes: 验证码}
	 */
	login(data){
		return $.ajax(
			'/src/data/login.json',
			data
		);
	}
}

