<template>
	<div class="tab-control">
		<div class="tab-control-item ignore" v-for="(value,index) in titles" :key="value" @click="btnClick(index)">
			<span :class="{current: index === currentIndex}">{{value}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			titles: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0
			}
		},
		methods: {
			btnClick(index) {
				this.currentIndex = index
				this.$emit('tabClick', index)
			}
		}
	}
</script>

<style  scoped>
	.tab-control {
		display: flex;
		background-color: #fff;
	}

	.tab-control-item {
		flex: 1;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
	}

	.tab-control-item span {
		padding-bottom: 2px;
	}

	.current {
		color: var(--color-high-text);
		border-bottom: 2px solid var(--color-tint);

	}
</style>
