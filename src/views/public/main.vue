<template>
	<div>
		<div class="menu-top">
			<el-menu router mode="horizontal" @select="handleSelect" background-color="#409eff" text-color="#fff" active-text-color="#fff">
				<div class="logo fl tc" @click="go()">飞行营地</div>
				<el-menu-item v-for="item in menu" :key="item.path" :class="{'is-active': $route.path.indexOf(item.path) != -1}" :index="item.href" v-text="item.name"></el-menu-item>
				<div class="menu-top-icon fr tc">
					<i class="el-icon-bell"></i>
					<el-tooltip class="item" effect="dark" content="退出系统" placement="bottom" :hide-after="1000">
				      	<i class="el-icon-close" @click="closeSystem($event)"></i>
				    </el-tooltip>
				</div>
			</el-menu>
		</div>
		<div class="content clearfix">
			<div class="menu-left fl" :style="{height: leftMenuH + 'px'}">
				<fly-iscroll ref="menu">
					<div class="top tc pt20 f14">
						<img class="top-img" :src="info.avatar" alt="">
						<p v-text="info.name"></p>
						<p v-text="info.auth"></p>
					</div>
					<el-menu router :default-active="$route.path" @open="handleOpen" @close="handleClose">
				      	<menuTree :menuData="leftMenu"></menuTree>
				    </el-menu>
				</fly-iscroll>
			</div>
			<div class="content-right fr" :style="{height: leftMenuH + 'px'}">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import '@css/public/main.scss';
	import api from '@/api/common';
	import menuTree from '@/views/public/menuTree';

	import {mapState, mapMutations} from 'vuex';

	export default {
		data() {
			return {
				menu: [],
				leftMenu: []
			}
		},
		watch: {
			leftMenu(){
				this.$nextTick(() => {
					this.menuScrollRefresh();
				});
			}
		},
		created() {
			//获取系统菜单
			this.getMenu();

			//获取左侧菜单栏高度
			this.getLeftMenuH();
		},
		mounted() {
			window.onresize = () => {
				this.getLeftMenuH();
			};
		},
		computed: {
			...mapState([
	 			'info',
	 			'leftMenuH'
	 		])
		},
		methods: {
			...mapMutations([
	 			'updateInfo',
	 			'updateLeftMenuH'
	 		]),
			//左侧菜单栏滚动条刷新
			menuScrollRefresh(){
				this.$refs.menu.scroll.refresh();
				setTimeout(() => {
		    		this.$refs.menu.scroll.refresh();
		    	}, 300)
			},
			//获取系统菜单
			getMenu(){
				api.getMenu().then((res) => {
					var data = res.data;
					this.updateInfo(data.info);
					this.menu = data.menu;
					var path = this.$route.path;
					//如果进来是系统欢迎页面，为了显示出左侧菜单，需要path为 /system/，方便请求数据能查看
					if(path == '/system/welcome'){
						path = '/system/';
					};
					this.leftMenu = this.menu.filter(item => JSON.stringify(item).indexOf(path) != -1)[0].subMenu;
				});
			},
			//获取左侧菜单栏高度
			getLeftMenuH(){
				let wh = window.innerHeight;
				this.updateLeftMenuH(wh - 60);
			},
			handleSelect(key, keyPath) {
		        this.leftMenu = this.menu.filter(item => JSON.stringify(item).indexOf(key) != -1)[0].subMenu;
		    },
		    handleOpen(key, keyPath) {
		    	this.menuScrollRefresh();
		    },
		    handleClose(key, keyPath) {
		        this.menuScrollRefresh();
		    },
		    //退出系统
		    closeSystem(event){
		    	event.currentTarget.blur(); //点击后失去一下焦点，为了解决当点击取消时退出系统提示文字又显示的问题
		    	this.$confirm('是否确认注销登录', '', {
		    		type: 'warning'
		    	}).then(() => {
		    		console.log('确认');
		    		localStorage.removeItem('token');
		    		this.$router.push({'name': 'login', 'query': {'redirect': this.$route.fullPath}});
		    	}).catch(() => {
		    		console.log('取消');
		    	})
		    }
		},
		components: {
			'menuTree': menuTree
		}
	}
</script>