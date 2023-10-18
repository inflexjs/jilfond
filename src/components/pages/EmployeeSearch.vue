<template>
	<div class="employee-search">
		<div class="container employee-search__container">
			<div class="employee-search__wrapper">
				<aside-component
					class="employee-search__aside"
				></aside-component>
				<user-information-component
					:key="currentEmployee.id"
					:id="currentEmployee.id"
					:email="currentEmployee.email"
					:name="currentEmployee.name"
					:phone="currentEmployee.phone"
					:username="currentEmployee.username"
					class="employee-search__information"
				></user-information-component>
			</div>
		</div>
	</div>
</template>

<script>
import Aside from "@/components/blanks/Aside.vue";
import UserInformation from "@/components/blanks/UserInformation.vue";
import {mapGetters} from "vuex";

export default {
	name: "EmployeeSearch",
	components: {
		'aside-component': Aside,
		'user-information-component': UserInformation
	},
	computed: {
		...mapGetters([
			'currentEmployee',
		])
	},
}
</script>

<style lang="scss">
	.employee-search {
		display: flex;
		flex-grow: 1;
		height: calc(100% - (50px + 58px + 26px));
		&__container {
			position: relative;
			display: flex;
			flex-grow: 1;
		}
		&__wrapper {
			display: flex;
			flex-grow: 1;
			border-radius: 10px;
			background: $shadowColor;
			box-shadow: 0 0 10px 0 $shadowDarkColor;
		}
		&__aside {
			min-width: 240px;
			padding: 27px 30px 27px 20px;
		}
		&__information {
			flex-grow: 1;
			padding: 30px 20px;
			border-left: 1px solid $shadowDarkColor;
		}
	}
</style>
