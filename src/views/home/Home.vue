<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2" class="tab-control" v-show="isTabFixed" />
		<!-- 轮播图 -->
		<scroll class="content" ref="scroll" :probe-type="2" @scroll="scroll" :pull-up-load="true" @finishPullUp="finishPullUp">
			<home-swiper :banners="banners" @imgLoad="imgLoad" />
			<home-recommned :recommends="recommends" />
			<home-feature />
			<tab-control :titles="titles" @tabClick="tabClick" ref="tabControl" />
			<good-list :cgoods="showGoods" ref="goodsTop" />
		</scroll>
		<back-top v-show="isShow" @click.native="topClick" />

	</div>

</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import tabControl from 'components/common/tabcontrol/tabControl.vue'
	import Scroll from 'components/common/scroll/Scroll'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommned from './childComps/HomeRecommend.vue'
	import HomeFeature from './childComps/HomeFeature.vue'
	import GoodList from 'components/content/GoodList.vue'
	import {
		getHomeMultiData,
		getHomeGoods
	} from 'network/getHomeData.js'
	import debounce from 'common/debounce.js'
	import {
		BACK_POSTION
	} from 'common/const'
	import {
		mixinBackTop
	} from 'common/mixin.js'
	export default {
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommned,
			HomeFeature,
			tabControl,
			GoodList,
			Scroll,
		},
		mixins: [mixinBackTop],
		data() {
			return {
				banners: [],
				recommends: [],
				titles: ['流行', '新款', '精选'],
				goods: {
					pop: {
						page: 0,
						list: []
					},
					new: {
						page: 0,
						list: []
					},
					sell: {
						page: 0,
						list: []
					}
				},
				currentType: 'pop',
				//	y: 0,
				topHeight: 0,
				isTabFixed: false,
				saveY: 0,
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			},
		},
		created() {
			this.getHomeData()
			this.getHomeGoodsData('pop')
			this.getHomeGoodsData('new')
			this.getHomeGoodsData('sell')
		},
		mounted() {
			//事件总线:监听图片加载完成
			// console.log(debounce)
			const refresh = debounce(this.$refs.scroll.refresh, 50)
			this.$bus.$on('itemImgLoad', () => {
				// this.$refs.scroll.scroll.refresh();
				refresh()
			})
		},
		updated() {
			//获取offsetTop
			this.topHeight = this.$refs.tabControl.$el.offsetTop
			this.$refs.scroll.refresh();
		},
		activated() {
			this.$refs.scroll.scrollTo(0, this.saveY, 500)
			this.$refs.scroll.refresh();
		},
		deactivated() {
			this.saveY = this.$refs.scroll.getScrollY();
		},
		methods: {
			imgLoad() {
				this.$refs.scroll.refresh();
			},
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop';
						break
					case 1:
						this.currentType = 'new'
						break
					case 2:
						this.currentType = 'sell'
						break
				}
				this.$refs.tabControl.currentIndex = index
				this.$refs.tabControl2.currentIndex = index
			},
			getHomeData() {
				getHomeMultiData().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list
				})
			},
			getHomeGoodsData(type) {
				let page = this.goods[type].page + 1
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					this.$refs.scroll.finishPullUp();
					// this.$refs.scroll.scroll.refresh();
				})
			},
			scroll(position) {
				this.isShow = Math.abs(position.y) >= BACK_POSTION
				this.isTabFixed = Math.abs(position.y) >= this.topHeight
			},
			finishPullUp() {
				this.getHomeGoodsData(this.currentType);
				this.$refs.scroll.refresh();
			},
		}
	}
</script>

<style scoped="scoped">
	.home-nav {
		background-color: var(--color-tint);
		color: #fff;
	}

	.home {
		position: relative;
		height: 100vh;
	}

	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
		z-index: 1;
		/* height: calc(100% - 93px); */
		overflow: hidden;
	}

	.tab-control {
		position: relative;
		z-index: 9;
		transform: translateY(-1px);
	}
</style>
