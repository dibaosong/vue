<template>
	<el-button :style="{width: btnW + 'px'}" :type="this.isSend ? 'info' : 'primary'" :disabled="this.isSend" @click="sendCode">{{oText}}</el-button>
</template>

<script>
	export default {
		name: 'fly-send-verification-code',
		props: {
			text: {
				type: String,
				default: '发送验证码'
			},
			type: {
				type: String,
				default: 'phone'
			},
			number: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				btnW: 'auto',
				sendStatus: true,
				sendVal: 0,
				emailReg: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
				phoneReg: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|16[6]|17[0|6|7|8]|18[0-9]|19[8|9])\d{8}$/,
				isSend: false,
				timer: null,
				oText: this.text
			}
		},
		mounted() {
			//初始化设定按钮宽度，为了倒计时过程按钮宽度不会根据内容多少发生变化
			this.btnW = this.$el.offsetWidth;
		},
		watch: {
			sendVal(val) {
				this.$emit('sendStatus', this.sendStatus);
			}
		},
		methods: {
			//发送验证码
			sendCode(){
				//如果正在发送中，则不可点击
				if(this.isSend){
					return;
				};
				this.sendVal = new Date().getTime();
				//如果是发送邮箱
				if(this.type == 'email'){
					if(this.emailReg.test(this.number)){
						this.sendStatus = true;
					}else{
						this.sendStatus = false;
					};
				};
				//如果发送，则进入倒计时
				if(this.sendStatus){
					this.isSend = true;
					this.oText = '60s';
					this.timer = setInterval(() => {
						if(parseInt(this.oText) > 1){
							this.oText = parseInt(this.oText) - 1 + 's';
						}else{
							this.resetSend();
						};
					}, 1000);
				};
			},
			//重置为可发送状态
			resetSend(){
				this.oText = this.text;
				this.isSend = false;
				if(!!this.timer){
					clearInterval(this.timer);
					this.timer = null;
				};
			}
		}
	}
</script>