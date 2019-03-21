import api from '@/api/list';

const state = {
	bookList: {},
	page: 0
};

const getters = {
	bookList: state => state.bookList
};

const mutations = {
	getBooklistApi(state, res){
		state.bookList = res;
	}
};

const actions = {
	getBooklistApi({state, commit}){
		api.booklistApi({page: state.page}).then((res) => {
			commit('getBooklistApi', res.data);
		})
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}