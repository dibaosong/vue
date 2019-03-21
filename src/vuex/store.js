import Vue from 'vue';
import Vuex from 'vuex';

//import list from '@/vuex/modules/list';

Vue.use(Vuex);

const state = {
	info: {}, //用户信息
	leftMenuH: 0 //左侧菜单栏高度
};

const mutations = {
	//更新用户信息
    updateInfo(state, res){
    	state.info = res;
    },
    //更新左侧菜单栏高度
    updateLeftMenuH(state, res){
    	state.leftMenuH = res;
    }
}
export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	state,
	mutations,
	modules: {
		//list
	}
})