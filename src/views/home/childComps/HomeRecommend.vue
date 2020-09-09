<template>
	<div class="recommend w">
		<div v-for="value in recommends" class="recommend-item">
			<a :href="value.link">
				<img :src="value.image" />
				<h4>{{value.title}}</h4>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.recommend {
		display: flex;
		padding: 10px 0 30px 0;
		border-bottom: 8px solid #eee;
	}
	.recommend-item {
		flex: 1;
		text-align: center;
	}
	.recommend-item img {
		width: 90%;
		margin-bottom: 10px;
	}
	.recommend-item h4 {
		font-weight: 400;
		font-size: 12px;
	}
</style>
