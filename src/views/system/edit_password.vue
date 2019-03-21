<template>
	<div class="edit-password">
		 <el-form :model="passwordForm" label-width="100px">
		 	<el-form-item label="原始密码">
		 		<el-input type="password" v-model.trim="passwordForm.oldPassword" auto-complete="off"></el-input>
		 	</el-form-item>
		 	<el-form-item label="新密码">
		 		<el-input @input="strength()" type="password" v-model.trim="passwordForm.newPassword" auto-complete="off"></el-input>
		 	</el-form-item>
		 	<el-form-item label="密码强度">
		 		<el-button :type="strengthNum > 0 ? 'danger' : ''" size="small">弱</el-button>
		 		<el-button :type="strengthNum > 2 ? 'warning' : ''" size="small">中</el-button>
		 		<el-button :type="strengthNum > 3 ? 'success' : ''" size="small">强</el-button>
		 	</el-form-item>
		 	<el-form-item label="确认密码">
		 		<el-input type="password" v-model.trim="passwordForm.confirmPassword" auto-complete="off"></el-input>
		 	</el-form-item>
		 	<el-form-item>
		 		<el-button type="primary" @click="save()">保存</el-button>
		 		<el-button @click="reset()">重置</el-button>
		 	</el-form-item>
		 </el-form>
		 <el-select v-model="value" placeholder="请选择">
		    <el-option
		      v-for="item in options"
		      :key="item.value"
		      :label="item.label"
		      :value="item.value">
		    </el-option>
		  </el-select>
	</div>
</template>

<script>
	import api from '@/api/system';

	export default {
		data() {
			return {
				options: [{
		          value: '1',
		          label: '黄金糕'
		        }, {
		          value: '2',
		          label: '双皮奶'
		        }, {
		          value: '3',
		          label: '蚵仔煎'
		        }, {
		          value: '4',
		          label: '龙须面'
		        }, {
		          value: '5',
		          label: '北京烤鸭'
		        }],
		        value: '8',
				passwordForm: {
					oldPassword: '',
					newPassword: '',
					confirmPassword: ''
				},
				strengthNum: 0
			}
		},
		mounted(){
			let arr = this.options.filter((item) => {
				return item.value == this.value;
			});
			if(arr.length == 0){
				this.value = '';
			};
		},
		methods: {
			//密码强度检测
			strength(){
				let password = this.passwordForm.newPassword,
					strengthNum = 0;
				if(password.length >= 1){
					strengthNum++;
				};	
				if(password.length >= 6){
					if(/\d/.test(password)){ //数字
						strengthNum++;
					};
					if(/[a-z]/.test(password)){ //小写
						strengthNum++;
					};
					if(/[A-Z]/.test(password)){ //大写
						strengthNum++;
					};
					if(/\W/.test(password)){ //特殊字符
						strengthNum++;
					};
				};
				this.strengthNum = strengthNum;
			},
			//保存
			save(){
				if(this.passwordForm.oldPassword == ''){
					this.$alert('请输入原始密码');
					return;
				};
				if(this.passwordForm.newPassword == ''){
					this.$alert('请输入新密码');
					return;
				};
				if(this.passwordForm.confirmPassword == ''){
					this.$alert('请输入确认密码');
					return;
				};
				if(this.passwordForm.newPassword !== this.passwordForm.confirmPassword){
					this.$alert('两次输入的密码不一致');
					return;
				};
				api.editPasswordSave(this.passwordForm).then((res) => {
					var data = res.data;
					if(data.ok){
						this.$alert('修改成功');
						this.reset();
					}else{
						this.$alert(data.errorMsg);
					};
				});
			},
			//重置
			reset(){
				this.passwordForm = {
					oldPassword: '',
					newPassword: '',
					confirmPassword: ''
				};
				this.strengthNum = 0;
			}
		}
	}
</script>

<style lang="scss">
	.edit-password{
		form{
			width: 360px;
			margin: 50px auto;
		}
	}
</style>