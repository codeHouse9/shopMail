<template>
	<div class="good-list">
		<good-list-item 
		v-for="(item, index) in cgoods" 
		:key="index" 
		:goodItem="item" />
	</div>
</template>

<script>
	import GoodListItem from './GoodListItem.vue'
	export default {
		props: {
			cgoods: {
				type: Array,
				default () {
					return []
				}
			}
		},
		components: {
			GoodListItem
		}
	}
</script>

<style>
	.good-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
		background-color: #EFEFEF;
	}
</style>
