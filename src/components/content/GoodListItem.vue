<template>
	<div class="good-item" @click="itemClick">
			<img :src="formatImg"  @load="imgLoad"/>
			<span class="goods-info">
				<p class="goods-title">{{goodItem.title}}</p>
				<p class="goods-price">
					<span class="price">
						￥{{goodItem.price}}
					</span>
					<span class="collect">
						{{goodItem.cfav}}
					</span>
				</p>
			</span>
			<button>立即购买</button>
	</div>
</template>

<script>
	export default {
		props: {
			goodItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		computed: {
			formatImg() {
				return this.goodItem.image || this.goodItem.img || this.goodItem.show.img 
			}
		},
		methods: {
			imgLoad() {
				this.$bus.$emit('itemImgLoad')
			},
			itemClick(event) {
				if(this.goodItem !== undefined || this.goodItem.iid !== undefined) {
					this.$router.push('/detail/' + this.goodItem.iid);
				}
			}
		}
	}
</script>

<style scoped="scoped">
	.good-item {
		border-radius: 5px;
		margin-bottom: 2%;
		width: 48%;
		text-align: center;
		background-color: var(--color-background);
	}

	.good-item .goods-info {
		display: block;
		font-size: 12px;
		padding: 0 6px;
		margin: 1% 0;
	}

	.good-item .goods-info .goods-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 3% 0;
	}

	.goods-price {
		margin: 5% 0;
	}

	.good-item .price {
		float: left;
		font-weight: 600;
	}

	.good-item .collect {
		position: relative;
		float: right;
		margin-right: 15px;
	}

	.good-item .collect::after {
		content: "";
		position: absolute;
		top: -1px;
		right: -15px;
		width: 14px;
		height: 14px;
		background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
	}

	.good-item button {
		display: block;
		border: none;
		outline: none;
		width: 90%;
		text-align: center;
		line-height: 22px;
		color: #fff;
		margin: 0 auto;
		background-color: #FF5777;
		border-radius: 5px;
	}

	.good-item img {
		width: 100%;
		height: 78%;
		border: 3px solid var(--color-tint);
	}
</style>
