<template>
	<div class="tab-bar-item ignore" @click="itemBtn">
		<slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-icon-active"></slot>
		<div :style="ActiveColor" >
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'TabBarItme',
		props: {
			path: String,
			itemColor: {
				type: String,
				default: '#FF5777'
			}
		},
		computed: {
			isActive() {
				return this.$route.path.includes(this.path)
			},
			ActiveColor() {
				return this.isActive ? {color: this.itemColor} : {}
			}
		},
		methods: {
			itemBtn() {
				this.$router.push(this.path).catch(err => err)
			}
		}
	}
</script>

<style  scoped>
	.tab-bar-item {
		font-size: 12px;
		height: 49px;
	}
	.tab-bar-item img {
		display: block;
		width: 24px;
		height: 24px;
		margin: 4px 0 3px;
	}
</style>
