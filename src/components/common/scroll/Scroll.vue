<template>
	<div ref="wrapper" class="wrapper">
		<section>
			<slot></slot>
		</section>
	</div>
</template>

<script>
	import Scroll from 'better-scroll'
	export default {
		name: 'Scroll',
		data() {
			return {
				scroll: null
			}
		},
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: true
			}
		},
		created() {
			this.$nextTick(() => {
				this.scroll = new Scroll(this.$refs.wrapper, {
					probeType: this.probeType,
					click:  true,
					pullUpLoad: this.pullUpLoad
				})
				this.scroll.on('scroll', (position) => {
					this.$emit('scroll', position);
				})
				this.scroll.on('pullingUp', () => {
					this.$emit('finishPullUp')
				})
			})
		},
		methods: {
			scrollTo(x, y, time=300) {
				this.scroll && this.scroll.scrollTo(x, y, time)
			},
			finishPullUp() {
				this.scroll && this.scroll.finishPullUp()
			},
			refresh() {
				this.scroll && this.scroll.refresh();
			},
			getScrollY() {
				return this.scroll ? this.scroll.y : 0
			}
		}
	}
</script>

<style scoped>
	
</style>
