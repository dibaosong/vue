<template>
	<div class="row">
		<div class="col-md-4" v-for="item in bookList">
			<a>
				<div class="thumbnail">
					<img width="100%" height="200" src="">
					<div class="caption">
						<p v-text="item.name"></p>
					</div>
				</div>
			</a>
		</div>
		<el-radio v-model="radio" label="1">备选项</el-radio>
  		<el-radio v-model="radio" label="2">备选项</el-radio>
	</div>
</template>

<script>
	 import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
	 
	 export default {
	 	data(){
	 		return {
	 			radio: '1'
	 		}
	 	},
	 	created(){
	 		this.list.page = 2;
	 		this.getBooklistApi();
	 	},
	 	methods: {
	 		...mapActions([
	 			'getBooklistApi'
	 		])
	 	},
	 	computed: {
	 		...mapState([
	 			'list'
	 		]),
	 		...mapGetters([
		      'bookList'
		    ])
	 	}
	 }
</script>

<style>
	
</style>