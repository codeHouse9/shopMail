<template>
	<div class="nav-bar ignore">
		<span class="left"><slot name="left"></slot></span>
		<h3 class="center"><slot name="center"></slot></h3>
		<span class="right"><slot name="right"></slot></span>
	</div>
</template>

<script>
	export default {
		name: 'NavBar'
	}
</script>

<style scoped>
	.nav-bar {
		display: flex;
		height: 44px;
		line-height: 44px;
		text-align: center;
	}
	.left, .right {
		width: 60px;
	}
	.center {
		flex: 1;
		font-weight: 400;
	}
</style>
