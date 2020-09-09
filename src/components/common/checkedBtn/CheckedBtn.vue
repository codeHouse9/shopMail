<template>
	<div class="checked-btn">
		<div :class="{btn: isShow}"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props: {
			isShow: {
				type: Boolean,
				default: false,
			}
		},
		methods: {
			btnClick() {
				this.isShow = !this.isShow
			}
		},

	}
</script>

<style>
	.checked-btn {
		margin: auto 0;
		width: 22px;
		height: 22px;
		background-color: #fff;
		border-radius: 50%;
		border: 1px solid #ccc;
	}

	.btn {
		width: 14px;
		height: 8px;
		border-top: 2px solid #EA311D;
		border-right: 2px solid #EA311D;
		transform: translate(2px, 3px) rotate(135deg);
	}
</style>
