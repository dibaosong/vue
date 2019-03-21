import $ from '@/api/api';

export default {
	//获取图书列表
	booklistApi(data){
		return $.ajax(
			'/src/data/booklist.json',
			data
		);
	}
}

