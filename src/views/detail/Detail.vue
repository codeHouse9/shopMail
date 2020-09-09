<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @itemClick="itemClick" ref="nav" :probeType="2" />
		<scroll class="content" ref="scroll" @scroll="contentScroll">
			<detail-swiper :topImg="topImg" />
			<detail-base-info :goods="goods" />
			<detail-shop-info :shop="shop" />
			<detail-goods-info :detailInfo="detailInfo" @imgLoad="imgsLoad" />
			<detail-param-info :paramInfo="paramInfo" ref="detailParams" />
			<detail-comment-info :commentInfo="commentInfo" ref="comment" />
			<good-list :cgoods="recommends" ref="recommend" />
		</scroll>
		<detail-bottom-bar @addCart="addCart" />
		<back-top v-show="isShow" @click.native="topClick" />
	</div>
</template>

<script>
	import DetailNavBar from './childComps/DetailNavBar'
	import {
		getDetail,
		Goods,
		getRecommend,
		Shop,
		GoodsParams
	} from 'network/detail'
	import DetailSwiper from './childComps/DetailSwiper.vue'
	import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
	import DetailShopInfo from './childComps/DetailShopInfo.vue'
	import Scroll from 'components/common/scroll/Scroll'
	import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
	import debounce from 'common/debounce.js'
	import DetailParamInfo from './childComps/DetailParamInfo.vue'
	import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
	import GoodList from 'components/content/GoodList.vue'
	import DetailBottomBar from './childComps/DetailBottomBar.vue'
	import {
		BACK_POSTION
	} from 'common/const'
	import {
		mixinBackTop
	} from 'common/mixin'
	import {
		ADD_COUNTER,
		ADD_TO_CART,
		ADD_CART_LIST
	} from '../../store/const-type.js'
	import {mapActions} from 'Vuex'
	export default {
		name: "Detail",
		data() {
			return {
				iid: null,
				topImg: [],
				goods: {},
				shop: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommends: [],
				itemTop: [],
				getItemTop: null,
				currentIndex: 0,
			}
		},
		mixins: [mixinBackTop],
		components: {
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			GoodList,
			DetailBottomBar,
		},
		methods: {
			...mapActions({
				addGoods: ADD_CART_LIST
			}),
			addCart() {
				const cartGoods = {
					image: this.topImg[0],
					title: this.goods.title,
					desc: '商品描述：' + this.goods.desc,
					price: this.goods.realPrice,
					iid: this.iid
				}
				//1
				// this.$store.dispatch(ADD_CART_LIST, cartGoods).then(res => {
				// 	console.log(res);
				// })
				//2映射
				this.addGoods(cartGoods).then(res => {
					this.$toast.isShow(res, 1000);
					// this.show = true
					// this.message = res
					// setTimeout(() => {
					// 	this.show = false
					// }, 1000)
				})
			},
			
			topClick() {
				this.$refs.scroll.scrollTo(0, 0, 300);
			},
			imgsLoad() {
				const refresh = debounce(this.$refs.scroll.refresh, 500)
				refresh()
				this.getItemTop()
			},
			itemClick(index) {
				this.$refs.scroll.scrollTo(0, -this.itemTop[index] + 44, 300);

			},
			contentScroll(position) {
				this.isShow = Math.abs(position.y) >= BACK_POSTION
				const y = Math.abs(position.y) + 44
				let length = this.itemTop.length;
				for (let i = 0; i < length - 1; i++) {
					// if(this.currentIndex !== i && (i< length - 1 && y >= this.itemTop[i] && y < this.itemTop[i+1]) || (i === length -1 && y >= this.itemTop[i])) {
					// 	this.currentIndex = i;
					// 	this.$refs.nav.currentIndex = this.currentIndex;
					// 	console.log(this.currentIndex);
					// }
					//方法2 
					if (this.currentIndex !== i && (y >= this.itemTop[i] && y < this.itemTop[i + 1])) {
						this.currentIndex = i;
						this.$refs.nav.currentIndex = this.currentIndex;
					}
				}


			}
		},
		created() {
			// 1.保留iid
			this.iid = this.$route.params.iid
			//2. 根据iid请求详情数据
			getDetail(this.iid).then(res => {
				const data = res.result;
				//轮播图数据
				this.topImg = data.itemInfo.topImages
				//2详情
				// console.log(data);
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				// console.log(this.goods);
				//3商家
				this.shop = new Shop(data.shopInfo)
				//4详情
				this.detailInfo = data.detailInfo
				// console.log(this.detailInfo);
				//5尺码
				this.paramInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule)
				//6评论
				if (data.rate.cRate !== 0) {
					this.commentInfo = data.rate.list[0]
				}
			}).catch(err => {
				this.$toast.isShow(err, 3000);
			})
			//3请求推荐数据
			getRecommend().then(res => {
				this.recommends = res.data.list
				// console.log(this.recommends);
			})
			this.$nextTick(() => {
				this.getItemTop = debounce(() => {
					this.itemTop = []
					this.itemTop.push(0)
					this.itemTop.push(this.$refs.detailParams.$el.offsetTop)
					this.itemTop.push(this.$refs.comment.$el.offsetTop)
					this.itemTop.push(this.$refs.recommend.$el.offsetTop)
					this.itemTop.push(Number.MAX_VALUE);
				}, 100)
			})
		},
		updated() {
			this.$refs.scroll.refresh();
		},
	}
</script>

<style scoped>
	#detail {
		position: relative;
		background-color: #fff;
		height: 100vh;
	}

	.content {
		height: calc(100% - 44px - 49px);
		overflow: hidden;
	}

	/* .detail-nav {
		position: relative;
		z-index: 9;
	} */
</style>
