<template>
	<div class="personal">
		<el-form :model="personalForm" label-width="100px">
		 	<el-form-item label="头像">
		 		<el-upload
				  class="avatar-uploader"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  name="avatar"
				  :show-file-list="false"
				  :on-success="handleAvatarSuccess"
				  :before-upload="beforeAvatarUpload">
				  <img v-if="personalForm.avatar" :src="personalForm.avatar" class="avatar">
				  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
		 	</el-form-item>
		 	<el-form-item label="姓名">
		 		<el-input v-model.trim="personalForm.name"></el-input>
		 	</el-form-item>
		 	<el-form-item label="邮箱">
		 		<el-input type="email" v-model="personalForm.email" disabled></el-input>
		 		<el-button type="primary" v-if="!!emailBtnText" v-text="emailBtnText" @click="dialogEmailVisible = true"></el-button>
		 	</el-form-item>
		 	<el-form-item label="手机号">
		 		<el-input v-model="personalForm.phone" disabled></el-input>
		 		<el-button type="primary" v-if="!!phoneBtnText" v-text="phoneBtnText"></el-button>
		 	</el-form-item>
		 	<el-form-item>
		 		<el-button type="primary" @click="save()">保存</el-button>
		 	</el-form-item>
		</el-form>
		<el-dialog title="绑定邮箱" :visible.sync="dialogEmailVisible" :append-to-body="true" :close-on-click-modal="false" width="450px" @closed="dialogEmailClose">
			<el-form :model="emailForm" label-width="60px">
				<el-form-item label="邮箱">
					<el-input ref="emailInput" v-model.trim="emailForm.email" class="personal-dialog-input" type="email"></el-input>
		 			<fly-send-verification-code ref="sendEmail" text="发送邮箱验证码" type="email" :number="emailForm.email" @sendStatus="onSendEamil"></fly-send-verification-code>
				</el-form-item>
				<el-form-item label="验证码">
					<el-input v-model.trim="emailForm.phone" class="personal-dialog-code"></el-input>
				</el-form-item>
				<el-form-item>
			 		<el-button type="primary">确定</el-button>
			 	</el-form-item>
			</el-form>
		</el-dialog>
		<el-dialog title="绑定手机" :visible.sync="dialogPhoneVisible" :append-to-body="true" :close-on-click-modal="false" width="450px">
			<el-form :model="phoneForm" label-width="60px">
				<el-form-item label="手机号">
					<el-input v-model.trim="phoneForm.phone" class="personal-dialog-input"></el-input>
		 			<el-button type="primary">发送手机验证码</el-button>
				</el-form-item>
				<el-form-item label="验证码">
					<el-input v-model.trim="phoneForm.code" class="personal-dialog-code"></el-input>
				</el-form-item>
				<el-form-item>
			 		<el-button type="primary">确定</el-button>
			 	</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import api from '@/api/system';
	export default {
		data() {
			return {
				personalForm: {
					avatar: '',
					name: '',
					email: '',
					phone: '',
				},
				emailBtnText: '',
				phoneBtnText: '',
				emailForm: {
					email: '',
					code: ''
				},
				phoneForm: {
					phone: '',
					code: ''
				},
				dialogEmailVisible: true,
				dialogPhoneVisible: false
			}
		},
		created() {
			//获取个人信息
			this.getPersonal();
		},
		methods: {
			//获取个人信息
			getPersonal() {
				api.getPersonal().then((res) => {
					console.log(res)
					var data = res.data;
					if(data.ok){
						this.personalForm = {
							avatar: data.avatar,
							name: data.name,
							email: data.email,
							phone: data.phone
						};
						this.emailBtnText = !!data.email ? '更改邮箱' : '绑定邮箱';
						this.phoneBtnText = !!data.phone ? '更改手机' : '绑定手机';
					};
				});
			},
			handleAvatarSuccess(res, file) {
				this.personalForm.avatar = URL.createObjectURL(file.raw);
			},
		    beforeAvatarUpload(file) {
		        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
		        const isLt2M = file.size / 1024 / 1024 < 2;

		        if (!isJPG) {
		          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
		        }
		        if (!isLt2M) {
		          this.$message.error('上传头像图片大小不能超过 2MB!');
		        }
		        return isJPG && isLt2M;
		    },
		    //接收邮箱发送状态
		    onSendEamil(val) {
		    	if(val){ //如果通过邮箱验证，则发送请求
		    		
		    	}else{ //如果未通过邮箱验证
		    		this.$message.error('请输入正确的邮箱地址');
		    		this.$refs.emailInput.$refs.input.focus();
		    	};
		    },
		    //绑定邮箱弹出框关闭回调
		    dialogEmailClose() {
		    	//重置发送邮箱验证码状态
		    	this.$refs.sendEmail.resetSend();
		    }
		}
	}
</script>

<style lang="scss">
	.personal{
		form{
			width: 460px;
			margin: 50px auto;
		}
		.el-input{
			width: 250px;
		}
	}
	.personal-dialog-input{
		width: 200px;
	}
	.personal-dialog-code{
		width: 100px;
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
</style>