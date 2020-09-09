<template>
	<div class="login">
		<div class="head">
			<img src="~assets/img/profile/head.svg" />
		</div>
		<div class="to-login">
			<div class="login-info">微蜜的夏天</div>
			<div class="phone">
				<img src="~assets/img/profile/phone.svg" />
				<span>15770877213</span>
			</div>
		</div>
		<a class="blog" href="https://codehouse9.gitee.io/blog/">前往博客</a>
	</div>
</template>

<script>
	
</script>

<style>
	.login {
		display: flex;
		padding: 6px 10px;
		position: relative;
		background: rgb(255,192,203,.8);
		color: #fff;
	}
	.head img{
		width: 100px;
		height: 100px;
		vertical-align: middle;
	}
	.to-login {
		align-self: center;
		margin-left: 6px;
	}
	.phone {
		padding-top: 10px;
		transform: translateX(-3px);
	}
	.phone img{
		width: 25px;
		height: 25px;
		vertical-align: middle;
	}
	.login-info {
		letter-spacing: 1.6px;
	}
	.blog {
		align-self: center;
		position: absolute;
		right: 20px;
		animation: ani 5s infinite steps(360);
		color: #EA2855;
	}
	@keyframes ani{
		from{
			color: #EA2855;
			opacity: 1;
			transform: rotate(0);
		}
		to{
			color: #EA28E4;
			opacity: .6;
			transform: rotate(360deg);
		}
	}
	
</style>
