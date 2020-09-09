//混入
	import BackTop from 'components/common/backTop/BackTop'
export const mixinBackTop = {
	components: {
		BackTop,
	},
	data() {
		return {
			isShow: false,
		}
	},
	methods: {
		topClick() {
			this.$refs.scroll.scrollTo(0, 0);
		},
	}
}