<template>
	<div class="cate-goods">
		<good-list v-for="(item, index) in cateDetail" :cgoods="item" :key="index"/>
	</div>
</template>

<script>
	import GoodList from 'components/content/GoodList.vue'
	export default {
		name: 'categoryGoods',
		components: {
			GoodList
		},
		props: {
			cateDetail: {
				type: Array,
				default() {
					[]
				}
			}
		},
	}
</script>

<style>
</style>
