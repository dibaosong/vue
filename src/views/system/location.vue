<template>
	<div :style="{height: leftMenuH + 'px'}">
		<div class="map" id="mapBox"></div>
		<div class="location-echarts" id="myChart"></div>
	</div>
</template>

<script>
	import {mapState} from 'vuex';

	export default {
		data() {
			return {
				map: null
			}
		},
		computed: {
			...mapState([
	 			'leftMenuH'
	 		])
		},
		mounted() {
			this.initMap();
			this.drawLine();
		},
		methods: {
			initMap(){
				this.map = new AMap.Map('mapBox', {
					center: [111.43, 34.693],
					zoom: 4
				});
			},
			drawLine(){
				// 基于准备好的dom，初始化echarts实例
		        let myChart = this.$echarts.init(document.getElementById('myChart'))
		        // 绘制图表
		        myChart.setOption({
		            title: { text: '在Vue中使用echarts' },
		            tooltip: {},
		            xAxis: {
		                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		            },
		            yAxis: {},
		            series: [{
		                name: '销量',
		                type: 'bar',
		                data: [5, 20, 36, 10, 10, 20]
		            }]
		        });

			}
		}
	}
</script>

<style lang="scss">
	.map{
		width: 100%;
		height: 100%;
	}
	.location-echarts{
		position: fixed !important;
		bottom: 10px;
		right: 10px;
		width: 300px;
		height: 200px;
		background: #fff;
	}
</style>