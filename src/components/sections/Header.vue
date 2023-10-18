<template>
	<div class="header">
		<div class="container header__container">
			<h1 class="header__title">{{ productName }}</h1>
			<p class="header__text">{{ userName }}</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: "Header",
	computed: {
		...mapGetters([
			'productName',
			'userName'
		])
	}
}
</script>

<style lang="scss">
	.header {
		&__container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		&__title {
			color: $redColor;
			font-size: 32px;
			font-weight: 700;
		}
	}
</style>
