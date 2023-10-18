<template>
	<div class="main">
		<header-component/>
		<router-view/>
	</div>
</template>

<script>
import Header from "@/components/sections/Header.vue";

export default {
	name: "Layout",
	components: {
		'header-component': Header
	}
}
</script>

<style lang="scss">
	.main {
		display: flex;
		flex-direction: column;
		row-gap: 26px;
		padding-top: 50px;
		padding-bottom: 58px;
		height: 100vh;
		box-sizing: border-box;
	}
</style>
