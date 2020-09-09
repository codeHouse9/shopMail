<template>
	<div class="list-item">
		<checked-btn :isShow="cartGoods.checked" @click.native="isChecked"/>
		<div class="item-img">
			<img :src="cartGoods.image" />
		</div>
		<div class="item-info">
			<div class="item-title">
				{{cartGoods.title}}
			</div>
			<div class="item-desc">
				{{cartGoods.desc}}
			</div>
			<div class="info-bottom">
				<div class="item-price-left">
					{{cartGoods.price}}
				</div>
				<div class="item-price-right">
					<button @click="sub" class="sub" :disabled="isAble"> - </button>
					{{cartGoods.count}}
					<button @click="add" class="add"> + </button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import CheckedBtn from 'components/common/checkedBtn/CheckedBtn.vue'
	export default {
		props: {
			cartGoods: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
			}
		},
		components: {
			CheckedBtn
		},
		computed: {
			isAble() {
				return this.cartGoods.count <= 1
			}
		},
		methods: {
			isChecked() {
				this.cartGoods.checked = !this.cartGoods.checked;
				
			},
			sub() {
				this.cartGoods.count -= 1
			},
			add() {
				this.cartGoods.count += 1
			}
		}
	}
</script>

<style scoped="scoped">
	.list-item {
		display: flex;
		padding: 12px 6px;
		border-bottom: 1px solid #ccc;
		margin-right: 3px;
	}
	
	.item-img img {
		width: 60px;
		border-radius: 5%;
		margin: 0 6px;
	}
	.item-title {
		width: 260px;
		font-size: 18px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.item-desc {
		width: 260px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin: 16px 0;
	}
	.info-bottom {
		display: flex;
		justify-content: space-between;
		margin-right: 10px;
		line-height: 22px;
	}
	.item-price-left {
		color: #F4632F;
	}
	.item-price-left::before {
		content: "￥";
	}
	.item-price-right button {
		width: 20px;
		height: 20px;
	}
</style>
