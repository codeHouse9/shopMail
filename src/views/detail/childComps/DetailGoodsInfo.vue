<template>
	<div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
		<div class="info-desc clear-fix">
			<div class="desc">{{detailInfo.desc}}</div>
		</div>
		<div class="info-key">
			{{detailInfo.detailImage[0].key}}
		</div>
		<div class="info-list">
			<img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" />
		</div>
		
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				counter: 0,
				imgLength: 0
			}
		},
		methods: {
			imgLoad() {
				// if(++this.counter === this.imgLength) {
				// 	this.$emit('imgLoad')
				// }
				this.$emit('imgLoad')
			}
		},
		watch: {
			detailInfo() {
				this.imgLength = this.detailInfo.detailImage[0].list.length
			}
		}
	}
</script>

<style>
	.goods-info {
		display: flex;
		flex-direction: column;
		padding: 0 8px;
		margin: 30px 0;
		padding-bottom: 20px;
		border-bottom: 5px solid #F9F7FB;
	}
	.goods-info div[class ^= info] {
		
	}
	.info-list img{
		width: 100%;
	}
	.info-key {
		margin: 20px 0 10px;
		font-size: 1.125rem;
		color: #333;
	}
</style>
