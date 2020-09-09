<template>
	<div class="base-info" v-if="Object.keys(goods).length !== 0">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<span class="n-price">￥{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span v-if="goods.discount" class="discount">{{goods.discount}}
			</span>
		</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-service">
			<span  v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon" v-if="goods.services[index-1].icon"/>
				<span v-if="goods.services[index-1].icon">{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			goods: {
				type:Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style>
	.base-info {
		margin-top: 15px;
		padding: 0 8px;
		color: #999;
		border-bottom: 5px solid #f2f5f8;
	}
	.info-title {
		color: #222;
	}
	.info-price {
		margin-top: 10px;
	}
	.info-price .n-price {
		font-size: 24px;
		color: var(--color-high-text)
	}
	.info-price .o-price {
		font-size: 13px;
		margin-left: 8px;
		text-decoration: line-through;
	}
	.discount {
		font-size: 16px;
		background-color: #FF6981;
		border-radius:9px;
		padding: 2px 3px;
		color: #fff;
		margin-left: 3px;
	}
	.info-other {
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		margin-top: 20px;
		padding-bottom: 10px;
		border-bottom:1px solid #ccc ;
	}
	.info-service {
		display: flex;
		justify-content: space-between;
		margin: 20px 0;
		font-size: 0.875rem;
		color: #333;
	}
	.info-service img{
		width: 22px;
		vertical-align: middle;
	}
</style>
