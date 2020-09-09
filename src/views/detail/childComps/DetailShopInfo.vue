<template>
	<div class="shop-info">
		<div class="shop-top">
			<img :src="shop.logo" />
			<span class="title">{{shop.name}}</span>
		</div>
		<div class="shop-middle">
			<div class="shop-middle-item shop-item-left">
				<div class="info-sells">
					<div class="sells-count">
						{{shop.sells | sellCountFilter}}
					</div>
					<div class="sells-text">总销量</div>
				</div>
			</div>
			<div class="info-goods">
				<div class="goods-count">
					{{shop.goodsCount}}
				</div>
				<div class="goods-text">全部宝贝</div>
			</div>
			
			<div class="shop-middle-item shop-middle-right">
				<table>
					<tr v-for="(item,index) in shop.score" :key="item + index">
						<td>{{item.name}}</td>
						<td class="score" :style="{color: item.isBetter ? '#F6563E': '#88A558'}">{{item.score}}</td>
						<td class="better" :style="{background: item.isBetter ? '#F6563E' :'#88A558'}">
							<span>{{item.isBetter ? '高' : '低'}}</span>
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="shop-bottom">
			<div class="enter-shop">进店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			shop: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			sellCountFilter(num) {
				return (num/10000).toFixed(1) + '万'
			}
		}
	}
</script>

<style>
	.shop-info {
		margin-top: 25px;
		padding: 0 8px;
		color: #000;
	}
	.shop-top img {
		width: 6.25rem;
		vertical-align: middle;
		margin-right: 12px;
	}
	.shop-top .title {
		font-size: 1.375rem;
	}
	.shop-middle {
		display: flex;
		justify-content: space-around;
		margin-top: 15px;
		text-align: center;
	}
	.sells-count, .goods-count{
		font-size: 20px;
		margin-bottom: 10px;
	}
	.shop-middle-right tr{
		line-height: 30px;
	}
	.score {
		display: inline-block;
		margin: 0 8px;
	}
	.info-sells, .info-goods{
		margin-top: 20px;
	}
	.better {
		color: #fff;
		padding: 0 2px;
	}
	.shop-bottom {
		margin-top: 25px;
		
	}
	.enter-shop {
  	width: 150px;
		text-align: center;
		margin: 0 auto;
		padding: 8px 0;
		font-size: 1.25rem;
		background-color: #F2F5FC;
		letter-spacing: 2px;
		border-radius: 6px;
	}
	
</style>
