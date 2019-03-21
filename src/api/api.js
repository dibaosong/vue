import axios from 'axios';

export default {
	//封装 axios 请求
	ajax(url, data, method = 'get'){
		return new Promise((resolve, reject) => {
			axios({
				url: url,
				method: method,
				params: data
			}).then((res) => {
				resolve(res);
			}, (error) => {
				reject(error)
			})
		})
	} 
}