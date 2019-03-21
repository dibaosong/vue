<template>
	<!-- <fly-iscroll ref="right">
		<router-view></router-view>
	</fly-iscroll> -->
	<router-view></router-view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		updated() {
			// this.$nextTick(() => {
			// 	if(!!this.$refs.right){
			// 		this.$refs.right.scroll.refresh();
			// 	};
			// });
		}
	}
</script>