<template>
	<div class="wrapper">
		<div class="scroller">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import IScroll from './iscroll-probe';
	export default {
		name: 'fly-iscroll',
		props: {
			opts: {
				type: Object,
				default() {
					return {
						bounce: false,
		                preventDefault: false,
		                mouseWheel: true,  //鼠标滚轮
		                disableMouse: true, //禁用鼠标
		                disablePointer: true, //禁用鼠标
		                interactiveScrollbars: true, //滚动条能拖动
		                fadeScrollbars: true, //淡入淡出
		                scrollbars: true  //滚动条
					}
				}
			}
		},
		data() {
			return {
				scroll: null
			}
		},
		mounted() {
			this.scroll = new IScroll(this.$el, this.opts);
		}
	}
</script>

<style>
	.wrapper{
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.scroller{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}
	.iScrollIndicator{
		background: rgba(0, 0, 0, 0.2) !important;
	}
	.wrapper:hover .iScrollVerticalScrollbar{
		opacity: 1 !important;
	}
</style>