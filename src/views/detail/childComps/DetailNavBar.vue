<template>
		<div>
			<nav-bar>
				<div slot="left" class="back" @click="backClick">
					<img src="~assets/img/common/back.svg" />
				</div>
				<div slot="center" class="title">
					<div v-for="(item, index) in titles" class="item-title" @click="itemClick(index)" :class="{current: currentIndex === index}">
						{{item}}
					</div>
				</div>
			</nav-bar>
		</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	export default {
		name: 'DetailNavBar',
		components: {
			NavBar
		},
		data() {
			return {
				titles: ['商品', '参数','评论', '推荐'],
				currentIndex: 0
			}
		},
		methods: {
			itemClick(index) {
				this.currentIndex = index
				this.$emit('itemClick', index)
			},
			backClick() {
				this.$router.back();
			}
		}
	}
</script>

<style scoped="scoped">
	.title {
		display: flex;
		justify-content: space-around;
		font-size: 14px
	}
	.item-title {
		/* flex: 1; */
	}
	.current {
		color: var(--color-tint);
	}
	.back {
		transform: translateY(6px);
	}
	
</style>
