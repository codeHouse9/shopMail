<template>
	<div class="cart-list">
		<scroll class="content" ref="scroll">
				<cart-list-item  v-for="(item, index) in cartList" :cartGoods="item" />
		</scroll>
	</div>
</template>

<script>
	import {
		mapGetters
	} from 'Vuex'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import CartListItem from './CartListItem.vue'
	export default {
		computed: {
			...mapGetters({
				//goodsLen: 'goodsLen'
				cartList: 'cartList'
			})
		},
		components: {
			Scroll,
			CartListItem
		},
		activated() {
			this.$refs.scroll.refresh();
		}
	}
</script>

<style scoped="scoped">
	.cart-list {
		
	}
	.content {
		height: calc(100vh - 44px - 49px - 40px);
		overflow: hidden;
	}
</style>
