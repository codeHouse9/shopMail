<template>
	<div class="toast" v-show="show">
		<div>{{message}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		data() {
			return {
				show: false,
				message: ''
			}
		},
		methods: {
			isShow(message='isOK', delay=600) {
				this.show = true
				this.message = message
				setTimeout(() => {
					this.show = false
					this.message = ''
				}, delay)
			}
		}
	}
</script>

<style>
	.toast {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 99999;
		transform: translate(-50%);
		background-color: rgb(241,26,118,.8);
		padding: 4px 8px;
		color: #fff;
	}
</style>
