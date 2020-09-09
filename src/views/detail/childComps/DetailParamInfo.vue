<template>
	<div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
		<table v-for="(table, index) in paramInfo.sizes" class="info-size" :key="index">
			<tr v-for="(tr, indexr) in table" :key="indexr">
				<td v-for="(td, indexd) in tr" :key="indexd">
					{{td}}
				</td>
			</tr>
		</table>
		<table class="info-param">
			<tr v-for="(info, index) in paramInfo.infos">
				<td class="info-param-key">{{info.key}}</td>
				<td class="param-value">{{info.value}}</td>
			</tr>
		</table>
		<div class="info-img" v-if="paramInfo.image.length !== 0">
			<img :src="paramInfo.image" />
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailParamInfo',
		props: {
			paramInfo: {
				type: Object,
				default() {
					return {}
				}
			}
		}
	}
</script>

<style>
	.param-info {
		margin: 0 15px;
		display: flex;
		flex-direction: column;
	}
	table {
		border-collapse: collapse;
	}
	.param-info tr{
		height: 40px;
		border-bottom: 2px solid #FAF9FA;
		padding: 18px 0;
		
	}
	.info-param-key {
		width: 65px;
	}
	.info-param .param-value{
		padding-left: 65px;
		color: #F49CAF;
	}
</style>
