<template>
	<div class="cart">
		<nav-bar class="nav-bar">
			<h3 slot="center">购物车({{goodsLen}})</h3>
		</nav-bar>
		<cart-list />
		<cart-bottom-btn />
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import {
		mapGetters
	} from 'Vuex'
	import CartList from './childComps/CartList.vue'
	import CartBottomBtn from './childComps/CartBottomBtn.vue'
	export default {
		name: 'Cart',
		components: {
			NavBar,
			CartList,
			CartBottomBtn
		},
		computed: {
			...mapGetters(['goodsLen'])
		}
	}
</script>


<style scoped="scoped">
	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
		font-weight: 400;
	}
</style>
