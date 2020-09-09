<template>
	<div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
		<div class="info-header">
			<div class="header-title">用户评价</div>
			<div class="header-more">更多</div>
		</div>
		<div class="info-user">
			<img :src="commentInfo.user.avatar" />
			<span>{{commentInfo.user.uname}}</span>
		</div>
		<div class="info-detail">
			<p>{{commentInfo.content}}</p>
			<div class="info-other">
				<span class="date">
					{{commentInfo.created | showDate}}
				</span>
				<span>{{commentInfo.style}}</span>
			</div>
			<div class="info-imgs">
				<img :src="item" v-for="(item, index) in commentInfo.images" :accesskey="index" />
			</div>
		</div>
	</div>
</template>

<script>
	import formatDate from 'common/formatDate.js'
	export default {
		name: 'DetailCommentInfo',
		props: {
			commentInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		filters: {
			showDate(num) {
				const date = new Date(num * 1000)
				return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
			}
		}
	}
</script>

<style>
	.comment-info {
		border-top: 5px solid #F3F3F7;
		padding: 0 12px;
		margin-top: 26px;
	}
	.info-header {
		display: flex;
		justify-content: space-between;
		line-height: 52px;
		color: #333;
		border-bottom: 1px solid #ccc;
	}
	.header-more::after {
		content: "";
		display: inline-block;
		width: 10px;
		height: 10px;
		border-top: 1px solid #666;
		border-right: 1px solid #666;
		transform: translateY(-1px) rotate(45deg);
		margin-right: 10px;
	}
	.info-user {
		margin: 10px 0;
	}
	.info-user img {
		width: 70px;
		vertical-align: middle;
		margin-right: 15px;
	}
	.info-user span {
		font-size: 20px;
		color: #333;
	}
	.info-detail {
		line-height: 22px;
	}
	.info-imgs img {
		width: 100%;
	}
</style>
