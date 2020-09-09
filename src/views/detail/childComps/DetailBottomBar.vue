<template>
	<div class="bottom-bar">
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-kefu
			"></use>
			</svg>
			<span class="text">客服</span>
		</div>
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-dianpu
"></use>
			</svg>
			<span class="text">店铺</span>
		</div>
		<div>
			<svg class="icon" aria-hidden="true">
				<use xlink:href="#icon-shoucang
			"></use>
			</svg>
			<span class="text">收藏</span>
		</div>
		<div>
			<span class="text-bg-cart"  @click="addToCart">加入购物车</span>
		</div>
		<div>
			<span class="text-bg-buy">购买</span>
		</div>
	</div>
</template>

<script>
	import iconfont from 'assets/js/iconfont.js'
	export default {
		name: 'DetailBottomBar',
		methods: {
			addToCart() {
				this.$emit('addCart')
			}
		}
	}
</script>

<style>
	.bottom-bar {
		height: 49px;
		background-color: #fff;
		position: relative;
		z-index: 10;
		display: flex;
		text-align: center;
		font-size: 14px;
		padding-left: 12px;
	}
	.icon {
		width: 24px;
		height: 24px;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
		margin: 3px 0 2px;
	}
	span[class ^=text] {
		display: block;
	}
	span[class ^= text-bg] {
		line-height: 49px;
		width: 85px;
	}
	span[class $= cart] {
		background-color: #F7D103;
	}
	span[class $= buy] {
		background-color: #F40943;
	}
	.bottom-bar div:nth-child(-n + 3) {
		flex: 1;
	}
</style>
