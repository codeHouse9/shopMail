<template>
	<div class="detail-swiper">
		<swiper class="swiper-scroll">
			<swiper-item v-for="(item, index)  in topImg"
			:key="item + index">
				<img :src="item" />
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper'
	export default {
		components: {
			Swiper,
			SwiperItem
		},
		props: {
			topImg: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			// imgLoaded() {
			// 	this.$bus.$emit('itemImgLoad')
			// }
		}
	}
	
</script>

<style scoped="scoped">
	.swiper-scroll {
		height: 300px;
	}
</style>
