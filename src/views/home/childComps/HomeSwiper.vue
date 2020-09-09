<template>
	<div class="w">
		<swiper>
			<swiper-item v-for="(value, index) in banners" :key="value.title">
				<a :href="value.link">
					<img :src="value.image" @load="imgLoad"/>
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper'
	
	export default {
		props: {
			banners: {
				type: Array,
				default() {
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		},
		methods: {
			imgLoad() {
				this.$emit('imgLoad')
			}
		}
	}
</script>

<style>
</style>
