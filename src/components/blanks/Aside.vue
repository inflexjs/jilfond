<template>
	<div class="employee-aside">
		<div class="employee-aside__field">
			<h2 class="employee-aside__title">Поиск сотрудников</h2>
			<input-component
				:value="searchValue"
				:loading="isLoading"
				:disabled="isLoading"
				placeholder="Введите Id или имя"
				@onenter="onSearch"
				@blur="onSearch"
			/>
		</div>
		<div class="employee-aside__field employee-aside__field--grow">
			<h2 class="employee-aside__title">Результаты</h2>
			<div
				v-if="employeesList.length"
				class="employee-aside__list"
			>
				<user-card-component
					v-for="employee in employeesList"
					:key="employee.id"
					:id="employee.id"
					:email="employee.email"
					:name="employee.name"
					:active="currentEmployeeId === employee.id"
					class="employee-aside__item"
					@click="onCardClick(employee, $event)"
				></user-card-component>
			</div>
			<p
				v-else
				class="employee-aside__text"
			>{{ resultText }}</p>
		</div>
	</div>
</template>

<script>
import UserCard from "@/components/blanks/UserCard.vue";
import Input from "@/components/ui/Input.vue";
import {mapActions, mapGetters} from "vuex";

export default {
	name: "EmployeeAside",
	components: {
		'input-component': Input,
		'user-card-component': UserCard
	},
	computed: {
		...mapGetters([
			'searchValue',
			'employeesList',
			'currentEmployeeId',
			'isLoading',
			'resultText'
		])
	},
	methods: {
		...mapActions([
			'setSearchValue',
			'setCurrentEmployee',
			'fetchEmployees',
			'setCurrentEmployeeId'
		]),
		stringToQueryParams(string) {
			return string.split(',').map(item => {
				const numberPattern = /\d+/g;
				let subject = item.trim()
				if (!subject) return ''
				
				subject = subject.match(numberPattern) ? parseInt(subject) : subject

				switch (typeof subject) {
					case "number":
						return `id=${subject}`
					case "string":
						return `username=${subject}`
				}
			}).join('&')
		},
		onSearch(value) {
			if (!value) return
			const query = this.stringToQueryParams(value)

			this.setSearchValue(value)
			this.fetchEmployees(query)
		},
		onCardClick(employee, id) {
			this.setCurrentEmployeeId(id)
			this.setCurrentEmployee(employee)
		}
	}
}
</script>

<style lang="scss">
	.employee-aside {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		&__field {
			display: flex;
			flex-direction: column;
			row-gap: 14px;
			&--grow {
				flex-grow: 1;
				overflow: hidden;
				margin: -10px;
				padding: 10px;
			}
		}
		&__title {
			color: $primaryColor;
			font-size: 16px;
			font-weight: 600;
		}
		&__list {
			display: flex;
			flex-direction: column;
			row-gap: 18px;
			overflow-y: auto;
			overflow-x: hidden;
			margin: -10px;
			padding: 10px;
		}
		&__item {
			width: 240px;
			min-height: 70px;
		}
	}
</style>
