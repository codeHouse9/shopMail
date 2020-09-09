<template>
	<div class="bottom-btn">
		<div class="btn-checked">
			<checked-btn :isShow="isSelectAll" @click.native="isChecked"/>
			<span>全选</span>
		</div>
		<div class="total-price">
			合计: {{totalPrice}}
		</div>
		<div class="go-buy" @click="go">
			去计算: ({{goodsNum}})
		</div>
	</div>
</template>

<script>
	import CheckedBtn from 'components/common/checkedBtn/CheckedBtn.vue'
	import {
		mapGetters
	} from 'Vuex'
	export default {
		name: 'CartButtonBtn',
		components: {
			CheckedBtn
		},
		data() {
			return {
				
			}
		},
		methods: {
			isChecked() {
				//1 foreach
				if(this.isSelectAll) {
					this.cartList.forEach(item => item.checked = false)
				} else {
					//2 map
					this.cartList.map(item => item.checked = true)
				}
			},
			go() {
				const ifGo = this.cartList.some(item => item.checked)
				if(ifGo) {
					return this.$toast.isShow('Loading', 2000)
				}
				this.$toast.isShow('请选择商品', 1000)
			}
		},
		computed: {
			...mapGetters(['cartList']),
			totalPrice() {
				return '￥' + this.cartList.filter(item => item.checked).reduce((total, item) => total + item.price * item.count, 0)
					.toFixed(2)
				console.log(this.goodsNum[0]);
			},
			goodsNum() {
				return this.cartList.filter(item => item.checked).map(item => item.count).reduce((num, item) => num + item, 0)
			},
			//遍历
			isSelectAll() {
				if (this.cartList.length === 0) return false
				//1 find
				// return !this.cartList.find(item => !item.checked)
				//2 some
				return !this.cartList.some(item => !item.checked)
				//3 filter
				// return !(this.cartList.filter(item => !item.checked).length)
				//4 普通遍历
				// for (let item of this.cartList) {
				// 	if(!item.checked) return false
				// }
				// return true
			}
		}
	}
</script>

<style>
	.bottom-btn {
		display: flex;
		height: 40px;
		line-height: 40px;
		margin-left: 10px;
	}

	.btn-checked {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.btn-checked span {
		margin-left: 6px;
	}

	.total-price {
		flex: 1;
	}

	.go-buy {
		width: 100px;
		background-color: #F11A65;
		color: #fff;
		padding-left: 8px;
	}
</style>
